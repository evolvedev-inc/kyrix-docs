# Dynamic Routes

> **Note:** When working with React Router, be aware that this guide covers only the essential aspects. For a deeper understanding and more advanced features, please refer to the official <a href='https://reactrouter.com/en/main/route/route#dynamic-segments' target='__blank'>React Router documentation</a>.

Dynamic routes allow you to use placeholders in the URL path to handle variable segments. This involves displaying different content based on the URL parameters.

## Creating dynamic routes

```tsx
createBrowserRouter([
  {
    path: "/dashboard/:userId",
    element: <UserDashboard />,
  },
]);
```

### Rendering content based on dynamic segment

```tsx
import { useParams } from "react-router-dom";
```

### `<UserDashboard />` Component

```tsx
const UserDashboard = () => {
  const params = useParams();
  return <div>UserId: {params.userId}</div>;
};
```

Whatever you name the dynamic part in path, that will be available to you in `useParams` hook.

## Multiple dynamic Segments

```tsx
createBrowserRouter([
  {
    path: "/products/:category/:itemId",
    element: <Product />,
  },
]);
```

### `<Product />` Component

```tsx
const Product = () => {
  const params = useParams();
  return (
    <div>
      {/* Both will be available */}
      Category: {params.category}
      itemId: {params.itemId}
    </div>
  );
};
```
## Dont's

- 🚫 "/teams-:teamId"
- 🚫 "/:category--:productId"
