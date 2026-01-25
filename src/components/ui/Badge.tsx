import React from 'react';
import clsx from 'clsx';

export type BadgeVariant = 'success' | 'warning' | 'error' | 'neutral' | 'info';

interface BadgeProps {
    children: React.ReactNode;
    variant?: BadgeVariant;
    className?: string;
    icon?: React.ReactNode;
}

const variants = {
    success: 'bg-green-50 text-green-700 border-green-100',
    warning: 'bg-yellow-50 text-yellow-700 border-yellow-100',
    error: 'bg-red-50 text-red-700 border-red-100',
    neutral: 'bg-gray-100 text-gray-700 border-gray-200',
    info: 'bg-blue-50 text-blue-700 border-blue-100',
};

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'neutral', className, icon }) => {
    return (
        <span className={clsx(
            "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border",
            variants[variant],
            className
        )}>
            {icon && <span className="w-3 h-3 flex items-center justify-center">{icon}</span>}
            {children}
        </span>
    );
};
