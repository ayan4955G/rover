import React from 'react';
import { AnalyticsHeader, AnalyticsStats } from '../components/analytics/AnalyticsOverview';
import { ActiveAlerts, ExportSection } from '../components/analytics/AnalyticsToolbar';
import { SensorWidget } from '../components/analytics/SensorWidget';
import { Thermometer, Droplets, Sprout, FlaskConical, Sun, AlignLeft } from 'lucide-react';
import { Info } from 'lucide-react'; // Helper for layout info

const Analytics: React.FC = () => {
    // Mock Data for Charts
    const tempData = [22, 23, 24, 22, 21, 23, 25, 26, 26.8, 25, 24, 25, 26, 26.8];
    const humData = [65, 66, 68, 70, 72, 71, 69, 68, 70, 72, 71, 72, 73, 72];
    const soilData = [40, 39, 38, 38, 37, 36, 35, 36, 37, 38, 39, 38, 37, 38];
    const phData = [6.7, 6.7, 6.8, 6.8, 6.8, 6.9, 6.8, 6.7, 6.8, 6.8, 6.8, 6.8, 6.8];
    const nutrientData = [400, 410, 415, 420, 410, 405, 410, 415, 420, 425, 420, 415, 420];
    const lightData = [600, 700, 800, 850, 870, 860, 850, 800, 750, 700, 800, 840, 850];

    return (
        <div className="pb-10">
            <AnalyticsHeader />
            <AnalyticsStats />

            <ActiveAlerts />
            <ExportSection />

            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Sensor Widgets</h3>
                <button className="text-xs text-gray-400 flex items-center gap-1 hover:text-gray-600">
                    <Info size={12} /> Drag to reorder • Click to expand
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SensorWidget
                    icon={<Thermometer size={18} className="text-green-700" />}
                    title="Temperature Sensor"
                    location="North Field"
                    value="26.8"
                    unit="°C"
                    threshold="18 - 30 °C"
                    status="Normal"
                    trend="+2.3%"
                    trendPositive={true}
                    updatedAt="30 sec ago"
                    id="TEMP-NF-001"
                    color="#2d6a4f" // Green
                    data={tempData}
                />
                <SensorWidget
                    icon={<Droplets size={18} className="text-green-700" />}
                    title="Humidity Monitor"
                    location="South Field"
                    value="72"
                    unit="%"
                    threshold="40 - 80 %"
                    status="Normal"
                    trend="-1.5%"
                    trendPositive={false}
                    updatedAt="45 sec ago"
                    id="HUM-SF-002"
                    color="#2d6a4f"
                    data={humData}
                />
                <SensorWidget
                    icon={<Sprout size={18} className="text-orange-500" />}
                    title="Soil Moisture"
                    location="East Field"
                    value="38"
                    unit="%"
                    threshold="30 - 60 %"
                    status="Warning"
                    trend="-8.2%"
                    trendPositive={false}
                    updatedAt="1 min ago"
                    id="SOIL-EF-003"
                    color="#f97316" // Orange
                    data={soilData}
                />
                <SensorWidget
                    icon={<FlaskConical size={18} className="text-green-700" />}
                    title="pH Level"
                    location="West Field"
                    value="6.8"
                    unit="pH"
                    threshold="6 - 7.5 pH"
                    status="Normal"
                    trend="+0.5%"
                    trendPositive={true}
                    updatedAt="20 sec ago"
                    id="PH-WF-004"
                    color="#2d6a4f"
                    data={phData}
                />
                <SensorWidget
                    icon={<AlignLeft size={18} className="text-green-700" />} // Using AlignLeft as a leaf/nutrient proxy
                    title="Nutrient Level"
                    location="Greenhouse 1"
                    value="420"
                    unit="ppm"
                    threshold="300 - 600 ppm"
                    status="Normal"
                    trend="+3.1%"
                    trendPositive={true}
                    updatedAt="15 sec ago"
                    id="NUT-GH-005"
                    color="#2d6a4f"
                    data={nutrientData}
                />
                <SensorWidget
                    icon={<Sun size={18} className="text-green-700" />}
                    title="Light Intensity"
                    location="Greenhouse 2"
                    value="850"
                    unit="lux"
                    threshold="500 - 1200 lux"
                    status="Normal"
                    trend="+12.5%"
                    trendPositive={true}
                    updatedAt="10 sec ago"
                    id="LGT-GH-006"
                    color="#2d6a4f"
                    data={lightData}
                />
            </div>
        </div>
    );
};

export default Analytics;
