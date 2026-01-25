import React from 'react';
import { Card } from '../ui/Card';
import { Battery, Wifi, Gauge, MapPin, Clock } from 'lucide-react';

export const StatusBar: React.FC = () => {
    return (
        <Card className="mb-6">
            <div className="flex flex-wrap items-center divide-x divide-gray-100">
                <div className="flex-1 px-4 py-2 flex items-center gap-3">
                    <Battery className="text-green-600" size={24} />
                    <div>
                        <p className="text-xs text-gray-400 font-medium uppercase">Battery</p>
                        <p className="text-xl font-bold text-green-700">87%</p>
                    </div>
                </div>
                <div className="flex-1 px-4 py-2 flex items-center gap-3">
                    <Wifi className="text-gray-700" size={24} />
                    <div>
                        <p className="text-xs text-gray-400 font-medium uppercase">Signal</p>
                        <p className="text-xl font-bold text-gray-900">92%</p>
                    </div>
                </div>
                <div className="flex-1 px-4 py-2 flex items-center gap-3">
                    <Gauge className="text-gray-700" size={24} />
                    <div>
                        <p className="text-xs text-gray-400 font-medium uppercase">Speed</p>
                        <p className="text-xl font-bold text-gray-900">3.2 mph</p>
                    </div>
                </div>
                <div className="flex-1 px-4 py-2 flex items-center gap-3">
                    <MapPin className="text-gray-700" size={24} />
                    <div>
                        <p className="text-xs text-gray-400 font-medium uppercase">Location</p>
                        <p className="text-lg font-bold text-gray-900">40.7128, -74.0060</p>
                    </div>
                </div>
                <div className="flex-1 px-4 py-2 flex items-center gap-3">
                    <Clock className="text-gray-700" size={24} />
                    <div>
                        <p className="text-xs text-gray-400 font-medium uppercase">Runtime</p>
                        <p className="text-xl font-bold text-gray-900">2h 34m</p>
                    </div>
                </div>
            </div>
        </Card>
    );
};
