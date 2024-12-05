// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: [
    '@/assets/css/tailwind.css',
  ],
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
  ],
  pinia: {
    storesDirs: ['./store/**'],
  },
  uiPro: {
    // use env vars
    license: process.env.UI_PRO_LICENSE,
  }
})
