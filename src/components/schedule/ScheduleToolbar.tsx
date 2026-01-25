import React from 'react';
import { Card } from '../ui/Card';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Zap, Plus } from 'lucide-react';
import { Button } from '../ui/Button';

export const ScheduleToolbar: React.FC = () => {
    return (
        <Card className="mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-lg border border-gray-200">
                        <button className="p-1 hover:bg-white hover:shadow-sm rounded text-gray-500 hover:text-gray-900 transition-all">
                            <ChevronLeft size={18} />
                        </button>
                        <div className="flex items-center gap-2 px-3 font-medium text-gray-900">
                            <CalendarIcon size={16} className="text-gray-500" />
                            Jan 23, 2026
                        </div>
                        <button className="p-1 hover:bg-white hover:shadow-sm rounded text-gray-500 hover:text-gray-900 transition-all">
                            <ChevronRight size={18} />
                        </button>
                    </div>

                    <button className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                        <CalendarIcon size={16} />
                        Today
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex bg-gray-100 p-1 rounded-lg">
                        <button className="px-3 py-1 rounded-md text-sm font-medium bg-white text-gray-900 shadow-sm">Daily</button>
                        <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900">Weekly</button>
                        <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900">Monthly</button>
                    </div>

                    <Button variant="secondary" icon={<Zap size={16} />}>Optimize Routes</Button>
                    <Button icon={<Plus size={16} />}>Bulk Schedule</Button>
                </div>
            </div>
        </Card>
    );
};
