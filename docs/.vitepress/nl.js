import { defineConfig } from "vitepress";

export const nl = defineConfig({
  lang: "nl-NL",

  themeConfig: {
    nav: [
      {
        text: "Monitor",
        link: "/monitor/2026/pages/1-introduction",
        activeMatch: "/monitor/*",
      },
    ],
    sidebar: {
      "/monitor/2026/": {
        base: "/monitor/2026/pages",
        items: sidebarMonitor2026(),
      },
    },

    footer: {
      message: "Uitgegeven onder de aGPL Licentie.",
      copyright: "Copyright © 2009-heden GRIP",
    },
  },
});

function sidebarMonitor2026() {
  return [
    { link: `/1-introduction`, text: "Over Monitor" },
    { link: `/2-subjects`, text: "Onderwerpen" },
    { link: `/3-accountability`, text: "Dataverantwoording" },
  ];
}
