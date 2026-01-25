import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Plus, Download, ArrowUpDown, CheckCircle2, AlertCircle, AlertTriangle } from 'lucide-react';

interface WorkOrder {
    id: string;
    vehicleId: string;
    serviceType: string;
    dueDate: string;
    priority: 'High' | 'Medium' | 'Critical';
    technician: string;
    duration: string;
    parts: number;
    status: 'completed' | 'overdue' | 'in-progress';
}

const workOrders: WorkOrder[] = [
    { id: 'WO-001', vehicleId: 'TRC-002', serviceType: 'Transmission Filter Replacement', dueDate: 'Jan 15, 2026', priority: 'High', technician: 'Sarah Williams', duration: '3 hours', parts: 2, status: 'completed' },
    { id: 'WO-002', vehicleId: 'SPR-002', serviceType: 'Pump System Maintenance', dueDate: 'Jan 18, 2026', priority: 'Medium', technician: 'Tom Anderson', duration: '4 hours', parts: 3, status: 'completed' },
    { id: 'WO-003', vehicleId: 'HRV-001', serviceType: 'Concave Replacement', dueDate: 'Jan 23, 2026', priority: 'Critical', technician: 'Mike Johnson', duration: '8 hours', parts: 4, status: 'overdue' },
    { id: 'WO-004', vehicleId: 'HRV-002', serviceType: 'Annual Inspection', dueDate: 'Jan 24, 2026', priority: 'High', technician: 'Mike Johnson', duration: '6 hours', parts: 0, status: 'in-progress' },
    { id: 'WO-005', vehicleId: 'HRV-001', serviceType: 'Header Drive Belt Replacement', dueDate: 'Jan 25, 2026', priority: 'Critical', technician: 'Unassigned', duration: '4 hours', parts: 2, status: 'overdue' },
];

export const MaintenanceTable: React.FC = () => {
    return (
        <Card noPadding className="h-full flex flex-col">
            <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <h2 className="text-lg font-bold text-gray-900">Maintenance Schedule</h2>

                    <div className="flex bg-gray-100 p-1 rounded-lg">
                        <button className="px-3 py-1 rounded-md text-xs font-medium bg-green-800 text-white shadow-sm">All Status (12)</button>
                        <button className="px-3 py-1 rounded-md text-xs font-medium text-gray-500 hover:text-gray-900">Upcoming (6)</button>
                        <button className="px-3 py-1 rounded-md text-xs font-medium text-gray-500 hover:text-gray-900">Overdue (3)</button>
                        <button className="px-3 py-1 rounded-md text-xs font-medium text-gray-500 hover:text-gray-900">In Progress (1)</button>
                        <button className="px-3 py-1 rounded-md text-xs font-medium text-gray-500 hover:text-gray-900">Completed (2)</button>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Button variant="secondary" size="sm" icon={<Download size={14} />}>Export</Button>
                    <Button size="sm" icon={<Plus size={14} />}>New Work Order</Button>
                </div>
            </div>

            <div className="overflow-x-auto flex-1">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50/50 text-gray-600 font-semibold border-b border-gray-100 uppercase text-[11px] tracking-wider">
                        <tr>
                            <th className="px-6 py-4 w-10">
                                <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                            </th>
                            <th className="px-6 py-4 cursor-pointer hover:bg-gray-50">
                                <div className="flex items-center gap-1">Vehicle ID <ArrowUpDown size={12} /></div>
                            </th>
                            <th className="px-6 py-4 cursor-pointer hover:bg-gray-50">
                                <div className="flex items-center gap-1">Service Type <ArrowUpDown size={12} /></div>
                            </th>
                            <th className="px-6 py-4 cursor-pointer hover:bg-gray-50">
                                <div className="flex items-center gap-1">Due Date <ArrowUpDown size={12} /></div>
                            </th>
                            <th className="px-6 py-4 cursor-pointer hover:bg-gray-50">
                                <div className="flex items-center gap-1">Priority <ArrowUpDown size={12} /></div>
                            </th>
                            <th className="px-6 py-4">Technician</th>
                            <th className="px-6 py-4">Duration</th>
                            <th className="px-6 py-4">Parts</th>
                            <th className="px-6 py-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {workOrders.map((wo) => (
                            <tr key={wo.id} className="hover:bg-gray-50 group transition-colors">
                                <td className="px-6 py-4">
                                    <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                                </td>
                                <td className="px-6 py-4 font-bold text-gray-900">{wo.vehicleId}</td>
                                <td className="px-6 py-4 text-gray-700 max-w-[200px] leading-tight font-medium">{wo.serviceType}</td>
                                <td className="px-6 py-4 font-mono text-gray-600">{wo.dueDate}</td>
                                <td className="px-6 py-4">
                                    <div className={`flex items-center gap-1.5 text-xs font-bold uppercase ${wo.priority === 'Critical' ? 'text-red-600' :
                                        wo.priority === 'High' ? 'text-orange-600' : 'text-blue-600'
                                        }`}>
                                        {wo.priority === 'Critical' && <AlertCircle size={14} />}
                                        {wo.priority === 'High' && <AlertTriangle size={14} />}
                                        {wo.priority === 'Medium' && <AlertCircle size={14} />}
                                        {wo.priority}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-700">{wo.technician}</td>
                                <td className="px-6 py-4 text-gray-500 font-medium">{wo.duration}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1 text-green-700 font-medium">
                                        <CheckCircle2 size={14} /> {wo.parts}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`text-[10px] font-bold uppercase tracking-wide ${wo.status === 'completed' ? 'text-green-600' :
                                        wo.status === 'overdue' ? 'text-red-500' :
                                            'text-orange-500'
                                        }`}>
                                        {wo.status.replace('-', ' ')}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500 bg-gray-50 rounded-b-xl">
                <span>Showing 12 of 12 work orders</span>
                <div className="flex gap-2">
                    <button className="hover:text-gray-900 font-medium">&lt; Previous</button>
                    <button className="hover:text-gray-900 font-medium ml-4">Next &gt;</button>
                </div>
            </div>
        </Card>
    );
};
