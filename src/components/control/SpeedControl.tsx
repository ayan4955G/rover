import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Gauge } from 'lucide-react';

export const SpeedControl: React.FC = () => {
    const [speed, setSpeed] = useState(50);

    return (
        <Card className="mb-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Speed Control</h3>
                <div className="flex items-center gap-1 text-green-700 font-bold">
                    <Gauge size={16} />
                    <span>{speed}%</span>
                </div>
            </div>

            <div className="px-2">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-700"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                </div>
            </div>

            <div className="mt-6 flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">Max Speed Limit</span>
                <span className="font-bold text-gray-900">15 mph</span>
            </div>
        </Card>
    );
};
