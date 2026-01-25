import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Filter, Plus, CheckCircle2, Clock, Thermometer, Droplets, Sprout, Activity } from 'lucide-react';


export const AnalyticsHeader: React.FC = () => {
    return (
        <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Sensor Analytics Dashboard</h1>
                    <p className="text-gray-500 mt-2">Real-time agricultural sensor monitoring and data analysis</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="secondary" icon={<Filter size={16} />}>Filters</Button>
                    <Button icon={<Plus size={16} />}>Add Widget</Button>
                </div>
            </div>

            <div className="flex items-center gap-6 text-xs text-gray-500">
                <div className="flex items-center gap-1.5 text-green-700 font-medium">
                    <CheckCircle2 size={14} />
                    <span>Data Synced</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>Last sync: 2 mins ago</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>Next sync: 28 seconds</span>
                </div>
            </div>
        </div>
    );
};

export const AnalyticsStats: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <div className="text-gray-500 text-xs font-medium uppercase tracking-wide flex items-center gap-2">
                        <Thermometer size={14} /> Avg Temperature
                    </div>
                    <span className="text-green-600 text-xs font-bold bg-green-50 px-1.5 py-0.5 rounded">+2.3%</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                    24.5<span className="text-lg text-gray-400 font-normal">°C</span>
                </div>
                <div className="text-xs text-gray-400">Optimal range for crop growth</div>
            </Card>

            <Card className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <div className="text-gray-500 text-xs font-medium uppercase tracking-wide flex items-center gap-2">
                        <Droplets size={14} /> Avg Humidity
                    </div>
                    <span className="text-green-600 text-xs font-bold bg-green-50 px-1.5 py-0.5 rounded">-1.5%</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                    68<span className="text-lg text-gray-400 font-normal">%</span>
                </div>
                <div className="text-xs text-gray-400">Within acceptable parameters</div>
            </Card>

            <Card className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <div className="text-gray-500 text-xs font-medium uppercase tracking-wide flex items-center gap-2">
                        <Sprout size={14} className="text-orange-500" /> Soil Moisture
                    </div>
                    <span className="text-orange-600 text-xs font-bold bg-orange-50 px-1.5 py-0.5 rounded">+5.2%</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                    42<span className="text-lg text-gray-400 font-normal">%</span>
                </div>
                <div className="text-xs text-gray-400">Approaching irrigation threshold</div>
            </Card>

            <Card className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <div className="text-gray-500 text-xs font-medium uppercase tracking-wide flex items-center gap-2">
                        <Activity size={14} /> Active Sensors
                    </div>
                    <span className="text-gray-400 text-xs font-medium">- 0%</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                    47<span className="text-lg text-gray-400 font-normal">/52</span>
                </div>
                <div className="text-xs text-gray-400">5 sensors offline for maintenance</div>
            </Card>
        </div>
    );
};
