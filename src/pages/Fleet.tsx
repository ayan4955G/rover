import React from 'react';
import { Search, Download, RefreshCw, ChevronDown } from 'lucide-react';
import { FleetStats } from '../components/fleet/FleetStats';
import { IntegrationsStatus } from '../components/fleet/IntegrationsStatus';
import { ZoneSidebar } from '../components/fleet/ZoneSidebar';
import { VehicleList } from '../components/fleet/VehicleList';
import { Button } from '../components/ui/Button';

const Fleet: React.FC = () => {
    return (
        <div className="pb-10">
            <div className="mb-6 flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Vehicle Fleet Dashboard</h1>
                    <p className="text-gray-500 mt-2">Monitor and control your agricultural vehicle fleet in real-time</p>
                </div>
                <div className="text-sm text-gray-400 text-right">
                    Last updated: 18:28:13
                </div>
            </div>

            <FleetStats />
            <IntegrationsStatus />

            {/* Filters Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-700">Saved View</span>
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                            All Vehicles
                            <ChevronDown size={14} />
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-700">Zone Filter</span>
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                            All Zones
                            <ChevronDown size={14} />
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-700">Search Vehicles</span>
                        <div className="relative">
                            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by ID, location, or task..."
                                className="pl-9 pr-4 py-1.5 w-64 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 mr-4">
                        <span className="text-sm text-gray-500">Status:</span>
                        <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium border border-green-200">Active</span>
                        <span className="px-2 py-0.5 rounded-full bg-yellow-50 text-yellow-700 text-xs font-medium border border-yellow-100">Idle</span>
                        <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-700 text-xs font-medium border border-red-100">Offline</span>
                        <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">Maintenance</span>
                    </div>
                    <Button variant="secondary" size="sm" icon={<Download size={14} />}>Export</Button>
                    <Button variant="secondary" size="sm" icon={<RefreshCw size={14} />}>Refresh</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
                <div className="lg:col-span-1 h-full">
                    <ZoneSidebar />
                </div>
                <div className="lg:col-span-3 h-full">
                    <VehicleList />
                </div>
            </div>
        </div>
    );
};

export default Fleet;
