# `useLocation` hook

> **Note:** When working with React Router, be aware that this guide covers only the essential aspects. For a deeper understanding and more advanced features, please refer to the official <a href='https://reactrouter.com/en/main/hooks/use-location' target='__blank'>React Router documentation</a>.

The `useLocation` hook gives access to the current location object, which contains information about the URL like pathname, search query, and state. It's helpful when you want to track the current URL or pass additional state during navigation.

```tsx
import { useLocation } from "react-router-dom";

const location = useLocation();
console.log(location.pathname);  // Outputs the current path, e.g., "/home"
console.log(location.search);    // Outputs the query string, e.g., "?query=react"
console.log(location.state);     // Outputs any state passed with navigation
```