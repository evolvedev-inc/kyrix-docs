# Handling Errors

**Kyrix Router** is a tRPC router, thus all your handler functions from **ssrRoutes** will be called in this router only.

By default if you throw any errors in your handler, it'll be caught by tRPC and returned as Internal server error to client.

> **Note**: The meta or initial data won't be available in client in case of any errors, make sure to use error boundary provided by your client side router.

## Manual error handling.

```tsx
export const ssrRoutes = [
  {
    id: "Product" as const,
    path: "/product/:id",
    handler: (_, { id }) => {
      try {
        // Function that can throw error.
        const product = getProduct(id);
        // Set metadata
        return {
          meta: {
            title: product.title,
            description: product.description,
          },
        };
      } catch (err) {
        // Set error metadata
        return {
          meta: {
            title: 'Error',
            description: 'Some error happened',
          },
        };
      }
    },
  },
] satisfies SSRRoute<TRPCContext>[];
```
## Error handling in client

Your router of choice might already have a way to show custom error page. 

- [React Router Error Handling](/routing/react-router/handling-errors.md)

You can also use `react-error-boundary`.

```sh
npm i react-error-boundary
```

### Example usage

```tsx
<ErrorBoundary fallback={<div>Something went wrong</div>}>
  <App />
</ErrorBoundary>
```