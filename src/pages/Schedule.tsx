import React from 'react';
import { Card } from '../components/ui/Card';
import { Tractor, MapPin, ArrowUpDown, Edit2, Trash2 } from 'lucide-react';

interface ScheduledTask {
    id: string;
    vehicleId: string;
    taskType: string;
    location: string;
    time: string;
    duration: string;
    priority: 'High' | 'Medium' | 'Low';
    status: 'Completed' | 'Pending' | 'In-Progress';
}

const tasks: ScheduledTask[] = [
    { id: '1', vehicleId: 'V-005', taskType: 'Seeding', location: 'Field A - North Section', time: '08:00 - 10:00', duration: '2h', priority: 'High', status: 'Completed' },
    { id: '2', vehicleId: 'V-001', taskType: 'Plowing', location: 'Field A - North Section', time: '08:00 - 10:30', duration: '2.5h', priority: 'High', status: 'Pending' },
    { id: '3', vehicleId: 'V-002', taskType: 'Harvesting', location: 'Field C - East Section', time: '09:00 - 13:00', duration: '4h', priority: 'High', status: 'In-Progress' },
    { id: '4', vehicleId: 'V-004', taskType: 'Seeding', location: 'Field B - West Section', time: '10:00 - 12:00', duration: '2h', priority: 'Medium', status: 'Pending' },
    { id: '5', vehicleId: 'V-006', taskType: 'Irrigation', location: 'Field B - Central Area', time: '11:00 - 15:00', duration: '4h', priority: 'Medium', status: 'In-Progress' },
    { id: '6', vehicleId: 'V-001', taskType: 'Plowing', location: 'Field A - South Section', time: '13:00 - 15:30', duration: '2.5h', priority: 'Medium', status: 'Pending' },
    { id: '7', vehicleId: 'V-005', taskType: 'Spraying', location: 'Field D - Full Coverage', time: '14:00 - 17:00', duration: '3h', priority: 'Low', status: 'Pending' },
    { id: '8', vehicleId: 'V-001', taskType: 'Plowing', location: 'Field E - North Section', time: '16:00 - 18:00', duration: '2h', priority: 'Low', status: 'Pending' },
];

const Schedule: React.FC = () => {
    return (
        <div className="pb-10 pt-4">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Scheduled Tasks</h1>
                <p className="text-sm text-gray-500">8 tasks • 0 selected</p>
            </div>

            <Card noPadding className="mb-6">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-900 border-b border-gray-100 font-semibold">
                            <tr>
                                <th className="px-6 py-4 w-10">
                                    <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                                </th>
                                <th className="px-6 py-4 cursor-pointer hover:bg-gray-100">
                                    <div className="flex items-center gap-1">Vehicle <ArrowUpDown size={14} className="text-gray-400" /></div>
                                </th>
                                <th className="px-6 py-4 cursor-pointer hover:bg-gray-100">
                                    <div className="flex items-center gap-1">Task Type <ArrowUpDown size={14} className="text-gray-400" /></div>
                                </th>
                                <th className="px-6 py-4 cursor-pointer hover:bg-gray-100">
                                    <div className="flex items-center gap-1">Location <ArrowUpDown size={14} className="text-gray-400" /></div>
                                </th>
                                <th className="px-6 py-4 cursor-pointer hover:bg-gray-100">
                                    <div className="flex items-center gap-1">Time <ArrowUpDown size={14} className="text-gray-400" /></div>
                                </th>
                                <th className="px-6 py-4 cursor-pointer hover:bg-gray-100">
                                    <div className="flex items-center gap-1">Duration <ArrowUpDown size={14} className="text-gray-400" /></div>
                                </th>
                                <th className="px-6 py-4 cursor-pointer hover:bg-gray-100">
                                    <div className="flex items-center gap-1">Priority <ArrowUpDown size={14} className="text-gray-400" /></div>
                                </th>
                                <th className="px-6 py-4 cursor-pointer hover:bg-gray-100">
                                    <div className="flex items-center gap-1">Status <ArrowUpDown size={14} className="text-gray-400" /></div>
                                </th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {tasks.map((task) => (
                                <tr key={task.id} className="hover:bg-gray-50 group">
                                    <td className="px-6 py-4">
                                        <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 font-medium text-gray-900">
                                            <Tractor size={14} className="text-green-700" />
                                            {task.vehicleId}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{task.taskType}</td>
                                    <td className="px-6 py-4 text-gray-500 flex items-center gap-1.5">
                                        <MapPin size={14} className="text-gray-400" />
                                        {task.location}
                                    </td>
                                    <td className="px-6 py-4 font-mono text-gray-900">{task.time}</td>
                                    <td className="px-6 py-4 text-gray-500">{task.duration}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-0.5 rounded border text-xs font-medium ${task.priority === 'High' ? 'bg-red-50 text-red-700 border-red-100' :
                                            task.priority === 'Medium' ? 'bg-orange-50 text-orange-700 border-orange-100' :
                                                'bg-green-50 text-green-700 border-green-100'
                                            }`}>
                                            {task.priority}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${task.status === 'Completed' ? 'bg-green-50 text-green-700 border-transparent' :
                                            task.status === 'In-Progress' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                                                'bg-gray-100 text-gray-600 border-gray-200'
                                            }`}>
                                            {task.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 text-gray-400">
                                            <button className="hover:text-gray-600"><Edit2 size={16} /></button>
                                            <button className="hover:text-red-600"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-gray-100 flex justify-end items-center gap-4 text-sm text-gray-500">
                    <span>Showing 8 of 8 tasks</span>
                    <div className="flex items-center gap-2">
                        <span className="mr-2">Previous</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-800 text-white font-bold">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 font-medium">2</button>
                        <span className="ml-2">Next</span>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Schedule;
