import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'w7s43vlg',
  dataset: 'production',
  useCdn: true, // false if you want to ensure fresh data
  apiVersion: '2023-05-03',
   headers: {
    'X-Custom-Header': 'custom-value'
  },
})

async function fetchCaseStudies() {
    console.log('fetching....')
  try {
    const query = `*[_type == "caseStudy"]{
      _id,
      title,
      slug,
      client,
      mainImage,
      vision,
      challenge,
      solution{
        description,
        solutionItems[]{
          _key,
          itemTitle,
          itemDescription
        }
      },
      results,
      clientTestimonial{
        quote,
        author
      },
      publishedAt
    }`
     const data = await client.fetch(query)
     console.log(data)
  } catch (err) {
    console.error('Error fetching case studies:', err)
  }
}
