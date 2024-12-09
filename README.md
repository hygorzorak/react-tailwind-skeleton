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

const App = () => {
  return (
    <div>
      <TableSkeleton
        columns={3}
        rows={5}
        headerTitles={["Name", "Email", "Phone"]}
      />
      <Skeleton
        width="100px"
        height="100px"
        shape="circle"
        animate={true}
        borderRadius="50%"
      />
    </div>
  );
};

export default App;
```

### TableSkeleton Props

The `TableSkeleton` component accepts the following props:

- `columns` (`number`): Number of columns in the table.
- `rows` (`number`): Number of rows in the table.
- `headerTitles` (`string[]`, optional): Array of strings for the header titles. If not provided or length doesn't match columns, headers won't be shown.

### Skeleton Props

The `Skeleton` component accepts the following props:

- `width` (`string`, optional): Width of the skeleton element. Defaults to `100%`.
- `height` (`string`, optional): Height of the skeleton element. Defaults to `100%`.
- `shape` (`'rectangle' | 'circle'`, optional): Shape of the skeleton element. Defaults to `rectangle`.
- `animate` (`boolean`, optional): Whether to animate the skeleton element. Defaults to `true`.
- `borderRadius` (`string`, optional): Custom border radius for the skeleton element. If not provided, it uses Tailwind's default `rounded` class.

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
