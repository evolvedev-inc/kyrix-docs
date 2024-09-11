# `useKyrixContext` hook

The useKyrixContext hook is a custom React hook designed to work with the Kyrix Router. This hook provides a way for your components to access and interact with the context managed by the KyrixContextProvider.

## Options

```tsx
type KyrixContext = {
  // As we have defined valid defaults for each property.
  // This will make sure that the user has wrapped their app
  // with kyrix context provider.
  __initialised: boolean; // [!code focus]

  updatePageData: (href: string, data: SSRData) => void;
  router: (href: string, navigate: () => void) => void;
  shouldBlock: (nextPathname: string) => boolean; // [!code focus]
  isNavigating: boolean; // [!code focus]
  routeError: { route?: string; error: unknown };
};
```

> **Note**: Not all properties will make sense and work as intented, they'll serve a purpose for future usecases and documented later.

## Use cases

### `isNavigating` boolean

The isNavigating property indicates whether a navigation operation is currently taking place. This boolean value is useful for displaying loading indicators or preventing certain actions while navigation is in progress.

> **Note**: Remember the navigation will be blocked until the page metadata and initial Data are fetched from server.

```tsx
export const App = () => {
  const { isNavigating } = useKyrixContext();

  return (
    <main>
      {isNavigating && "loading..."} {/* Or a better loading status bar */}
      <Outlet />
    </main>
  );
};
```

### `shouldBlock` function

The shouldBlock function takes the next path name as an argument and returns a boolean indicating whether navigation to that path should be blocked. This function is essential when used with useBlocker from React Router or any other, which allows you to intercept navigation attempts and decide whether to proceed based on the current state and data availability.

```tsx
export const App = () => {
  const { isNavigating, shouldBlock } = useKyrixContext();

  // This is needed to block the navigation before fetching the metadata
  // from server during client-side navigation. The navigation will be
  // resumed automatically as soon as we have the route data available.
  useBlocker(({ nextLocation }) => shouldBlock(nextLocation.pathname));

  return (
    <main>
      {isNavigating && 'loading...'}
      <Outlet />
    </main>
  );
};
```
**This code is mainly responsible for blocking any navigations until we have our metadata and initial data for that page.**

> **Note:** In case of any errors from **Kyrix Router**, the navigation will still be resumed giving the developer full control for error handling. 

This is a part of our architecture and will be pre-configured for you.

### `__initialised` boolean

This will return true if your app is wrapped with `<KyrixProvider>`, if not we'll throw an error.