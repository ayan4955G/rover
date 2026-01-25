import React from 'react';
import PathOrientation from '../components/path-orientation/PathOrientation';

const PathOrientationPage: React.FC = () => {
    return (
        <div className="h-[calc(100vh-8rem)] w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white relative">
            <div className="absolute top-4 left-4 z-10 bg-black/50 text-white p-2 rounded backdrop-blur-sm">
                <h2 className="text-xl font-bold">Path & Orientation</h2>
                <p className="text-sm opacity-80">Real-time 3D Visualization</p>
            </div>
            <PathOrientation />
        </div>
    );
};

export default PathOrientationPage;
