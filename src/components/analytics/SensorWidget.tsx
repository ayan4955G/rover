import React from 'react';
import { Card } from '../ui/Card';
import { Maximize2, X } from 'lucide-react';

interface SensorWidgetProps {
    icon: React.ReactNode;
    title: string;
    location: string;
    value: string;
    unit: string;
    threshold: string;
    status: 'Normal' | 'Warning' | 'Critical';
    trend: string;
    trendPositive: boolean;
    updatedAt: string;
    id: string;
    color: string;
    data: number[]; // Array of values for the chart
}

const Sparkline: React.FC<{ data: number[], color: string }> = ({ data, color }) => {
    const width = 100;
    const height = 40;
    const max = Math.max(...data) || 1;
    const min = Math.min(...data) || 0;
    const range = max - min || 1;

    // Normalize data points to fit SVG viewBox
    const points = data.map((d, i) => {
        const x = (i / (data.length - 1)) * width;
        const y = height - ((d - min) / range) * height; // Invert Y because SVG coordinates
        return `${x},${y}`;
    }).join(' ');

    return (
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-16 overflow-visible" preserveAspectRatio="none">
            {/* Gradient definition not valid inside path, simplified line */}
            <defs>
                <linearGradient id={`gradient-${color}`} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.2" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* Area fill */}
            <path
                d={`M0,${height} L${points} L${width},${height} Z`}
                fill={color}
                opacity="0.1"
                stroke="none"
            />

            {/* Line chart */}
            <polyline
                fill="none"
                stroke={color}
                strokeWidth="2"
                points={points}
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
            />
        </svg>
    );
};

export const SensorWidget: React.FC<SensorWidgetProps> = ({
    icon, title, location, value, unit, threshold, status, trend, trendPositive, updatedAt, id, color, data
}) => {
    return (
        <Card className="p-4 relative">
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-start gap-3">
                    <div className="mt-1">{icon}</div>
                    <div>
                        <h3 className="font-semibold text-gray-900 leading-tight">{title}</h3>
                        <p className="text-xs text-gray-400">{location}</p>
                    </div>
                </div>
                <div className="flex gap-2 text-gray-400">
                    <Maximize2 size={14} className="cursor-pointer hover:text-gray-600" />
                    <X size={14} className="cursor-pointer hover:text-gray-600" />
                </div>
            </div>

            <div className="flex justify-between items-end mb-4 mt-4">
                <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900" style={{ color: status !== 'Normal' ? color : undefined }}>{value}</span>
                    <span className="text-gray-500 font-medium">{unit}</span>
                </div>
                <div className="text-xs text-right">
                    <div className="text-gray-400 uppercase text-[10px] font-medium tracking-wide">Threshold</div>
                    <div className="font-semibold text-gray-600">{threshold}</div>
                </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
                <span className={`text-xs font-bold ${status === 'Normal' ? 'text-green-700' : 'text-orange-600'}`}>
                    {status}
                </span>
                <span className={`text-xs font-medium ${trendPositive ? 'text-green-600' : 'text-red-500'}`}>
                    {trend} from avg
                </span>
            </div>

            <div className="mb-4 h-16 w-full">
                <Sparkline data={data} color={color} />
                {/* X-Axis labels mocked */}
                <div className="flex justify-between text-[10px] text-gray-300 mt-1">
                    <span>-1h</span>
                    <span>30m</span>
                    <span>Now</span>
                </div>
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-gray-100 text-[10px] text-gray-400">
                <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Updated {updatedAt}
                </div>
                <div className="font-mono flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    {id}
                </div>
            </div>
        </Card>
    );
};
