# Metadata

Meta tags provide essential information about your web pages, improving search engine visibility and social media presentation.

In **Kyrix** even though you're working in a client-side react app, still metadata will be added in the initial HTML response.

## Static metadata

You can add meta tags for each page in `src/server/SSR.ts`

```ts
export const ssrRoutes = [
  {
    id: "Home" as const,
    path: "/",
    handler: () => ({
      meta: {
        meta: {
          title: "Home",
          description: "Home page desc",
          // ...
        },
      },
    }),
  },
];
```

The `handler` function in ssrRoutes expects you to return a meta object with all the metadata needed.

**Check [metadata options](/routing/kyrix-router/defining-routes#metadata-options) to see all available meta tags options.**

## Dynamic metadata

You can even fetch dynamic data from server and use it to set your meta tags.

```ts
export const ssrRoutes = [
  {
    id: "Product" as const,
    path: "/products/:id",
    handler: async (ctx, params) => {
      // ctx -> same one as tRPC
      const product = await getProduct(params.id); // Do your logic
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
          title: product.title,
          description: product.description,

          // OpenGraph tags
          ogTitle: product.title,
          ogDescription: product.description,
          ogImage: product.image,
        },
      };
    },
  },
];
```

## JSON-LD

[JSON-LD](https://json-ld.org) is a format for structured data that can be used by search engines to understand your content better.

```ts
export const ssrRoutes = [
  {
    id: "Product" as const,
    path: "/products/:id",
    handler: async (ctx, params) => {
      const product = await getProduct(params.id); // Do your logic

      return {
        meta: {
          // JSON-LD Tag
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            image: product.image,
            description: product.description,
          },
        },
      };
    },
  },
];
```
