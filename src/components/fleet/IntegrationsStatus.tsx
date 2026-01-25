import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const IntegrationsStatus: React.FC = () => {
    return (
        <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-500">
            <span className="font-semibold text-gray-400 uppercase tracking-wide text-xs">Integrations:</span>
            <div className="flex items-center gap-1.5 text-green-700">
                <CheckCircle2 size={16} />
                <span>GPS System</span>
            </div>
            <div className="flex items-center gap-1.5 text-green-700">
                <CheckCircle2 size={16} />
                <span>Weather API</span>
            </div>
            <div className="flex items-center gap-1.5 text-orange-500">
                <CheckCircle2 size={16} />
                <span>Farm Management</span>
            </div>
            <div className="flex items-center gap-1.5 text-green-700">
                <CheckCircle2 size={16} />
                <span>IoT Sensors</span>
            </div>
        </div>
    );
};
