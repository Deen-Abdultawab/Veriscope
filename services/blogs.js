const sanityClient = useSanityClient()

export const { 
  data, 
  pending, 
  error, 
  refresh 
} = await useAsyncData('blogPosts', async () => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  
  const query = groq`{
    "posts": *[_type == "blogPost"] | order(publishedAt desc) [${start}...${end}] {
      _id,
      title,
      slug,
      mainImage,
      introduction,
      publishedAt
    },
    "total": count(*[_type == "blogPost"])
  }`
  
  const result = await sanityClient.fetch(query)
  totalPosts.value = result.total
  return result.posts
})