# Handling Errors

> **Note:** When working with React Router, be aware that this guide covers only the essential aspects. For a deeper understanding and more advanced features, please refer to the official <a href='https://reactrouter.com/en/main/route/route#errorelementerrorboundary' target='__blank'>React Router documentation</a>.

## Not Found Errors

It's always better to show a custom not found page for users.

```tsx
const NotFound = () => {
  return <div>404 Not found</div>;
};
createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
]);
```

The `errorElement` will catch any errors thrown in a route, and will render this error element.

```tsx
createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <HomeError />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ContactError />,
  },
]);
```

You can also have custom error UI's for each route.

## Other Errors

We know how to handle 404 now but what about other errors. You can achieve this with the same `errorElement`.

```tsx
import { useRouteError } from "react-router-dom";
```

### Root Error Element

```tsx
const RootError = () => {
  const error = useRouteError();

  // You can type this if u want.
  if ((error as any)?.status === 404) {
    return <div>404 Not found</div>;
  }

  return <div>OPPS! Something went wrong</div>;
};
```
You can use this in the `errorElement` to handle both 404 not found and other errors in one place.