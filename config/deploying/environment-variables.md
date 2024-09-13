# Environment Variables

## Server env setup

Put all of your server environment variables in `.env` file

```
SERVER_PORT=3000 # Required
```

### Env validation

You can use a validation library to validate environment variables to reduce error at runtime.

```ts
// With Zod
import { configDotenv } from 'dotenv';
import { z } from 'zod';

configDotenv({
  path: './.env', // Your env path. Can also be .env.production, .env.server, etc.
});

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  SERVER_PORT: z.coerce.number().nonnegative(),
});

export const serverEnv = envSchema.parse(process.env);
```

### Usage

```ts
// Import serverEnv and use it as a replacement for process.env
console.log(serverEnv.NODE_ENV)
```

## Client env setup

Put all of your client environment variables in `.env` file

```
# Server
SERVER_PORT=3000

# Client
VITE_API_URL=https://some-url.com
```

You need to prefix your varibales with `VITE` to expose them in client.

> **NOTE:** Using environment variables in client will mean they are not safe, so don't put any sensitive data.