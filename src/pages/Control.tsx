import React from 'react';
import { Settings, ChevronDown } from 'lucide-react';
import { StatusBar } from '../components/control/StatusBar';
import { CameraFeed } from '../components/control/CameraFeed';
import { DirectionalControls } from '../components/control/DirectionalControls';
import { SpeedControl } from '../components/control/SpeedControl';
import { SensorGrid } from '../components/control/SensorGrid';
import { GPSWidget } from '../components/control/GPSWidget';
import { PrecisionMovement, PresetActions } from '../components/control/MovementAdditional';

const Control: React.FC = () => {
    return (
        <div className="pb-10">
            <div className="mb-6 flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Vehicle Control Interface</h1>
                    <p className="text-gray-500 mt-2">Precision remote operation with real-time monitoring</p>
                </div>

                <div className="bg-white px-4 py-2 border border-gray-200 rounded-lg shadow-sm flex items-center gap-4 hover:border-green-300 transition-colors cursor-pointer">
                    <div className="p-2 bg-gray-50 rounded-full text-gray-600">
                        <Settings size={20} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="text-sm font-bold text-gray-900">Tractor Alpha</h3>
                            <ChevronDown size={14} className="text-gray-500" />
                        </div>
                        <p className="text-xs text-gray-500">John Deere 8R 410</p>
                    </div>
                </div>
            </div>

            <StatusBar />

            {/* Row 1: Directional (Left) + Camera (Right - spans rest) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-1">
                    <DirectionalControls />
                </div>
                <div className="lg:col-span-2">
                    <CameraFeed />
                </div>
            </div>

            {/* Row 2: Controls (Left) + Sensors (Middle) + GPS (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Additional Movement Controls */}
                <div className="space-y-6">
                    <SpeedControl />
                    <PrecisionMovement />
                    <PresetActions />
                </div>

                {/* Middle Column: Sensors */}
                <div>
                    <SensorGrid />
                </div>

                {/* Right Column: GPS */}
                <div>
                    <GPSWidget />
                </div>
            </div>
        </div>
    );
};

export default Control;
