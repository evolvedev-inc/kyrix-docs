# Mutations

Mutations are used to modify or update data on the server, typically triggered by a user action, like submitting a form.

# Creating a new tRPC router

```ts
import { z } from "zod";
import { publicProcedure, router } from "../trpc";

// Zod validation schema. You can use any validation lib or method.
// Check tRPC docs -> https://trpc.io/docs/server/validators#library-integrations
const deleteProduct = z.object({
  productId: z.string().min(2),
});

export const productsRouter = router({
  delete: publicProcedure
    .input(deleteProduct)
    .mutation(async ({ ctx, input }) => {
      // ctx has req and res. You can use it if required.
      // const { req, res } = ctx
      const { productId } = input;

      const product = await deleteProductById(productId);
      return product; // You need to return something.
    }),
});
```

The input will automatically be vaildated depending on your validation schema and appropriate error response will be returned, client side error handling is left up to the developer.

## Usage in client with React Query

```tsx
import { trpc } from "@/lib/trpcClient";

const Products = () => {
  // Query which gives us the products.
  const { data: products } = trpc.products.getAll.useQuery();
  // Mutation use just created.
  const { mutate } = trpc.products.delete.useMutation();

  return products?.map((product, idx) => (
    <div key={idx}>
      <p>{product.name}</p>
      <span>{product.price}</span>
      <button
        onClick={() =>
          mutate({
            // ProductId is required or else it'll give type errors.
            productId: product.id,
          })
        }
      >
        Delete
      </button>
    </div>
  ));
};

export default Products;
```

## Handling loading states

For a good user experience you need to alert them if some mutation is pending.

```tsx
const { mutate, isLoading } = trpc.products.delete.useMutation();

if (isLoading) {
  return <p>deletion is in progress...</p>;
}
// ...
```

tRPC just provides a type-safe wrapper around **React Query**, thus you've access to all the features of react query but in a typesafe way.

## Handling errors and success

```tsx
const { mutate, isLoading } = trpc.products.delete.useMutation({
  onError: (err) => {
    alert(err.message); // Better to use a toast instead
  },
  onSuccess: () => {
    alert('Deletion success'); // Better to use a toast instead
  },
});

if (isLoading) {
  return <p>deletion is in progress...</p>;
}
// ...
```
