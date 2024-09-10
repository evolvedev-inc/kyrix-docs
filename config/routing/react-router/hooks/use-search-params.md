# `useSearchParams` hook

> **Note:** When working with React Router, be aware that this guide covers only the essential aspects. For a deeper understanding and more advanced features, please refer to the official <a href='https://reactrouter.com/en/main/hooks/use-search-params' target='__blank'>React Router documentation</a>.

The `useSearchParams` is used to read and modify the query string in the URL for the current location.

```tsx
import { useSearchParams } from "react-router-dom";

const App = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const queryValue = searchParams.get("query");
  // Example: If URL is /search?q=react, q will be "react"

  function handleSubmit(e) {
    e.preventDefault();

    setSearchParams({ q: "react" });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>{/* ... */}</form>
    </div>
  );
};
```
