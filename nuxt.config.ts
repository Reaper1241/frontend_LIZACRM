// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: 'http://localhost:8081/api/v1'
    }
  }
})