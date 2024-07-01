import { ReactElement, useState } from 'react';

import { Skeleton, TableSkeleton } from './components';
import { cn } from './utilities';

const components: Record<string, ReactElement> = {
    TableSkeleton: (
        <TableSkeleton
            className="block mt-4"
            columns={3}
            rows={5}
            headerTitles={['Name', 'Email', 'Phone']}
        />
    ),
    Skeleton: (
        <div className="flex justify-around">
            <Skeleton
                className="block mt-2"
                width="100px"
                height="100px"
                shape="circle"
                borderRadius="50%"
            />
            <Skeleton
                className="block mt-2"
                width="100px"
                height="100px"
                shape="rectangle"
            />
            <Skeleton
                className="block mt-2"
                width="100px"
                height="20px"
                shape="rectangle"
                borderRadius="10px"
                disableAnimation
            />
            <div className='flex flex-col'>
                <Skeleton
                    className="block mt-2"
                    width="100px"
                    height="8px"
                    shape="rectangle"
                />
                <Skeleton
                    className="block mt-2"
                    width="100px"
                    height="8px"
                    shape="rectangle"
                />
                <Skeleton
                    className="block mt-2"
                    width="100px"
                    height="8px"
                    shape="rectangle"
                />
            </div>
        </div>
    ),
};

const componentDocs: Record<string, ReactElement> = {
    TableSkeleton: (
        <div>
            <h2 className="text-xl font-bold mb-2">TableSkeleton Component</h2>
            <p className="mb-4">
                The <code>TableSkeleton</code> component simulates a loading state for tables.
            </p>
            <h3 className="text-lg font-semibold">Props</h3>
            <ul className="list-disc list-inside mb-4">
                <li><code>columns</code> (number): Number of columns in the table.</li>
                <li><code>rows</code> (number): Number of rows in the table.</li>
                <li><code>headerTitles</code> (string[], optional): Array of strings for the header titles. If not provided or length doesn't match columns, headers won't be shown.</li>
            </ul>
            <h3 className="text-lg font-semibold">Usage</h3>
            <pre className="bg-gray-100 p-4 rounded"><code>
                {`import TableSkeleton from './TableSkeleton';

function Example() {
    return (
        <TableSkeleton 
            className="block mt-4" 
            columns={3} 
            rows={5} 
            headerTitles={['Name', 'Email', 'Phone']} 
        />
    );
}`}
            </code></pre>
        </div>
    ),
    Skeleton: (
        <div>
            <h2 className="text-xl font-bold mb-2">Skeleton Component</h2>
            <p className="mb-4">
                The <code>Skeleton</code> component creates skeleton loaders for various UI elements.
            </p>
            <h3 className="text-lg font-semibold">Props</h3>
            <ul className="list-disc list-inside mb-4">
                <li><code>width</code> (string, optional): Width of the skeleton element.</li>
                <li><code>height</code> (string, optional): Height of the skeleton element.</li>
                <li><code>shape</code> ('rectangle' | 'circle', optional): Shape of the skeleton element.</li>
                <li><code>animate</code> (boolean, optional): Whether to animate the skeleton element.</li>
                <li><code>borderRadius</code> (string, optional): Custom border radius for the skeleton element.</li>
            </ul>
            <h3 className="text-lg font-semibold">Usage</h3>
            <pre className="bg-gray-100 p-4 rounded"><code>
                {`import Skeleton from './Skeleton';

function Example() {
    return (
        <Skeleton 
            className="block mt-2"
            width="100px"
            height="100px"
            shape="circle"
            animate={true}
            borderRadius="50%"
        />
    );
}`}
            </code></pre>
        </div>
    ),
};

export function App() {
    const [selectedComponent, setSelectedComponent] = useState('Skeleton');

    const sortedComponentKeys = Object.keys(components).sort();

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <aside className="w-64 bg-white shadow-lg p-3">
                <div className="p-2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">React Skeleton Components</h2>
                </div>
                <div className="p-2">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Components</h3>
                    <ul>
                        {sortedComponentKeys.map((component) => (
                            <li key={component}>
                                <button
                                    className={cn(
                                        'w-full text-left p-2 rounded',
                                        selectedComponent === component && 'bg-gray-200',
                                    )}
                                    onClick={() => setSelectedComponent(component)}
                                >
                                    {component}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
            <main className="flex-1 p-6 mb-32">
                <div className="bg-white shadow-lg rounded-lg p-6 mx-auto">
                    {componentDocs[selectedComponent]}
                    <div className="mt-6">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Component Preview</h1>
                        <div className="text-lg text-gray-700">
                            {components[selectedComponent]}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}