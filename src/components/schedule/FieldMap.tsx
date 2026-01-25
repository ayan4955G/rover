import React from 'react';
import { Card } from '../ui/Card';


export const FieldMap: React.FC = () => {
    const mapUrl = "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1774&q=80";

    return (
        <Card className="h-full flex flex-col" noPadding>
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white z-10 relative">
                <div>
                    <h3 className="font-semibold text-gray-900">Field Map</h3>
                    <p className="text-xs text-gray-500">Real-time vehicle positions and planned routes</p>
                </div>

                <div className="flex bg-gray-100 p-1 rounded-lg">
                    <button className="px-3 py-1 rounded-md text-xs font-medium bg-green-800 text-white shadow-sm">Satellite</button>
                    <button className="px-3 py-1 rounded-md text-xs font-medium text-gray-500 hover:text-gray-900">Terrain</button>
                </div>
            </div>

            <div className="flex-1 relative bg-gray-200 overflow-hidden group">
                <img src={mapUrl} alt="Field Map" className="w-full h-full object-cover grayscale-[20%]" />

                {/* Controls Overlay */}
                <div className="absolute top-4 left-4 z-20">
                    <button className="bg-white text-blue-600 px-3 py-1.5 rounded shadow-sm text-xs font-medium hover:bg-gray-50">
                        View larger map
                    </button>
                </div>

                {/* Markers - Mocked */}
                <div className="absolute top-1/3 left-1/4">
                    <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white shadow-lg flex items-center justify-center text-white font-bold text-xs" title="Tractor Alpha">TA</div>
                </div>

                <div className="absolute bottom-1/3 right-1/4">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-white shadow-lg flex items-center justify-center text-white font-bold text-xs" title="Harvester Beta">HB</div>
                </div>

                {/* Path Line - Mocked via SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <path d="M200 200 Q 400 300 600 400" stroke="#107b41" strokeWidth="3" fill="none" strokeDasharray="5,5" />
                </svg>
            </div>
        </Card>
    );
};
