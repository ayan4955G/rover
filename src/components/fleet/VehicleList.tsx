import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Battery, Eye, Grid3X3, List } from 'lucide-react';

interface Vehicle {
    id: string;
    location: string;
    battery: number;
    status: 'active' | 'idle' | 'offline' | 'maintenance';
    task: string;
}

const vehicles: Vehicle[] = [
    { id: 'FV-001', location: 'North Field - Sect...', battery: 87, status: 'active', task: 'Plowing Ro...' },
    { id: 'FV-002', location: 'North Field - Sect...', battery: 92, status: 'active', task: 'Harvesting Z...' },
    { id: 'FV-003', location: 'North Field - Sect...', battery: 45, status: 'active', task: 'Pesticide Ap...' },
    { id: 'FV-004', location: 'South Field - Sect...', battery: 78, status: 'idle', task: 'Standby' },
    { id: 'FV-005', location: 'South Field - Sect...', battery: 23, status: 'idle', task: 'Charging' },
    { id: 'FV-006', location: 'East Orchard', battery: 0, status: 'offline', task: 'Maintenance' },
];

export const VehicleList: React.FC = () => {
    return (
        <Card className="flex-1 h-full" noPadding>
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">Vehicle Fleet (6)</h3>
                <div className="flex gap-2">
                    <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded"><Grid3X3 size={18} /></button>
                    <button className="p-1.5 text-gray-900 bg-gray-100 rounded"><List size={18} /></button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-transparent text-gray-500 font-medium border-b border-gray-50">
                        <tr>
                            <th className="px-6 py-3 w-10">
                                <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                            </th>
                            <th className="px-6 py-3">ID</th>
                            <th className="px-6 py-3">Location</th>
                            <th className="px-6 py-3">Battery</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Task</th>
                            <th className="px-6 py-3 text-right"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {vehicles.map((v) => (
                            <tr key={v.id} className="hover:bg-gray-50 group">
                                <td className="px-6 py-4">
                                    <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">{v.id}</td>
                                <td className="px-6 py-4 text-gray-500 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full border border-gray-400"></span>
                                    {v.location}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2 text-green-600 font-medium">
                                        <Battery size={16} className={v.battery < 30 ? "text-red-500" : v.battery < 60 ? "text-yellow-500" : "text-green-500"} />
                                        <span className={v.battery < 30 ? "text-red-500" : v.battery < 60 ? "text-yellow-600" : "text-green-600"}>{v.battery}%</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <Badge variant={v.status === 'active' ? 'success' : v.status === 'idle' ? 'warning' : 'error'}>
                                        {v.status}
                                    </Badge>
                                </td>
                                <td className="px-6 py-4 text-gray-500">{v.task}</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <Eye size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};
