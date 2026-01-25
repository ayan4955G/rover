import React from 'react';
import { Card } from '../ui/Card';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Home, RotateCcw } from 'lucide-react';

export const PrecisionMovement: React.FC = () => {
    return (
        <Card className="mb-6">
            <div className="flex items-center gap-2 mb-4">
                <div className="p-1 rounded bg-green-100 text-green-700">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
                <h3 className="font-semibold text-gray-900">Precision Movement</h3>
            </div>

            <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2 font-medium uppercase">Distance Preset</p>
                <div className="flex gap-2">
                    <button className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-100">1 ft</button>
                    <button className="px-3 py-1.5 bg-green-800 border border-green-800 rounded text-sm text-white shadow-sm">5 ft</button>
                    <button className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-100">10 ft</button>
                    <button className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-100">25 ft</button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
                <button className="flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700">
                    <ArrowUp size={16} /> Forward 5 ft
                </button>
                <button className="flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700">
                    <ArrowDown size={16} /> Back 5 ft
                </button>
                <button className="flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700">
                    <ArrowLeft size={16} /> Left 5 ft
                </button>
                <button className="flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700">
                    <ArrowRight size={16} /> Right 5 ft
                </button>
            </div>

            <p className="text-xs text-green-600 flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Precision mode enables exact distance movements for detailed field work
            </p>
        </Card>
    );
};

export const PresetActions: React.FC = () => {
    return (
        <Card>
            <div className="flex items-center gap-2 mb-4">
                <div className="p-1 rounded bg-green-100 text-green-700">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
                </div>
                <h3 className="font-semibold text-gray-900">Preset Actions</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button className="p-3 border border-gray-200 rounded-lg flex items-center gap-3 text-left hover:bg-gray-50 hover:border-green-200 active:bg-green-50 transition-colors">
                    <div className="bg-gray-100 p-2 rounded-lg text-gray-700">
                        <Home size={20} />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-900">Return to Base</p>
                        <p className="text-[10px] text-gray-500">Navigate back to starting position</p>
                    </div>
                    <div className="ml-auto">
                        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </div>
                </button>

                <button className="p-3 border border-gray-200 rounded-lg flex items-center gap-3 text-left hover:bg-gray-50 hover:border-green-200 active:bg-green-50 transition-colors">
                    <div className="bg-gray-100 p-2 rounded-lg text-gray-700">
                        <RotateCcw size={20} />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-900">Turn Around</p>
                        <p className="text-[10px] text-gray-500">Execute 180° rotation</p>
                    </div>
                    <div className="ml-auto">
                        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </div>
                </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 opacity-50">
                <div className="p-3 border border-gray-100 rounded-lg flex items-center gap-2">
                    <div className="h-2 w-20 bg-gray-100 rounded"></div>
                </div>
                <div className="p-3 border border-gray-100 rounded-lg flex items-center gap-2">
                    <div className="h-2 w-20 bg-gray-100 rounded"></div>
                </div>
            </div>
        </Card>
    );
};
