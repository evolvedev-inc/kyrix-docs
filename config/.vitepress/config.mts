import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kyrix Docs",
  description:
    "Kyrix.Js – A Full-Stack Solution for Modern Web Applications with Major SEO Benefits",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Introduction",
        base: "/intro",
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
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/evolvedev-inc/Kyrix" },
    ],
  },
});
