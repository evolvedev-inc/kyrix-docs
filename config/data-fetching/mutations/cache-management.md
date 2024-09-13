# Cache Management

This portion of the guide will cover cache invalidation, mutations and other strategies.

## tRPC Utils

You can use `useUtils` hook provided by trpc to maintain client-side cached data by **React Query**.

```tsx
const ctx = trpc.useUtils();
```

## Query Invalidation

After completion of a mutation, you can invalidate query cache to show the lastest data.

```tsx
const ctx = trpc.useUtils();

// Will invalidate cache of every single routers.
ctx.invalidate();
```

### Invalidating Specific routers/queries

```tsx
const ctx = trpc.useUtils();

// Assume we've products router.
// Will invalidate all procedures/endpoints in products router.
ctx.products.invalidate();
// Will invalidate only the procedure/endpoint -> (getAll) in products router.
ctx.products.getAll.invalidate();
```

## Mutating Cache

Sometimes you would want to update the cache yourself for eg. **optimistic updates**.

```tsx
const ctx = trpc.useUtils();

const newProduct = {
  title: "Shoes",
  price: 20,
};

// Assume we've products router.
// Here you would get all the methods available
// in react query's useQueryClient hook.
ctx.products.getAll.setData((prevProducts) => [...prevProducts, newProduct]);
```

Here we updated the old products array, and added a new product at the last index.

### Practical example

```tsx
import { trpc } from "@/lib/trpcClient";

const AddProduct = () => {
  const ctx = trpc.useUtils();
  const { mutate, isLoading } = trpc.products.create({
    onError: (err) => {
      alert(err.message);
    },
    onSuccess: (data) => {
      // Assume we return the added product from router.
      // data -> { title: "Shoes", price: 20 }
      ctx.products.getAll.setData(data);
    },
  });

  return (
    <button onClick={() => mutate({ title: "Shoes", price: 20 })}>
      Create Product
    </button>
  );
};

const Products = () => {
  const { data: products } = trpc.products.getAll.useQuery();

  // Will update with the new product after successful mutation.
  return products?.map((p) => (
    <div>
      <p>{p.title}</p>
      <span>{p.title}</span>
    </div>
  ));
};
```
