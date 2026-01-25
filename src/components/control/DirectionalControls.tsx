import React from 'react';
import { Card } from '../ui/Card';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Square, Keyboard } from 'lucide-react';

export const DirectionalControls: React.FC = () => {
    return (
        <Card className="h-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-gray-900">Directional Controls</h3>
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <Keyboard size={14} />
                    <span>WASD Keys</span>
                </div>
            </div>

            <div className="flex flex-col items-center gap-2 justify-center h-[200px]">
                {/* Forward */}
                <button className="w-16 h-16 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 active:bg-green-50 active:border-green-300 flex flex-col items-center justify-center gap-1">
                    <ArrowUp size={20} className="text-gray-700" />
                    <span className="text-[10px] text-gray-400 font-medium">Forward</span>
                    <span className="text-[10px] text-gray-300 border border-gray-200 rounded px-1">W</span>
                </button>

                {/* Middle Row */}
                <div className="flex items-center gap-2">
                    <button className="w-16 h-16 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 active:bg-green-50 active:border-green-300 flex flex-col items-center justify-center gap-1">
                        <ArrowLeft size={20} className="text-gray-700" />
                        <span className="text-[10px] text-gray-400 font-medium">Left</span>
                        <span className="text-[10px] text-gray-300 border border-gray-200 rounded px-1">A</span>
                    </button>

                    <button className="w-16 h-16 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 active:bg-red-50 active:border-red-300 flex flex-col items-center justify-center gap-1 group">
                        <Square size={20} className="text-gray-700 group-active:text-red-600 fill-current" />
                        <span className="text-[10px] text-gray-400 font-medium group-active:text-red-500">Stop</span>
                        <span className="text-[10px] text-gray-300 border border-gray-200 rounded px-1">S</span>
                    </button>

                    <button className="w-16 h-16 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 active:bg-green-50 active:border-green-300 flex flex-col items-center justify-center gap-1">
                        <ArrowRight size={20} className="text-gray-700" />
                        <span className="text-[10px] text-gray-400 font-medium">Right</span>
                        <span className="text-[10px] text-gray-300 border border-gray-200 rounded px-1">D</span>
                    </button>
                </div>

                {/* Backward */}
                <button className="w-16 h-16 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 active:bg-green-50 active:border-green-300 flex flex-col items-center justify-center gap-1">
                    <ArrowDown size={20} className="text-gray-700" />
                    <span className="text-[10px] text-gray-400 font-medium">Backward</span>
                    <span className="text-[10px] text-gray-300 border border-gray-200 rounded px-1">X</span>
                </button>
            </div>

            <div className="mt-8 p-3 bg-gray-50 rounded-lg flex items-center gap-2 text-xs text-gray-500">
                <div className="w-4 h-4 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold font-serif">i</div>
                Use keyboard shortcuts or click buttons for precise vehicle control
            </div>
        </Card>
    );
};
