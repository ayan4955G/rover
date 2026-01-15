console.log("JS Loaded");

import * as THREE from "/three/three.module.js";
// import { OrbitControls } from "/three/examples/jsm/controls/OrbitControls.js";

// ===== SOCKET.IO =====
const socket = io();

// ===== THREE.JS =====
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ✅ ORBIT CONTROLS


// Cube (IMU body)
const geometry = new THREE.BoxGeometry(1, 0.2, 2);
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.set(0, 1, 3);

// Light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// ===== IMU STATE =====
let rx = 0, ry = 0, rz = 0;

// ===== RECEIVE DATA =====
socket.on("gyroscope_data", (data) => {
  rx += data.gx * 0.002;
  ry += data.gy * 0.002;
  rz += data.gz * 0.002;

  document.getElementById("info").innerText =
    `GX:${data.gx.toFixed(2)} GY:${data.gy.toFixed(2)} GZ:${data.gz.toFixed(2)}`;
});

// ===== ANIMATION LOOP =====
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.set(rx, ry, rz);

  renderer.render(scene, camera);
}

animate();

// ===== RESIZE =====
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
