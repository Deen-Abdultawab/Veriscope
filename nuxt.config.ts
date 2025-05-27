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

  sanity: {
    projectId: 'w7s43vlg',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-03',
  },

  app: {
    head: {
      titleTemplate: '%s - Veriscope',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    }
  },

  css: ['~/assets/css/tailwind.css']
})