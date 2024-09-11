# Data Fetching

This guide will cover the basics of fetching data on server and using it in client via Kyrix Router(SSR).

## With Kyrix Router

You'll mostly fetch dynamic data to set metadata for a page, but you might also need this data in client as well. So, why refetch in client again?

**You have the ability to pass this data to client with the initial html response.**

```ts
export const ssrRoutes = [
  {
    id: "Product" as const,
    path: "/products/:id",
    handler: async (ctx, { id }) => {
      // ctx -> The same tRPC context will be passed here.
      const product = await getProductById(id);
      if (!product) {
        return {
          meta: {
            title: "Not Found",
            description: "Product not found.",
          },
        };
      }

      return {
        meta: {
          // Let's assume it has title and description.
          title: product.title,
          description: product.description,
        },
        initialData: product,
      };
    },
  },
];
```

> **Note:** The handlers might get long, keeping them in a separate file will increase readability and maintainability in long run.

### Using Kyrix Router's initial data in client

```tsx
import { useLocation } from "react-router-dom";
import { trpc } from "@/lib/trpcClient";

const Product = () => {
  const { pathname } = useLocation(); // From React Router
  const { data: product } = trpc.kyrix.ssr.useQuery({ path: pathname });

  return (
    <div>
      <p>{product.title}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default Product;
```

As you can see no syntax change other than here you would need to pass the pathname.

It might look like we're doing a normal fetch request to our backend. But its not the case, the initial data will be added in react query cache before useQuery can run.

```tsx
const { pathname } = useLocation(); // From React Router
const { data: product } = trpc.kyrix.ssr.useQuery(
  { path: pathname },
  {
    enabled: false, // React Query won't fetch at all
  }
);
```
**As you can see the data is still there without any loading.**

> **Note:** Use this pattern for smaller fetches which doesn't take long. As the initial render will be blocked until data is available on the server.

### Advantages

- Fast initial Load
- React Query takes care of refetching incrementaly in client if needed.

## Tips

- Keep everything which will be used in server inside the `server` folder.
- For sharing types or validations put them inside a `shared` folder.