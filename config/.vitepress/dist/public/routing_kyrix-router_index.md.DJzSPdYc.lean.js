import{_ as t,c as a,a3 as i,o as r}from"./chunks/framework.DqGm12tE.js";const u=JSON.parse('{"title":"What is Kyrix Router?","description":"","frontmatter":{},"headers":[],"relativePath":"routing/kyrix-router/index.md","filePath":"routing/kyrix-router/index.md"}'),s={name:"routing/kyrix-router/index.md"};function n(o,e,d,l,h,c){return r(),a("div",null,e[0]||(e[0]=[i('<h1 id="what-is-kyrix-router" tabindex="-1">What is Kyrix Router? <a class="header-anchor" href="#what-is-kyrix-router" aria-label="Permalink to &quot;What is Kyrix Router?&quot;">​</a></h1><p>Kyrix Router is a server-side router that you use to add metadata for a page and optionally send initial data from the server to the client. This data is embedded directly into the HTML, so when the client renders the page, both the metadata and initial data are immediately available, eliminating the need for extra data-fetching requests on the client side.</p><p>In this setup, Kyrix Router acts as a <strong>tRPC router</strong> that gets called on every page request in the server. It allows you to inject page-specific metadata (like titles, descriptions, etc.) as well as the initial data necessary to render the page. This improves performance by reducing the number of client-side data fetching calls, similar to what is common in SSR (Server-Side Rendering) frameworks.</p><p>When a page is requested:</p><ol><li><strong>Kyrix Router</strong> processes the request.</li><li>Metadata and initial data are fetched on the server.</li><li>Both are injected into the HTML template.</li><li>When the page loads on the client, it can use this preloaded data and metadata without making additional requests.</li><li>This data gets cached via <strong>React Query</strong> in client.</li></ol><p>This approach enhances the <strong>initial page load time</strong> and ensures that SEO-critical metadata is already part of the HTML response, making it especially useful for applications where fast and accurate data and <strong>SEO</strong> is crucial.</p>',6)]))}const g=t(s,[["render",n]]);export{u as __pageData,g as default};
