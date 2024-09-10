# What is Kyrix Router?

Kyrix Router is a server-side router that you use to add metadata for a page and optionally send initial data from the server to the client. This data is embedded directly into the HTML, so when the client renders the page, both the metadata and initial data are immediately available, eliminating the need for extra data-fetching requests on the client side.

In this setup, Kyrix Router acts as a **tRPC router** that gets called on every page request in the server. It allows you to inject page-specific metadata (like titles, descriptions, etc.) as well as the initial data necessary to render the page. This improves performance by reducing the number of client-side data fetching calls, similar to what is common in SSR (Server-Side Rendering) frameworks.

When a page is requested:
1. **Kyrix Router** processes the request.
2. Metadata and initial data are fetched on the server.
3. Both are injected into the HTML template.
4. When the page loads on the client, it can use this preloaded data and metadata without making additional requests.
5. This data gets cached via **React Query** in client.

This approach enhances the **initial page load time** and ensures that SEO-critical metadata is already part of the HTML response, making it especially useful for applications where fast and accurate data and **SEO** is crucial.

