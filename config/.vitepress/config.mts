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
          {
            text: "Client-Side Routing",
            collapsed: true,
            items: [
              {
                text: "React Router",
                collapsed: true,
                items: [
                  {
                    text: "Defining Routes",
                    link: "/client/react-router/defining-routes",
                  },
                  {
                    text: "Nesting Routes",
                    link: "/client/react-router/nesting-routes",
                  },
                  {
                    text: "Dynamic Routes",
                    link: "/client/react-router/dynamic-routes",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/evolvedev-inc/Kyrix" },
    ],
  },
});
