import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Trees, MapPin, Apple, Grape } from 'lucide-react';
import { Card } from '../ui/Card';

export const ZoneSidebar: React.FC = () => {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({
        'north-field': true,
        'south-field': true,
    });

    const toggle = (id: string) => {
        setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <Card className="h-full" noPadding>
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">Farm Zones</h3>
                <button className="text-gray-400 hover:text-gray-600">
                    {/* Refresh icon could go here */}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </button>
            </div>
            <div className="p-2 space-y-1">
                {/* North Field */}
                <div>
                    <button
                        onClick={() => toggle('north-field')}
                        className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-md text-sm font-medium text-gray-700"
                    >
                        <div className="flex items-center gap-2">
                            {expanded['north-field'] ? <ChevronDown size={14} className="text-gray-400" /> : <ChevronRight size={14} className="text-gray-400" />}
                            <Trees size={16} className="text-green-700" />
                            <span>North Field</span>
                        </div>
                        <span className="text-xs text-gray-400">8/12</span>
                    </button>

                    {expanded['north-field'] && (
                        <div className="ml-6 space-y-1 mt-1">
                            <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-md text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} className="text-gray-400" />
                                    <span>Section A</span>
                                </div>
                                <span className="text-xs text-gray-400">4/6</span>
                            </button>
                            <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-md text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} className="text-gray-400" />
                                    <span>Section B</span>
                                </div>
                                <span className="text-xs text-gray-400">4/6</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* South Field */}
                <div>
                    <button
                        onClick={() => toggle('south-field')}
                        className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-md text-sm font-medium text-gray-700"
                    >
                        <div className="flex items-center gap-2">
                            {expanded['south-field'] ? <ChevronDown size={14} className="text-gray-400" /> : <ChevronRight size={14} className="text-gray-400" />}
                            <Trees size={16} className="text-green-700" />
                            <span>South Field</span>
                        </div>
                        <span className="text-xs text-gray-400">6/10</span>
                    </button>

                    {expanded['south-field'] && (
                        <div className="ml-6 space-y-1 mt-1">
                            <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-md text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} className="text-gray-400" />
                                    <span>Section A</span>
                                </div>
                                <span className="text-xs text-gray-400">3/5</span>
                            </button>
                            <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-md text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} className="text-gray-400" />
                                    <span>Section B</span>
                                </div>
                                <span className="text-xs text-gray-400">3/5</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* Other Zones */}
                <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-md text-sm font-medium text-gray-700">
                    <div className="flex items-center gap-2 ml-5">
                        <Apple size={16} className="text-green-700" />
                        <span>East Orchard</span>
                    </div>
                    <span className="text-xs text-gray-400">2/8</span>
                </button>

                <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-md text-sm font-medium text-gray-700">
                    <div className="flex items-center gap-2 ml-5">
                        <Grape size={16} className="text-green-700" />
                        <span>West Vineyard</span>
                    </div>
                    <span className="text-xs text-gray-400">0/5</span>
                </button>
            </div>
        </Card>
    );
};
