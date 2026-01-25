import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Bell, ChevronDown, ChevronUp, Download, AlertCircle, AlertTriangle, Info } from 'lucide-react';

export const ActiveAlerts: React.FC = () => {
    const [expanded, setExpanded] = useState(true);

    return (
        <Card className="mb-6" noPadding>
            <div
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setExpanded(!expanded)}
            >
                <div className="flex items-center gap-2">
                    <Bell size={18} className="text-gray-600" />
                    <h3 className="font-semibold text-gray-900">Active Alerts</h3>
                    <span className="bg-orange-500 text-white text-[10px] px-1.5 rounded-full font-bold">4</span>
                </div>
                {expanded ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
            </div>

            {expanded && (
                <div className="px-4 pb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex items-center gap-3">
                        <div className="p-2 bg-white rounded-full border border-red-100 text-red-600 shadow-sm">
                            <AlertCircle size={18} />
                        </div>
                        <div>
                            <p className="text-xs text-red-600 font-medium uppercase">Critical</p>
                            <p className="text-xl font-bold text-gray-900">1</p>
                        </div>
                    </div>

                    <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 flex items-center gap-3">
                        <div className="p-2 bg-white rounded-full border border-orange-100 text-orange-600 shadow-sm">
                            <AlertTriangle size={18} />
                        </div>
                        <div>
                            <p className="text-xs text-orange-600 font-medium uppercase">Warning</p>
                            <p className="text-xl font-bold text-gray-900">2</p>
                        </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-center gap-3">
                        <div className="p-2 bg-white rounded-full border border-blue-100 text-blue-600 shadow-sm">
                            <Info size={18} />
                        </div>
                        <div>
                            <p className="text-xs text-blue-600 font-medium uppercase">Info</p>
                            <p className="text-xl font-bold text-gray-900">1</p>
                        </div>
                    </div>
                </div>
            )}
        </Card>
    );
};

export const ExportSection: React.FC = () => {
    return (
        <Card className="mb-8 p-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-500">
                <Download size={18} />
                <span className="font-semibold text-gray-900">Export Data</span>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
                <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-green-500 w-full md:w-40">
                    <option>CSV Format</option>
                    <option>JSON Format</option>
                    <option>PDF Report</option>
                </select>
                <Button icon={<Download size={16} />} className="w-full md:w-auto">Export</Button>
            </div>
        </Card>
    );
};
