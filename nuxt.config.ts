// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  modules: ["nuxt-shiki", "@nuxtjs/i18n", "@nuxt/icon"],
  builder: 'vite',
  vite: {
    build: {
      chunkSizeWarningLimit: 1000
    }
  },
  shiki: {
    bundledLangs: ["python"],
    defaultTheme: "github-dark-dimmed",
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    vueI18n: './i18n.config.ts'
  }
})