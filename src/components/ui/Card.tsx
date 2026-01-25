import React from 'react';
import clsx from 'clsx';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, noPadding = false }) => {
    return (
        <div className={clsx("bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden", className)}>
            <div className={clsx(noPadding ? "" : "p-6")}>
                {children}
            </div>
        </div>
    );
};
