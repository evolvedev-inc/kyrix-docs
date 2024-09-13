# Defining Routes

When you create a Kyrix project for the first time, there will be a `server` folder inside the `src` directory. Within this folder, locate the `SSR.ts` file where you'll define your routes.

## Creating Routes

```tsx
export const ssrRoutes = [
  {
    id: "Home" as const,
    path: "/",
    handler: () => ({
      meta: {
        title: "Home",
        description: "Home Page",
        author: "Paul",
        // other metadata
      },
    }),
  },
] satisfies SSRRoute<TRPCContext>[];
```

In this example, the id field is crucial for achieving full type safety in the client.

**Don't forget to add `as const` or else typesafety will be lost during usage**

In the meta object, both title and description field are required.

The handler function must return a meta object, which contains all the metadata tags (like title, description, author, etc.) that need to be injected into the HTML.

## Metadata Options

```ts
type Metadata = {
  // Standard metadata
  title: string;
  description: string;
  keywords?: string;
  author?: string;

  // Open Graph metadata (for social media)
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string; // e.g., 'website', 'article'
  ogSiteName?: string;

  // Twitter metadata
  twitterCard?: string; // e.g., 'summary', 'summary_large_image'
  twitterSite?: string; // @username for the site
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string; // Twitter image URL

  // Facebook-specific metadata
  fbAppId?: string; // Facebook App ID

  // Link tags
  canonicalUrl?: string;
  iconUrl?: string; // favicon link
  appleTouchIconUrl?: string; // for iOS home screen

  // Structured data (JSON-LD)
  jsonLd?: Record<string, any>; // JSON-LD structured data
};
```

## Adding Kyrix Provider

Add the **Kyrix Provider** in the entry point of your React app, make sure it's under the client-side router as it uses some router specific hooks.

```tsx
import { useLocation, useNavigate } from 'react-router-dom';
import { KyrixContextProvider, useKyrixContext } from '@kyrix/react/KyrixProvider';

export default function Root() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <KyrixContextProvider navigate={navigate} pathname={location.pathname}>
      <App />
    </KyrixContextProvider>
  );
}
```

Don't worry everything will be setup for you beforehand 👍.

**If you're using any other router, use it's navigate function as `<KyrixContextProvider>` accepts a generic navigate function ie. `(href: string) => void`.**

## Adding More Routes

```tsx
export const ssrRoutes = [
  {
    id: "Home" as const,
    path: "/",
    handler: () => ({
      meta: {
        title: "Home",
        description: "Home Page",
        author: "Paul",
        // other metadata
      },
    }),
  },
  {
    id: "Dashboard" as const,
    path: "/dashboard",
    handler: () => ({
      meta: {
        title: "Dashboard",
        description: "Dashboard Page",
        // ...
      },
    }),
  },
] satisfies SSRRoute<TRPCContext>[];
```

To add more routes, simply extend the array with additional route objects.

You can do so much more than this here but we'll talk about those in other sections.