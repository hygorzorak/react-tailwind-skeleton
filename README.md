# ReactTailwindSkeleton Components

[![NPM Version](https://img.shields.io/npm/v/npm-package-template.svg)](https://www.npmjs.com/package/react-tailwind-skeleton)

A React component library for displaying skeleton loaders for tables and other UI elements. This package provides two main components: `TableSkeleton` and `Skeleton`. These components can be customized with various properties to fit different use cases.

## Installation

To install the package, run:

```bash
npm install react-tailwind-skeleton
```

## Usage

### Importing the Components

You can import the components in your React application as follows:

```jsx
import React from "react";
import { Skeleton, TableSkeleton } from "react-tailwind-skeleton";
```

### TableSkeleton Props

The `TableSkeleton` component accepts the following props:

- `columns` (`number`): Number of columns in the table.
- `rows` (`number`): Number of rows in the table.
- `headerTitles` (`string[]`, optional): Array of strings for the header titles. If not provided or length doesn't match columns, headers won't be shown.

### Skeleton Props

The `Skeleton` component accepts the following props:

className (ClassNameValue, optional): Additional Tailwind CSS classes for styling.
- `htmlTag` (keyof JSX.IntrinsicElements, optional): The HTML tag to use for the skeleton element. Defaults to span.
- `isLoading` (boolean, optional): Determines whether the skeleton loader is visible. Defaults to true.
- `children` (React.ReactNode, optional): Content to render once loading is complete. If provided, the content will be hidden during loading.
- `width` (string, optional): Width of the skeleton element. Defaults to 100%.
- `height` (string, optional): Height of the skeleton element. Defaults to 1rem. Ignored if children is provided.
- `shape` ('rectangle' | 'circle', optional): Shape of the skeleton element. Defaults to rectangle.
- `disableAnimation` (boolean, optional): Disables the pulse animation. Defaults to false.
- `borderRadius` (string, optional): Custom border radius for the skeleton element. Overrides the default rounded or rounded-full classes.

### Example

#### Table with 3 columns and 5 rows with header titles:

```jsx
<TableSkeleton columns={3} rows={5} headerTitles={["Name", "Email", "Phone"]} />
```

#### Table with 4 columns and 3 rows without header titles:

```jsx
<TableSkeleton columns={4} rows={3} />
```

#### Rectangle skeleton element:

```jsx
<Skeleton
  width="200px"
  height="100px"
  shape="rectangle"
  animate={true}
  borderRadius="10px"
/>
```

## Development

### Building the Package

To build the package, run:

```bash
npm run build
```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
