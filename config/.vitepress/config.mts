import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kyrix Docs",
  description:
    "Kyrix.Js – A Full-Stack Solution for Modern Web Applications with Major SEO Benefits",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Introduction",
        base: "/intro",
        collapsed: true,
        items: [
          {
            text: "What is KyrixJs?",
            link: "/what-is-kyrix",
          },
          {
            text: "How it works?",
            link: "/how-it-works",
          },
          {
            text: "Getting Started",
            link: "/getting-started",
          },
        ],
      },
      {
        text: "Routing",
        base: "/routing",
        collapsed: true,
        items: [
          // React router
          {
            text: "React Router",
            collapsed: true,
            items: [
              {
                text: "Defining Routes",
                link: "/react-router/defining-routes",
              },
              {
                text: "Nesting Routes",
                link: "/react-router/nesting-routes",
              },
              {
                text: "Dynamic Routes",
                link: "/react-router/dynamic-routes",
              },
              {
                text: "Handling Errors",
                link: "/react-router/handling-errors",
              },
              {
                text: "Components",
                base: "/routing/react-router/components",
                collapsed: true,
                items: [
                  {
                    text: "Link",
                    link: "/link",
                  },
                  {
                    text: "NavLink",
                    link: "/navlink",
                  },
                  {
                    text: "Outlet",
                    link: "/outlet",
                  },
                ],
              },
              {
                text: "Hooks",
                base: "/routing/react-router/hooks",
                collapsed: true,
                items: [
                  {
                    text: "useNavigate",
                    link: "/use-navigate",
                  },
                  {
                    text: "useParams",
                    link: "/use-params",
                  },
                  {
                    text: "useSearchParams",
                    link: "/use-search-params",
                  },
                  {
                    text: "useLocation",
                    link: "/use-location",
                  },
                ],
              },
            ],
          },
          // Kyrix Router
          {
            text: "Kyrix Router",
            base: "/routing/kyrix-router",
            link: "/",
            collapsed: true,
            items: [
              {
                text: "Defining Routes",
                link: "/defining-routes",
              },
              {
                text: "Dynamic Routes",
                link: "/dynamic-routes",
              },
              {
                text: "Handling Errors",
                link: "/handling-errors",
              },
              {
                text: "Hooks",
                base: "/routing/kyrix-router/hooks",
                items: [
                  {
                    text: "useKyrixContext",
                    link: "/use-kyrix-context",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "Data Fetching",
        base: "/data-fetching",
        collapsed: true,
        items: [
          {
            text: "With tRPC & React Query",
            base: "/data-fetching/with-trpc-and-react-query",
            link: "/",
            items: [
              {
                text: "Fallback States",
                link: "/fallback-states",
              },
            ],
          },
          {
            text: "With Kyrix Router",
            link: "/with-kyrix-router",
          },
          {
            text: "Mutations",
            base: "/data-fetching/mutations",
            link: "/",
            collapsed: true,
            items: [
              {
                text: "Handling Errors",
                link: "/handling-errors",
              },
              {
                text: "Cache Management",
                link: "/cache-management",
              },
            ],
          },
        ],
      },
      {
        text: "Search Engine Optimization",
      },
      {
        text: "Deploying",
      },
      {
        text: "CLI",
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/evolvedev-inc/Kyrix" },
    ],

    search: {
      provider: "local",
      options: {
        disableQueryPersistence: true,
      },
    },
  },

  assetsDir: "./public",
  cleanUrls: true,
  shouldPreload: () => true,
});
