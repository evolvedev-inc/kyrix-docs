# Robots.txt

This file directs search engine crawlers on which parts of your site should or should not be indexed, controlling site visibility in search results.

## Create a `robots.txt` file

You can keep it in anywhere inside **server** directory.

```txt
User-Agent: *
Allow: /
Disallow: /private/

Sitemap: https://kyrix.evolveasdev.com/sitemap.xml
```

## Usage

```ts
import { serveStatic } from "@kyrix/server";

const seoMiddleware = (req, res, next) => {
  if (req.url === "/robots.txt") {
    // Serve static takes an absolute path.
    return serveStatic('src/server/robots.txt') // Your file path
  }
  // ...

  return next()
};
```

```ts
import { type Middleware } from "@kyrix/server";

export const middlewareFactory: Middleware[] = [seoMiddleware];
```

