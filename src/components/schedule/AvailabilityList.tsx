import React from 'react';
import { Card } from '../ui/Card';
import { Tractor, User, Battery, CalendarClock, PenTool, CheckCircle2, Zap } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const AvailabilityList: React.FC = () => {
    return (
        <Card className="h-full">
            <div className="mb-6">
                <h3 className="font-semibold text-gray-900">Vehicle Availability</h3>
                <p className="text-sm text-gray-500">Friday, January 23, 2026</p>
            </div>

            <div className="space-y-4">
                {/* Item 1 */}
                <div className="border border-green-200 rounded-lg p-4 bg-green-50/30">
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-100 rounded-lg text-green-700">
                                <Tractor size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Tractor Alpha</h4>
                                <p className="text-xs text-gray-500">Heavy Duty Tractor</p>
                            </div>
                        </div>
                        <Badge variant="success" icon={<CheckCircle2 size={12} />}>Available</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-y-2 text-xs text-gray-600 mb-3">
                        <div className="flex items-center gap-1.5"><User size={14} /> John Smith</div>
                        <div className="flex items-center gap-1.5"><Battery size={14} className="text-gray-400" /> 85%</div>
                        <div className="flex items-center gap-1.5"><CalendarClock size={14} /> 3 tasks</div>
                        <div className="flex items-center gap-1.5"><span className="w-3.5 h-3.5 flex items-center justify-center font-bold">L</span> 4.5h used</div>
                    </div>

                    <div className="text-xs text-gray-400 pt-3 border-t border-green-100 flex items-center gap-1">
                        <PenTool size={12} /> Next service: Jan 28, 2026
                    </div>
                </div>

                {/* Item 2 */}
                <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50/30">
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                                <Tractor size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Harvester Beta</h4>
                                <p className="text-xs text-gray-500">Combine Harvester</p>
                            </div>
                        </div>
                        <Badge variant="warning" icon={<Zap size={12} />}>In-Use</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-y-2 text-xs text-gray-600 mb-3">
                        <div className="flex items-center gap-1.5"><User size={14} /> Sarah Johnson</div>
                        <div className="flex items-center gap-1.5"><Battery size={14} className="text-gray-400" /> 62%</div>
                        <div className="flex items-center gap-1.5"><CalendarClock size={14} /> 2 tasks</div>
                        <div className="flex items-center gap-1.5"><span className="w-3.5 h-3.5 flex items-center justify-center font-bold">L</span> 6.2h used</div>
                    </div>

                    <div className="text-xs text-gray-400 pt-3 border-t border-yellow-100 flex items-center gap-1">
                        <PenTool size={12} /> Next service: Feb 5, 2026
                    </div>
                </div>

                {/* Item 3 */}
                <div className="border border-gray-200 rounded-lg p-4 opacity-75">
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 rounded-lg text-gray-500">
                                <Tractor size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Sprayer Gamma</h4>
                                <p className="text-xs text-gray-500">Sprayer Unit</p>
                            </div>
                        </div>
                        <Badge variant="neutral" icon={<PenTool size={12} />}>Maintenance</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-y-2 text-xs text-gray-600 mb-3">
                        <div className="flex items-center gap-1.5 text-gray-400">-</div>
                        <div className="flex items-center gap-1.5 text-gray-400">-</div>
                        <div className="flex items-center gap-1.5"><CalendarClock size={14} /> 0 tasks</div>
                        <div className="flex items-center gap-1.5"><span className="w-3.5 h-3.5 flex items-center justify-center font-bold">L</span> 0h used</div>
                    </div>

                    <div className="text-xs text-gray-400 pt-3 border-t border-gray-100 flex items-center gap-1">
                        <PenTool size={12} /> Next service: Jan 25, 2026
                    </div>
                </div>
            </div>
        </Card>
    );
};
