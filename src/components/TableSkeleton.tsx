import React from 'react';
import { ClassNameValue } from 'tailwind-merge';

import { Skeleton } from './Skeleton';

type TableSkeletonProps = {
    columns: number;
    rows: number;
    headerTitles?: string[];
    className?: ClassNameValue;
    disableAnimation?: boolean;
}

export const TableSkeleton: React.FC<TableSkeletonProps> = ({
    columns,
    rows,
    headerTitles,
    className,
    disableAnimation,
}) => {
    const showHeader = headerTitles && headerTitles.length === columns;

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    {showHeader && (
                        <tr>
                            {headerTitles.map(title => (
                                <th
                                    key={title}
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    {title || <Skeleton width="100%" height="20px" disableAnimation={disableAnimation} />}
                                </th>
                            ))}
                        </tr>
                    )}
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {Array.from({ length: rows }).map(row => (
                        <tr key={JSON.stringify(row)}>
                            {Array.from({ length: columns }).map(column => (
                                <td key={JSON.stringify(column)} className="px-6 py-4 whitespace-nowrap">
                                    <Skeleton className={className} width="100%" height="20px" disableAnimation={disableAnimation} />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};