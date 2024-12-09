import React from 'react';
import { ClassNameValue } from 'tailwind-merge';

import { cn } from '../utilities';

type SkeletonProps = {
    className?: ClassNameValue;
    htmlTag?: keyof JSX.IntrinsicElements;
    isLoading?: boolean;
    children?: React.ReactNode;
    width?: string;
    height?: string;
    shape?: 'rectangle' | 'circle';
    disableAnimation?: boolean;
    borderRadius?: string;
};

export const Skeleton: React.FC<SkeletonProps> = ({
    className,
    htmlTag = 'span',
    isLoading = true,
    children,
    width = '100%',
    height = '1rem',
    shape = 'rectangle',
    disableAnimation = false,
    borderRadius,
}) => {
    const Tag = htmlTag;

    const skeletonClasses = cn(
        'bg-gray-300 dark:bg-gray-700',
        shape === 'circle' ? 'rounded-full' : 'rounded',
        !disableAnimation && 'animate-pulse',
        className
    );

    if (isLoading) {
        return (
            <Tag
                className={skeletonClasses}
                style={{
                    width,
                    height: children ? undefined : height,
                    borderRadius,
                }}
            >
                {children ? <div style={{ visibility: 'hidden' }}>{children}</div> : null}
            </Tag>
        );
    }

    return <>{children}</>;
};