# tRPC Middlewares

tRPC middlewares are functions that can be used to intercept and modify requests and responses in your API routes.

## Creating a middleware

A middleware in tRPC is defined as a function that takes `next` and `ctx` (context) parameters.

We recommened defining your middlewares for tRPC in `src/server/trpc/trpc.ts`.

```ts
import { initTRPC, TRPCError } from "@trpc/server";

// This will be created for you.
const t = initTRPC.context<TRPCContext>().create();

const privateProcedure = t.procedure.use(({ ctx, next }) => {
  const isLoggedIn = true; // Do your logic.
  if (!isLoggedIn) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({ ctx });
});
```

## Usage

```ts
const productsRouter = t.router({
  delete: privateProcedure.mutation(({ ctx }) => {
    // Will only reach here if isLoggedIn is true.
    // ...
  }),
});
```

## Passing Context

Context is passed to middlewares and can be modified and extended.

```ts
const privateProcedure = t.procedure.use(({ ctx, next }) => {
  const isLoggedIn = true; // Do your logic.
  if (!isLoggedIn) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({ ctx: { ...ctx, isLoggedIn } });
});

const productsRouter = t.router({
  delete: privateProcedure.mutation(({ ctx }) => {
    console.log(ctx.isLoggedIn); // isLoggedIn will be true.
    // ...
  }),
});
```

## Chaining Middlewares

You can chain multiple middlewares and they'll be called accroding to their order of chaining.

```ts
const privateProcedure = t.procedure.use(({ ctx, next }) => {
  const isLoggedIn = true; // Do your logic.
  if (!isLoggedIn) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({ ctx: { ...ctx, isLoggedIn } });
});

const adminProcedure = t.procedure.use(({ ctx, next }) => {
  const isAdmin = false; // Do your logic.
  if (!isAdmin) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({ ctx: { ...ctx, isAdmin } });
});

const combinedProcedure = t.procedure.use(privateProcedure).use(adminProcedure);
```
## Using Chained Middlewares

```ts
const productsRouter = t.router({
  delete: combinedProcedure.mutation(({ ctx }) => {
    const { isLoggedIn, isAdmin } = ctx // Both will be available.
    // ...
  }),
});
```
