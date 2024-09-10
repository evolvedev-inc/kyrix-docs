# Dynamic Routes

Dynamic routes will allow you to fetch data or set metadata with the dynamic segments.

**Data Fetching is covered in later sections.**

## Creating dynamic routes

```tsx
export const ssrRoutes = [
  {
    id: "Product" as const,
    path: "/product/:id",
    handler: (_, params) => {
      console.log(params.id)
      // ...
    },
  },
] satisfies SSRRoute<TRPCContext>[];
```

Whatever you name the dynamic part in path, that will be available to you in second argument in the handler function.

## Multiple dynamic segments

```tsx
export const ssrRoutes = [
  {
    id: "Product" as const,
    path: "/product/:category/:productId",
    handler: (_, params) => {
      // Here both category and productId will be available.
      console.log(params.id)
      console.log(params.productId)
      // ...
    },
  },
] satisfies SSRRoute<TRPCContext>[];
```

## Dont's

- 🚫 "/teams-:teamId"
- 🚫 "/:category--:productId"