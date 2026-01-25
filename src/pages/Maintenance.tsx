import React from 'react';
import { MaintenanceSidebar } from '../components/maintenance/MaintenanceSidebar';
import { MaintenanceTable } from '../components/maintenance/MaintenanceTable';
import { Card } from '../components/ui/Card';
import { Truck } from 'lucide-react';

const Maintenance: React.FC = () => {
    return (
        <div className="h-[calc(100vh-140px)] flex gap-6 pb-6">
            <div className="w-64 flex-shrink-0 h-full">
                <MaintenanceSidebar />
            </div>
            <div className="flex-1 h-full min-w-0">
                <MaintenanceTable />
            </div>
            <div className="w-80 flex-shrink-0 h-full hidden xl:block">
                <Card className="h-full flex flex-col items-center justify-center text-center p-8 bg-gray-50 border-dashed" noPadding>
                    <div className="p-4 bg-white rounded-full mb-4 shadow-sm">
                        <Truck size={48} className="text-gray-300" />
                    </div>
                    <h3 className="text-gray-900 font-medium mb-1">No Selection</h3>
                    <p className="text-gray-500 text-sm">Select a vehicle to view service history</p>
                </Card>
            </div>
        </div>
    );
};

export default Maintenance;
