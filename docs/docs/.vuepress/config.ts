import {defineConfig} from "vuepress/config";

export default defineConfig({
  base: "/moonquakes/",
  title: "moonquakes",
  description: "A rpc framework, for lightweight cross-language services development.",
  /**
   * Type is `DefaultThemeConfig`
   */
  themeConfig: {
    repo: "sunquakes/moonquakes",
    editLinks: true,
    locales: {
      "/": {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {text: 'Guide', link: '/guide/'}
        ],
        sidebar: {
          '/guide/': [
            '',
            'golang',
            'java',
            'php'
          ]
        }
      },
      "/zh/": {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {text: '指南', link: '/zh/guide/'}
        ],
        sidebar: {
          '/zh/guide/': [
            '',
            'golang',
            'java',
            'php'
          ]
        }
      },
    }
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use "/" as its path.
    "/": {
      // @ts-ignore
      lang: "English", // this will be set as the lang attribute on <html>
      title: "moonquakes",
      description: "A rpc framework, for lightweight cross-language services development."
    },
    "/zh/": {
      // @ts-ignore
      lang: "简体中文",
      title: "moonquakes",
      description: "一个轻量级跨语言的rpc开发框架"
    }
  }
});