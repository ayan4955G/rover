import React from 'react';
import { Card } from '../ui/Card';
import { Thermometer, Droplets, Sprout, FlaskConical, Sun, Disc, Info } from 'lucide-react';

interface SensorCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    unit: string;
    status?: 'normal' | 'warning' | 'alert';
    range: string;
    lastUpdate: string;
}

const SensorCard: React.FC<SensorCardProps> = ({ icon, label, value, unit, status = 'normal', range, lastUpdate }) => (
    <div className="p-4 border border-gray-100 rounded-lg hover:border-green-100 hover:shadow-sm transition-all bg-white">
        <div className="flex items-center gap-2 mb-3 text-gray-500 text-xs font-medium uppercase tracking-wide">
            {icon}
            {label}
        </div>
        <div className="flex items-baseline gap-1 mb-1">
            <span className={`text-2xl font-bold ${status === 'alert' ? 'text-red-600' : status === 'warning' ? 'text-yellow-600' : 'text-green-700'}`}>
                {value}
            </span>
            <span className="text-sm text-gray-500 font-medium">{unit}</span>
        </div>
        <div className="flex justify-between items-end">
            <div className="text-[10px] text-gray-400">
                Range: {range}
            </div>
            <div className="text-[10px] text-gray-400">
                {lastUpdate}
            </div>
        </div>
    </div>
);

export const SensorGrid: React.FC = () => {
    return (
        <Card>
            <div className="flex items-center gap-2 mb-4">
                <div className="p-1 rounded bg-green-100 text-green-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                </div>
                <h3 className="font-semibold text-gray-900">Real-Time Sensors</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SensorCard
                    icon={<Thermometer size={14} />}
                    label="Engine Temperature"
                    value="82"
                    unit="°C"
                    range="60°C - 95°C"
                    lastUpdate="2s ago"
                />
                <SensorCard
                    icon={<Droplets size={14} />}
                    label="Ambient Humidity"
                    value="68"
                    unit="%"
                    range="30% - 80%"
                    lastUpdate="1s ago"
                />
                <SensorCard
                    icon={<Sprout size={14} />}
                    label="Soil Moisture"
                    value="45"
                    unit="%"
                    range="20% - 70%"
                    lastUpdate="3s ago"
                />
                <SensorCard
                    icon={<FlaskConical size={14} />}
                    label="Soil pH Level"
                    value="6.8"
                    unit=""
                    range="6 - 7.5"
                    lastUpdate="5s ago"
                />
                <SensorCard
                    icon={<Sun size={14} />}
                    label="Light Intensity"
                    value="850"
                    unit="Lux"
                    status="warning"
                    range="200 - 1200 lux"
                    lastUpdate="2s ago"
                />
                <SensorCard
                    icon={<Disc size={14} />}
                    label="Tire Pressure"
                    value="32"
                    unit="PSI"
                    range="28 - 38 PSI"
                    lastUpdate="4s ago"
                />
            </div>

            <div className="mt-4 flex items-center gap-2 p-2 bg-gray-50 rounded text-xs text-gray-500">
                <Info size={14} />
                Sensor data updates every 100ms. Alerts triggered on threshold breach.
            </div>
        </Card>
    );
};
