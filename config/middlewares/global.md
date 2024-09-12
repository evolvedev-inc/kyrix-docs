# Global Middleware

Global middlewares in Kyrix run on the server before your tRPC API handlers. They allow you to intercept requests, making them ideal for tasks like redirecting users, handling authentication, or adding global logic at the server level.

## Creating a middleware

The `middleware.ts` file can be found in `src/server`.

```ts
import { type Middleware } from "@kyrix/server";

// Chain middlewares and needed, they'll be called in order of their index.
export const middlewareFactory: Middleware[] = [];
```

## Example

```ts
const testMiddleware: Middleware = (req, res, next) => {
  console.log("Middleware ran!");
  return next();
};
```

## Usage

```ts
import { type Middleware } from "@kyrix/server";

export const middlewareFactory: Middleware[] = [testMiddleware];
```

## Page Redirect

This will show how to redirect or block a page or route for eg. authentication.

```ts
import { type Middleware } from "@kyrix/server";

const redirectMiddleware: Middleware = (req, res, next) => {
  if (req.url === "/protected") {
    return res
      .writeHead(302, {
        Location: "/",
      })
      .end();
  }
  return next();
};

export const middlewareFactory: Middleware[] = [redirectMiddleware];
```

This is enough to block any initial requests for a route but during client-side navigation it won't work as that'll be an API request to **Kyrix Router**.

The extra step is:

```ts
import { TRPCError } from "@trpc/server";

export const ssrRoutes = [
  {
    id: "Home" as const,
    path: "/",
    handler: async () => {
      const isLoggedIn = true; // Do your logic
      if (!isLoggedIn) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }
      // ...
    },
  },
];
```

That's it.
