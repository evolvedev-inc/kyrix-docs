# NavLink Component

> **Note:** When working with React Router, be aware that this guide covers only the essential aspects. For a deeper understanding and more advanced features, please refer to the official <a href='https://reactrouter.com/en/main/components/nav-link' target='__blank'>React Router documentation</a>.

A `<NavLink>` is similar to a `<Link>`, but it can automatically apply active styling to indicate which route is currently selected. This is useful for things like navigation menus where you want to highlight the active page.

## How to use

```tsx
import { NavLink } from "react-router-dom";

<NavLink
  to="/contact"
  className={({ isActive, isPending }) => ({ isActive ? "link-active" : "" })}
>
  Home
</NavLink>;
```

## CSS Styles

```css
.link-active {
  color: red;
  font-weight: 700;
}
```
**Navigation behavior with kyrix remains the same as `<Link>` component.**