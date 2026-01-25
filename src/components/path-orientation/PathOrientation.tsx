import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { io, Socket } from 'socket.io-client';



const PathOrientation: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const socketRef = useRef<Socket | null>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const container = mountRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        // ===== THREE.JS SETUP =====
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a0a);

        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.set(0, 5, 15);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Adds inertia to movement
        controls.dampingFactor = 0.05;

        scene.add(new THREE.GridHelper(20, 20));

        const cube = new THREE.Mesh(
            new THREE.BoxGeometry(2, 0.2, 1),
            new THREE.MeshNormalMaterial()
        );
        scene.add(cube);

        // --- PATH TRAIL ---
        const MAX_POINTS = 500;
        const pathGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(MAX_POINTS * 3);
        pathGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const pathLine = new THREE.Line(pathGeometry, new THREE.LineBasicMaterial({ color: 0x00ff00 }));
        scene.add(pathLine);
        let pathArray: THREE.Vector3[] = [];

        // ===== STATE VARIABLES =====
        let pitch = 0, roll = 0, yaw = 0;
        let posX = 0, posY = 0, posZ = 0;
        let velX = 0, velY = 0, velZ = 0;

        const dt = 0.05;
        const alpha = 0.96;
        const friction = 0.7;
        const snapBack = 0.95;

        // Initialize Socket
        socketRef.current = io("http://127.0.0.1:3000");

        socketRef.current.on("gyroscope_data", (data: { ax: number, ay: number, az: number, gx: number, gy: number, gz: number }) => {
            // 1. Calculate Orientation
            const accelPitch = Math.atan2(data.ay, data.az);
            const accelRoll = Math.atan2(-data.ax, Math.sqrt(data.ay * data.ay + data.az * data.az));

            const gx_rad = data.gx * (Math.PI / 180);
            const gy_rad = data.gy * (Math.PI / 180);
            const gz_rad = data.gz * (Math.PI / 180);

            pitch = alpha * (pitch + gx_rad * dt) + (1 - alpha) * accelPitch;
            roll = alpha * (roll + gz_rad * dt) + (1 - alpha) * accelRoll;
            yaw += gy_rad * dt;

            // 2. Gravity Removal
            let realAX = data.ax - Math.sin(roll);
            let realAY = data.ay + Math.sin(pitch);
            let realAZ = data.az - Math.cos(pitch) * Math.cos(roll);

            // 3. Deadzone
            const deadzone = 0.2;
            if (Math.abs(realAX) < deadzone) realAX = 0;
            if (Math.abs(realAY) < deadzone) realAY = 0;
            if (Math.abs(realAZ) < deadzone) realAZ = 0;

            // 4. Physics
            velX += realAX * 9.81 * dt;
            velY += realAY * 9.81 * dt;
            velZ += realAZ * 9.81 * dt;

            velX *= friction;
            velY *= friction;
            velZ *= friction;

            posX += velX * dt;
            posY += velY * dt;
            posZ += velZ * dt;

            // 5. Recentering
            posX *= snapBack;
            posY *= snapBack;
            posZ *= snapBack;

            // 6. Update Path
            const currentPos = new THREE.Vector3(posX * 5, posZ * 5, -posY * 5);
            pathArray.push(currentPos);
            if (pathArray.length > MAX_POINTS) pathArray.shift();

            const posAttr = pathLine.geometry.attributes.position;
            for (let i = 0; i < pathArray.length; i++) {
                posAttr.setXYZ(i, pathArray[i].x, pathArray[i].y, pathArray[i].z);
            }
            pathLine.geometry.setDrawRange(0, pathArray.length);
            posAttr.needsUpdate = true;
        });

        let animationId: number;
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            cube.rotation.set(pitch, yaw, roll, 'YXZ');
            cube.position.set(posX * 5, posZ * 5, -posY * 5);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Use ResizeObserver for robust sizing
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
            }
        });

        resizeObserver.observe(container);

        return () => {
            resizeObserver.disconnect();
            cancelAnimationFrame(animationId);
            if (socketRef.current) socketRef.current.disconnect();
            if (container && container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            pathGeometry.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="w-full h-full min-h-[400px]" />;
};


export default PathOrientation;
