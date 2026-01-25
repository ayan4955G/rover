import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { ChevronDown, ChevronRight, Search, CheckCircle2, AlertCircle, Clock, Wrench } from 'lucide-react';


interface CategoryProps {
    title: string;
    count: number;
    icon: React.ReactNode;
    items: { label: string; id: string; status?: 'operational' | 'overdue' | 'due-soon' | 'in-service' }[];
    isOpen: boolean;
    onToggle: () => void;
}

const Category: React.FC<CategoryProps> = ({ title, count, icon, items, isOpen, onToggle }) => (
    <div className="mb-2">
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-100"
        >
            <div className="flex items-center gap-3">
                {icon}
                <span className="font-semibold text-gray-900">{title}</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">({count})</span>
                {isOpen ? <ChevronDown size={16} className="text-gray-400" /> : <ChevronRight size={16} className="text-gray-400" />}
            </div>
        </button>

        {isOpen && (
            <div className="mt-2 ml-4 space-y-2 border-l border-gray-100 pl-4 py-1">
                {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md cursor-pointer group">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-700 group-hover:text-green-700">{item.label}</span>
                            <span className="text-[10px] text-gray-400">{item.id}</span>
                        </div>
                        {item.status === 'overdue' && (
                            <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs" title="Overdue">4</div>
                        )}
                        {item.status === 'in-service' && (
                            <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs" title="In Service">2</div>
                        )}
                    </div>
                ))}
            </div>
        )}
    </div>
);

export const MaintenanceSidebar: React.FC = () => {
    const [openStates, setOpenStates] = useState({
        tractors: true,
        harvesters: true,
        sprayers: false
    });

    const toggle = (key: keyof typeof openStates) => setOpenStates(prev => ({ ...prev, [key]: !prev[key] }));

    return (
        <Card className="h-full" noPadding>
            <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Vehicle Fleet</h3>
                <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search vehicles..."
                        className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-green-500 transition-colors"
                    />
                </div>
            </div>

            <div className="p-4 space-y-2">
                <Category
                    title="Tractors"
                    count={2}
                    icon={<span className="text-gray-700"><Wrench size={18} /></span>} // Using Wrench as placeholder for tractor icon
                    isOpen={openStates.tractors}
                    onToggle={() => toggle('tractors')}
                    items={[
                        { label: 'John Deere 8R 410', id: 'TRC-001', status: 'operational' },
                        { label: 'Case IH Magnum 380', id: 'TRC-002', status: 'in-service' }
                    ]}
                />

                <Category
                    title="Harvesters"
                    count={2}
                    icon={<span className="text-gray-700"><Wrench size={18} /></span>}
                    isOpen={openStates.harvesters}
                    onToggle={() => toggle('harvesters')}
                    items={[
                        { label: 'John Deere S790', id: 'HRV-001', status: 'overdue' },
                        { label: 'Case IH Axial-Flow 9250', id: 'HRV-002', status: 'due-soon' }
                    ]}
                />

                <Category
                    title="Sprayers"
                    count={2}
                    icon={<span className="text-gray-700"><Wrench size={18} /></span>}
                    isOpen={openStates.sprayers}
                    onToggle={() => toggle('sprayers')}
                    items={[]}
                />
            </div>

            <div className="p-4 border-t border-gray-100 mt-auto bg-gray-50 rounded-b-xl">
                <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center gap-1.5 text-gray-600">
                        <CheckCircle2 size={12} className="text-green-600" /> Operational
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                        <Clock size={12} className="text-orange-600" /> Due Soon
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                        <AlertCircle size={12} className="text-red-600" /> Overdue
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                        <Wrench size={12} className="text-yellow-600" /> In Service
                    </div>
                </div>
            </div>
        </Card>
    );
};
