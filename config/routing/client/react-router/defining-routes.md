# Defining Routes

> **Note:** When working with React Router, be aware that this guide covers only the essential aspects. For a deeper understanding and more advanced features, please refer to the official <a href='https://reactrouter.com' target='__blank'>React Router documentation</a>.

## Creating Routes

```tsx
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
```

We recommend using browser router.

createBrowserRouter takes an array of route objects where you provide the path (eg., `/example`) and main page component.

## Adding Router Provider

Add the Router Provider in the entry point of your React app, which should be in the main.tsx file.

```tsx
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
```

**that's it. Routing should automatically work now. 😊**

## Adding more routes

To add more routes, simply extend the array with additional route objects.

```tsx
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  //...
]);
```

### More useful options

```tsx
export const routes = createBrowserRouter([
  {
    id: "Home", // Unique identifier for the route
    caseSensitive: false, // Defaults to false
    index: true, // Defaults to false
    path: "/", // Path for the page
    element: <Home />, // Main page component
  },
]);
```

Some of these features will be covered again in the next section.
