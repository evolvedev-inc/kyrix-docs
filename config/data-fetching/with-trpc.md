# Data Fetching

This guide will cover the basics of fetching data on server and using it in client via standard api requests.

## With tRPC

tRPC will handle all of your api requests. This is the best place and recommended way to fetch data server side.

### Create a new tRPC Router

We recommend keeping all of your tRPC routers in one folder inside `src/server/trpc/routers`.

```ts
import { publicProcedure, router } from "../trpc";

export const productsRouter = router({
  getAll: publicProcedure.query(async ({ ctx }) => {
    // ctx has req and res. You can use it if required.
    const products = await getProducts();
    return products;
  }),
});

// Function to get the products.
async function getProducts() {
  // Do some actual logic to get the products.
  return [
    {
      name: "Big Black Candles",
      price: 20,
    },
  ];
}
```

In a simple tRPC query you just need to get the data and return it. Whatever you return in the `query` function will be sent to the client.

### Add `productRouter` in main `appRouter`

The appRouter should be inside `src/server/trpc/root.ts`. You can add multiple routers here and you'll get full type-safety in client.

```ts
import { router } from "./trpc";

import { kyrixRouter } from "./routers/kyrixRouter";
import { productsRouter } from "./routers/productsRouter";

export const appRouter = router({
  // KyrixRouter handles meta and initial Data injection.
  // Don't modify it if not needed.
  kyrix: kyrixRouter,
  products: productsRouter,
});

export type AppRouter = typeof appRouter;
```

**The server part is done! 🎉**

### Using tRPC query data in client

```tsx
import { trpc } from "@/lib/trpcClient";

const Products = () => {
  // Type -> { name: string; price: number }[] | undefined
  const { data: products } = trpc.products.getAll.useQuery();

  return products?.map((product, idx) => (
    <div key={idx}>
      <p>{product.name}</p>
      <span>{product.price}</span>
    </div>
  ));
};

export default Products;
```

tRPC is configured with `@tanstack/react-query` which manages data in client.