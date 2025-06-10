// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/sanity',
    '@pinia/nuxt'
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    head: {
      titleTemplate: '%s - Veriscope',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    }
  },

  runtimeConfig: {
    RESEND_API_KEY: process.env.NUXT_RESEND_API_KEY,
    SANITY_PROJECT_ID: process.env.NUXT_SANITY_PROJECT_ID,
    SANITY_DATASET: process.env.NUXT_SANITY_DATASET,
    SANITY_API_VERSION: process.env.NUXT_SANITY_API_VERSION,

    public: {
      SANITY_PROJECT_ID: process.env.NUXT_SANITY_PROJECT_ID,
      SANITY_DATASET: process.env.NUXT_SANITY_DATASET,
      SANITY_API_VERSION: process.env.NUXT_SANITY_API_VERSION,
    }
  },

  css: ['~/assets/css/tailwind.css']
})