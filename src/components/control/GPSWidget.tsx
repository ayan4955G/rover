import React from 'react';
import { Card } from '../ui/Card';
import { MapPin } from 'lucide-react';

export const GPSWidget: React.FC = () => {
    // Map screenshot placeholder or iframe. I'll use a static map style image.
    const mapUrl = "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1774&q=80";

    return (
        <Card className="h-full relative overflow-hidden group" noPadding>
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-gray-100 flex items-center gap-2">
                    <MapPin size={16} className="text-green-700" />
                    <span className="text-sm font-semibold text-gray-800">GPS Location</span>
                </div>
            </div>

            <div className="absolute top-4 right-4 z-10">
                <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm border border-gray-100 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-medium text-green-700">GPS Active</span>
                </div>
            </div>

            <div className="absolute bottom-4 left-4 z-10">
                <button className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 text-xs font-medium text-blue-600 hover:text-blue-700">
                    View larger map
                </button>
            </div>

            <div className="w-full h-[300px] relative bg-gray-100">
                <img src={mapUrl} alt="Map" className="w-full h-full object-cover opacity-80" />

                {/* Map Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                        <span className="absolute -inset-4 rounded-full bg-green-500/20 animate-ping"></span>
                        <div className="bg-green-600 text-white p-2 rounded-full shadow-lg border-2 border-white transform hover:scale-110 transition-transform cursor-pointer">
                            <MapPin size={24} fill="currentColor" />
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};
