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
    license: 'DA565E2D-B509-48E6-AD36-BA7E3E33024F'
  }
})
