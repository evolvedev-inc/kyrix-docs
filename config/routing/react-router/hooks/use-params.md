# `useParams` hook

> **Note:** When working with React Router, be aware that this guide covers only the essential aspects. For a deeper understanding and more advanced features, please refer to the official <a href='https://reactrouter.com/en/main/hooks/use-params' target='__blank'>React Router documentation</a>.

The `useParams` hook allows you to access dynamic URL parameters from the route.

```tsx
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();
  // Example: If URL is /users/123, id will be "123"

  return <div>userId: {userId}</div>;
};

const routes = createBrowserRouter([
  {
    path: "/users/:userId",
    element: <UserPage />,
  },
]);
```
