# How it Works

Kyrix operates like a typical client-side React application but includes additional server-side handling to enhance SEO without full SSR.

![Internal Architecture](/architecture-transparent.png)

Kyrix employs a pseudo-SSR (Server-Side Rendering) approach by injecting metadata and initial data into the HTML response. Here’s how it works:

## 1. Client Request

The client (browser) requests resources such as HTML, JavaScript, or static assets (images, CSS) from the server.

- **Client → Server:** The request is sent to the server for the needed resources.

## 2. Server Processing

The server processes the request as follows:

- Serve a static asset from the Build Folder.
- Fetch dynamic data through the tRPC API.
- Use a fallback mechanism if the asset isn't found.

### A. Static Asset Requests

- **Server → Build Folder:** The server checks if the requested static asset (HTML, JS, or images) exists in the Build Folder (generated by Vite). If found, it sends the asset to the client.

### B. Fallback: Sending `index.html` with Metadata and Initial Data

- **No Static Asset Found:** If the asset isn’t available, the server sends the `index.html` file, allowing client-side routing to handle non-static routes.

- **Server → KyrixRouter (Metadata Injector):** The server forwards the request URL to KyrixRouter to fetch metadata and initial data.

- **KyrixRouter → Server:** KyrixRouter injects metadata (SEO tags) and initial data (in JSON format) into the `index.html`.

- **Server → Client:** The server sends the `index.html` with injected metadata and initial data. This setup provides immediate SEO benefits and ensures that initial data is available as JavaScript loads.

### C. tRPC API Requests

For dynamic data:

- **Server → tRPC API:** The server communicates with the tRPC API, ensuring type-safe data handling.

- **tRPC API → Server:** The API returns the data, which the server can either send to the client or use internally.

## 3. Client-Side Handling

The client receives the HTML file with metadata and initial data. It behaves like a standard CSR (Client-Side Rendering) React app:

- The HTML includes metadata for SEO, and initial data is embedded in a script tag. This setup provides faster initial content rendering.

- Full page content and interactivity depend on JavaScript. Once JavaScript loads, React uses the initial data to complete the rendering process.

# How Kyrix Differs from Traditional SSR Frameworks?

**SSR vs. CSR vs. Hydration:**

- **Server-Side Rendering (SSR):** The server sends complete HTML content, including dynamic data. React hydrates this HTML to add interactivity, ensuring consistency between server and client content.

- **Client-Side Rendering (CSR):** The server sends a basic HTML shell. JavaScript generates and updates the content dynamically on the client. The initial HTML lacks dynamic content, which is added after JavaScript loads.

- **Hydration:** React attaches interactivity to server-rendered HTML to align it with client-side updates.

**Kyrix's Approach:**

Kyrix combines CSR principles with pseudo-SSR features:

1. **Metadata and Initial Data Injection:**

   - **Server Processing:** Kyrix sends HTML with embedded metadata and initial data (in JSON) within a `<script>` tag. Metadata is immediately available for SEO, while full content requires JavaScript.

   - **Client Handling:** The client receives HTML with metadata and initial data. Metadata is visible right away, but full content is rendered by React using the initial data once JavaScript loads.

2. **Differences:**

   - **Compared to Traditional SSR:** Kyrix does not pre-render the entire page. Instead, it provides metadata and initial data, reducing the need for full HTML hydration while relying on JavaScript for interactivity.

   - **Compared to CSR:** Unlike CSR’s basic HTML shell, Kyrix includes essential metadata and initial data in the HTML, ensuring faster initial content display while still using JavaScript for full rendering.

**Advantages:**

- **Enhanced SEO Capabilities:** Kyrix's approach improves SEO beyond just metadata injection. The setup is designed to optimize SEO, ensuring that crawlers can access necessary information without JavaScript. For more details, consult the documentation.

- **Immediate Content Display:** Unlike traditional CSR, where content may not appear until JavaScript is executed, Kyrix ensures that once JavaScript runs, the full content is already available. This reduces the need for additional fetch requests and provides a faster, more seamless user experience.

- **Efficient JavaScript Execution:** Google Bot and other advanced crawlers can execute JavaScript, so once the JavaScript is loaded, it completes the rendering process. This eliminates the delay of fetching additional data after JavaScript loads, enhancing overall performance.

**Disadvantages:**

- **Dependence on JavaScript:** Full content relies on JavaScript. If JavaScript fails, the page may not work as intended.

**In Summary:**

Kyrix offers a balance between CSR and SSR by injecting metadata and initial data into the HTML. This approach is ideal for dynamic apps that struggle with SEO in CSR, providing the benefits of a React full-stack app while adhering to best SEO practices.
