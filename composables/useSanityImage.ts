import { useSanityClient } from '~/composables/sanity.client'
import imageUrlBuilder from '@sanity/image-url'

export const useSanityImage = () => {
  const sanityClient = useSanityClient()
  const builder = imageUrlBuilder(sanityClient)
  
  const urlFor = (source: any) => builder.image(source)
  
  return { urlFor }
}