# `useNavigate` Hook

> **Note:** When working with React Router, be aware that this guide covers only the essential aspects. For a deeper understanding and more advanced features, please refer to the official <a href='https://reactrouter.com/en/main/hooks/use-navigate' target='__blank'>React Router documentation</a>.

The `useNavigate` hook in React Router is used to programmatically navigate between routes. This hook returns a function that allows you to change the URL, similar to how a `<Link>` works, but from within your code logic (like inside a function or an effect).

## Example:

```tsx
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Navigate to the "/" route after user logs out.
    navigate("/");
  };

  return <button onClick={handleLogout}>Go to Home</button>;
};
```

## Options

The `useNavigate` hook can take several options that control how navigation behaves, like whether to replace the current history entry, pass state to the destination route, or use relative paths.

```tsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const handleClick = () => {
  navigate("/", {
    // replace: true will replace the current entry in the history stack,
    // meaning the user can't go back to the previous page.
    replace: true, // default false

    // state allows you to pass custom data to the destination route.
    // It can be accessed via location.state in the target component.
    state: { fromDashboard: true },

    // relative can be set to "route" or "path".
    // "route" is the default and calculates the navigation relative
    // to the nearest route, while "path" calculates relative to the current URL.
    relative: "path",
  });
};
```
**`useNavigate` will also have the same navigation behaviour like `<Link>` with kyrix. Check [this](/routing/react-router/components/link.html#behaviour-with-kyrix) for more info.**