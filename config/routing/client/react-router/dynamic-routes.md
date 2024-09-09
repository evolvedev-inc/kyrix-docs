# Dynamic Routes

> **Note:** This section will only cover important bits we recommend checking out <a href='https://reactrouter.com/en/main/route/route#dynamic-segments' target='__blank'>React Router Docs</a> for more Information.

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

Whatever you named the dynamic part in path, that will be available to you in `useParams` hook.

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
