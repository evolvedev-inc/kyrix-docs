import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kyrix",
  description:
    "Kyrix – A Full-Stack Solution for Modern Web Applications with Major SEO Benefits",
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
                collapsed: true,
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
      // Data fetching
      {
        text: "Data Fetching",
        base: "/data-fetching",
        collapsed: true,
        items: [
          {
            text: "With tRPC & React Query",
            base: "/data-fetching/with-trpc-and-react-query",
            collapsed: true,
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
            base: "/data-fetching/with-kyrix-router",
            collapsed: true,
            link: "/",
            items: [
              {
                text: "Fallback States",
                link: "/fallback-states",
              },
            ],
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
      // Middlewares
      {
        text: "Middlewares",
        base: "/middlewares",
        collapsed: true,
        items: [
          {
            text: "With tRPC",
            link: "/with-trpc",
          },
          {
            text: "Global",
            link: "/global",
          },
        ],
      },
      // SEO
      {
        text: "SEO",
        base: "/seo",
        collapsed: true,
        items: [
          {
            text: "Metadata",
            link: "/metadata",
          },
          {
            text: "robots.txt",
            link: "/robots",
          },
          {
            text: "Sitemap",
            link: "/sitemap",
          },
          {
            text: "Manifest",
            link: "/manifest",
          },
        ],
      },
      // Deploing
      {
        text: "Deploying",
        base: "/deploying",
        link: "/",
        collapsed: true,
        items: [
          {
            text: "Environment Variables",
            link: "/environment-variables",
          },
        ],
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

  sitemap: {
    hostname: "https://kyrix.evolveasdev.com",
  },

  assetsDir: "./public",
  cleanUrls: true,
  shouldPreload: () => true,
});
