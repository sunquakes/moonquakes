import {defineConfig} from "vuepress/config";

export default defineConfig({
  title: "moonquakes",
  description: "A rpc framework, for lightweight cross-language services development.",
  configureWebpack: {
    output: {
      publicPath: "./"
    }
  },
  /**
   * Type is `DefaultThemeConfig`
   */
  themeConfig: {
    repo: "sunquakes/moonquakes",
    editLinks: true,
    docsDir: "packages/docs/docs",
    nav: [
      {text: 'Guide', link: '/guide/golang'}
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