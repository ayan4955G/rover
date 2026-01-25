import React from 'react';
import { Card } from '../ui/Card';
import { Tractor, Battery, WifiOff, Columns } from 'lucide-react';

export const FleetStats: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Tractor className="text-green-700" size={20} />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">3</h3>
                        <p className="text-sm text-gray-500 mt-1">Active Vehicles</p>
                    </div>
                    <span className="text-xs text-gray-400">/10</span>
                </div>
            </Card>

            <Card>
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Columns className="text-yellow-600 rotate-90" size={20} />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">2</h3>
                        <p className="text-sm text-gray-500 mt-1">Idle Vehicles</p>
                    </div>
                    <span className="text-xs text-gray-400">/10</span>
                </div>
            </Card>

            <Card>
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <WifiOff className="text-red-500" size={20} />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">1</h3>
                        <p className="text-sm text-gray-500 mt-1">Offline</p>
                    </div>
                    <span className="text-xs text-gray-400">/10</span>
                </div>
            </Card>

            <Card>
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Battery className="text-gray-600" size={20} />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">54%</h3>
                        <p className="text-sm text-gray-500 mt-1">Avg Battery</p>
                    </div>
                </div>
            </Card>
        </div>
    );
};
