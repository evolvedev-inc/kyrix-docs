# Link Component

The `Link` component in React Router wraps the standard `<a>` tag but provides client-side navigation without a full page refresh. Instead of requesting new assets or reloading the entire page, it updates the URL and renders the new page's content directly on the client side.

```tsx
import { Link } from "react-router-dom";

const SomePage = () => {
  return <Link to="/">Go to Home</Link>;
};
```
> **Note:** For more options check out <a href='https://reactrouter.com/en/main/components/link' target='__blank'>React Router documentation</a>.

## Behaviour with Kyrix

In Kyrix, client-side navigation can be problematic as the client doesn't make a new request during navigation. This means we won't be able to update the metadata for the next page.

This issue is typical in most SSR applications. To fix it, we use the `useBlocker` hook from React Router.

### Here's what happens

When navigating—either by clicking a link or using the browser's navigation buttons—we first check if the page data is cached in **React Query**:

- If the page data is cached, navigation happens instantly.
- If the page data isn't cached, a client-side request is made to the **Kyrix Router** to fetch the metadata and initial data for the next page.

The returned data is cached, and navigation proceeds. **The navigation is blocked until the data fetching is done.**

### Advantages:

- **Fast initial page load.**
- **Correct metadata updates even with client-side routing.**

## Questions

- [How to show a loading state during navigation until data fetching is finished?](#)
- [What if my router doesn't have the `useBlocker` hook?](#)