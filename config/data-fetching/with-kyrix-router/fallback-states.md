# Fallback States

When using **Kyrix Router**, we expect data to be available for rendering immediately. However, handling missing or errored SSR data gracefully is crucial.

## Navigation loading states

Use `useKyrixContext` hook to show loading states during navigation:

```tsx
export const App = () => {
  const { isNavigating } = useKyrixContext();

  return (
    <main>
      {isNavigating && 'loading...'}
      <Outlet />
    </main>
  );
};
```

> **Note:** Apply this loading state globally for all routes.

## Navigation error states

For handling errors during navigation, it's better to an **Error Boundary**.

- [Handling errors with React Router](/routing/react-router/handling-errors.md)

**OR**

Use [`react-error-boundary`](/routing/kyrix-router/handling-errors#error-handling-in-client)