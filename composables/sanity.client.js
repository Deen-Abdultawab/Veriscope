// composables/sanity.client.js
import { createClient } from '@sanity/client'

export const useSanityClient = () => {
  const config = useRuntimeConfig()

  return createClient({
    projectId: config.public.sanityProjectId || 'w7s43vlg',
    dataset: config.public.sanityDataset || 'production',
    apiVersion: config.public.sanityApiVersion || '2023-05-03',
    useCdn: true,
  })
}
