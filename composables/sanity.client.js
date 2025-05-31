// composables/sanity.client.js
import { createClient } from '@sanity/client'

export const useSanityClient = () => {
  const config = useRuntimeConfig()

  return createClient({
    projectId: config.public.sanityProjectId,
    dataset: config.public.sanityDataset,
    apiVersion: config.public.sanityApiVersion,
    useCdn: true,
  })
}
