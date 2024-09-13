# Manifest

The web app manifest defines how your web app appears and behaves when installed on a user’s device, enhancing user engagement and branding.

## Create a `manifest.json`

You need to create it in `public` directory.

```json
{
  "name": "Kyrix Application",
  "short_name": "Kyrix",
  "description": "A Full-Stack Solution for Modern Web Applications with Major SEO Benefits",
  "start_url": "/"
  // ...
}
```

## Modify `index.html`

The index.html will be present in root of your project.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <!-- Add manifest.json here... -->
    <link rel="manifest" href="/manifest.json" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- app-meta -->
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
    <!-- app-context -->
  </body>
</html>
```

That's it.

## From middleware

You can also generate this manifest.json file directly from middleware like robots.txt.

```ts
const seoMiddleware = (req, res, next) => {
  if (req.url === "/manifest.json") {
    res.setHeader("Content-Type", "application/json");
    return res.end(
      JSON.stringify({
        name: "Kyrix Application",
        short_name: "Kyrix",
        description:
          "A Full-Stack Solution for Modern Web Applications with Major SEO Benefits",
        start_url: "/",
        // ...
      })
    ); // Or use can serve manifest.json file using serveStatic.
  }
  // ...

  return next();
};
```

### Usage 

```ts
import { type Middleware } from "@kyrix/server";

export const middlewareFactory: Middleware[] = [seoMiddleware];
```
