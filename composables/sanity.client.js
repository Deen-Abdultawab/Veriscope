// composables/sanity.client.js
import { createClient } from '@sanity/client'

export const useSanityClient = () => {
  const config = useRuntimeConfig()

  return createClient({
    projectId: config.public.SANITY_PROJECT_ID,
    dataset: config.public.SANITY_DATASET,
    apiVersion: config.public.SANITY_API_VERSION || '2023-05-03',
    useCdn: true,
  })
}
