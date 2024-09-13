# Handling Errors

We have already discussed a little bit about errors and how to handle them usint **React Query** but in this section we'll go even more deeper.

## Global Error Handling

You can find the this file in `src/Providers.tsx`

```tsx
const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (err) => {
        // Global error handling logic.
        // Again better to use a toast here.
        alert("An error occurred: " + err.message);
      },
    },
  },
});
```

> **Note:** If you utilised `onError` callback both in `QueryClient` and `useMutation` hook, the later will take precedence.

## Retrying

```tsx
const { mutate } = trpc.products.delete.useMutation({
  retry: 3, // Will retry 3 times before failing
  retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
});
```

## Error Boundaries

You can either use the error handling capabilites of **React Query** or use a error boundary.

```tsx
<ErrorBoundary fallback={<div>Something went wrong</div>}>
  {/* This should be the component where useMutation hook is used */}
  <MyComponent />
</ErrorBoundary>
```

## Handling Different Types of Errors

```tsx
import { TRPCClientError } from "@trpc/react-query";

const { mutate } = trpc.products.delete.useMutation({
  onError: (err) => {
    if (err instanceof TRPCClientError) {
      // Use a toast for better user experience.
      if (err.data?.httpStatus === 401) {
        // Navigate to signIn page
        // return ...
      } 
      alert('OOPS! Deletion failed')
    } else {
      alert("Something went wrong");
    }
  },
});
```
