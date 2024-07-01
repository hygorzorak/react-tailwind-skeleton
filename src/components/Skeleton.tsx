import React from 'react';

import { cn } from '../utilities';
import { ClassNameValue } from 'tailwind-merge';

type SkeletonProps = {
    width?: string;
    height?: string;
    shape?: 'rectangle' | 'circle';
    disableAnimation?: boolean;
    borderRadius?: string;
    className?: ClassNameValue
}

export const Skeleton: React.FC<SkeletonProps> = ({
    width = '100%',
    height = '100%',
    shape = 'rectangle',
    disableAnimation = false,
    borderRadius,
    className,
}) => {
    const skeletonClasses = cn(
        'bg-gray-300',
        shape === 'circle' ? 'rounded-full' : 'rounded',
        !disableAnimation && {
            'animate-pulse': true,
        },
        className,
    );

    return (
        <div
            className={skeletonClasses}
            style={{ width, height, borderRadius }}
        />
    );
};
