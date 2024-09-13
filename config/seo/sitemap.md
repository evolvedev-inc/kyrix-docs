# Sitemap

XML sitemaps help search engines discover and index all pages of your site.

## Static sitemap

```ts
import { serveStatic } from "@kyrix/server";

const seoMiddleware = (req, res, next) => {
  if (req.url === "/sitemap.xml") {
    return serveStatic("/src/server/sitemap.xml"); // Your file path
  }
  // ...

  return next();
};
```

## Dynamic sitemap

You can fetch data directly inside server and build your sitemaps.

```ts
const siteUrl = "kyrix.evolveasdev.com";
export const makeUrl = (path: string, lastMod: Date) =>
  `<url><loc>${siteUrl}${path}</loc><lastmod>${lastMod.toISOString()}</lastmod></url>`;

const now = new Date();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                ${makeUrl("/", now)}
                ${makeUrl("/contact", now)}
            </urlset>
            `;

const seoMiddleware = (req, res, next) => {
  if (req.url === "/sitemap.xml") {
    res.setHeader("Content-Type", "application/xml");
    return res.end(sitemap);
  }
  // ...

  return next();
};
```

## Usage

```ts
import { type Middleware } from "@kyrix/server";

export const middlewareFactory: Middleware[] = [seoMiddleware];
```