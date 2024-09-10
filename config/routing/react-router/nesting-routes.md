# Nesting Routes

> **Note:** When working with React Router, be aware that this guide covers only the essential aspects. For a deeper understanding and more advanced features, please refer to the official <a href='https://reactrouter.com/en/main/start/overview#nested-routes' target='__blank'>React Router documentation</a>.

Nesting routes is useful when you have parts of your application that share the same layout or need a common structure. You can group related pages and have them rendered within a parent component like (navbars or sidebars).

## Creating Layouts

```tsx
createBrowserRouter([
  {
    element: <Root />, // Common layout for the app
    children: [
      {
        path: "/",
        element: <Home />, // Home page rendered under Root layout
      },
      {
        element: <AuthLayout />, // Auth-specific layout
        children: [
          {
            path: "/register",
            element: <Register />, // Register page rendered under AuthLayout
          },
          {
            path: "/login",
            element: <Login />, // Login page rendered under AuthLayout
          },
        ],
      },
    ],
  },
]);
```

You can create a common layout and nest routes in it like it's shown above.

In this case, all routes will be nested under Root component and the both Login and Register page will be under Auth Layout (Root -> Auth Layout -> children).

**What'll happen**:

- In `/route` you'll see the Home component wrapped under your Root component.
- In `/register` and `/login` both will be wrapped under Root and Auth Layout.

## Using `<Outlet />` in Components

Doing above is not enough, we need to add `<Outlet />` component in our layout components so that all children routes gets injected here.

```tsx
import { Outlet } from "react-router-dom";
```

### Root Layout

```tsx
const Root = () => {
  return (
    <main>
      <Navbar />
      <Outlet /> {/* Children routes of under Root will be rendered here. */} // [!code focus]
    </main>
  );
};
```

### Auth Layout

```tsx
const AuthLayout = () => {
  return (
    <main>
      <BrandLogo />
      <Outlet /> {/* Children routes of under Auth Layout will be rendered here. */} // [!code focus]
    </main>
  );
};
```
## Nesting Routes

```tsx
createBrowserRouter([
  {
    path: '/dashboard',
    element: <Dashboard />, // Common layout for dashboard
    children: [
      {
        index: true, // Visiting `/dashboard` will render Overview Component
        path: '/overview',
        element: <Overview />,
      },
      {
        path: '/manage',
        element: <Manage />,
      },
    ],
  },
]);
```

Here, `<Dashboard />` is the layout for all `/dashborad/*` routes. We set `index: true` in Overview page so that it gets rendered whenever we visit `/dashborad` and `/manage` will render the manage page.

That's all!
