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

  runtimeConfig: {
    public: {
      sanityProjectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID,
      sanityDataset: process.env.NUXT_PUBLIC_SANITY_DATASET,
      sanityApiVersion: process.env.NUXT_PUBLIC_SANITY_API_VERSION,
    }
  },

  css: ['~/assets/css/tailwind.css']
})