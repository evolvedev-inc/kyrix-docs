# Outlet Component

> **Note:** When working with React Router, be aware that this guide covers only the essential aspects. For a deeper understanding and more advanced features, please refer to the official <a href='https://reactrouter.com/en/main/components/outlet#outlet' target='__blank'>React Router documentation</a>.

The `<Outlet>` component is used to render child routes or components in a nested route structure. It acts as a placeholder where the child components will be displayed. This is commonly used in layouts where you want to share some common structure (like a navigation bar or footer) across different pages.

## How it works

When defining nested routes, the `<Outlet>` component is placed inside the parent route’s component, and it renders whatever child route corresponds to the current URL.

## How to use

```tsx
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <h1>My Website</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      {/* The Outlet will render the matching child route here */}
      <main>
        <Outlet />
      </main>

      <footer>
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
};
```

**Check [Nested Routes](/routing/react-router/nesting-routes.html#using-outlet-in-components) for more information.**