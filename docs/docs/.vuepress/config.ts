import {defineConfig} from "vuepress/config";

export default defineConfig({
  configureWebpack: {
    output: {
      publicPath: "./"
    }
  },
  /**
   * Type is `DefaultThemeConfig`
   */
  themeConfig: {
    repo: "vuejs/vuepress",
    editLinks: true,
    docsDir: "packages/docs/docs"
  }
});