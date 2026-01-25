import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Tractor, LayoutDashboard, Gamepad2, LineChart, Calendar, MoreHorizontal, Bell, Wifi, ChevronDown, Wrench, Compass } from 'lucide-react';
import clsx from 'clsx';

const MainLayout: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            {/* Top Navigation */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="bg-green-700 p-2 rounded-lg text-white">
                                <Tractor size={24} />
                            </div>
                            <span className="text-xl font-bold text-gray-900 tracking-tight">FarmVehicle Control</span>
                        </div>

                        {/* Navigation Tabs */}
                        <nav className="hidden md:flex space-x-1">
                            <NavLink
                                to="/"
                                className={({ isActive }) => clsx(
                                    "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                                    isActive ? "text-green-700 bg-green-50" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                                )}
                            >
                                <LayoutDashboard size={18} />
                                Fleet
                            </NavLink>
                            <NavLink
                                to="/maintenance"
                                className={({ isActive }) => clsx(
                                    "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                                    isActive ? "text-green-700 bg-green-50" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                                )}
                            >
                                <Wrench size={18} />
                                Maintenance
                            </NavLink>
                            <NavLink
                                to="/control"
                                className={({ isActive }) => clsx(
                                    "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                                    isActive ? "text-green-700 bg-green-50" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                                )}
                            >
                                <Gamepad2 size={18} />
                                Control
                            </NavLink>
                            <NavLink
                                to="/analytics"
                                className={({ isActive }) => clsx(
                                    "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                                    isActive ? "text-green-700 bg-green-50" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                                )}
                            >
                                <LineChart size={18} />
                                Analytics
                            </NavLink>
                            <NavLink
                                to="/schedule"
                                className={({ isActive }) => clsx(
                                    "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                                    isActive ? "text-green-700 bg-green-50" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                                )}
                            >
                                <Calendar size={18} />
                                Schedule
                            </NavLink>
                            <NavLink
                                to="/path-orientation"
                                className={({ isActive }) => clsx(
                                    "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                                    isActive ? "text-green-700 bg-green-50" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                                )}
                            >
                                <Compass size={18} />
                                Path & Orientation
                            </NavLink>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100">
                                <MoreHorizontal size={18} />
                                More
                            </button>
                        </nav>

                        {/* Right Actions */}
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-green-600 font-medium text-sm">
                                <Wifi size={16} />
                                <span>Connected</span>
                            </div>

                            <button className="text-gray-500 hover:text-gray-900 relative">
                                <Bell size={20} />
                                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white transform translate-x-1/2 -translate-y-1/2"></span>
                            </button>

                            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
                                <div className="h-8 w-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-medium text-sm">
                                    JM
                                </div>
                                <div className="hidden lg:block text-left">
                                    <p className="text-sm font-medium text-gray-900 leading-none">John Mitchell</p>
                                    <p className="text-xs text-gray-500 mt-1">Farm Manager</p>
                                </div>
                                <ChevronDown size={16} className="text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
