<template>
  <section class="w-full pt-[2rem] md:pt-[4.44rem] pb-[5rem] md:pb-[10.81rem] bg-[#FFFFFF]">
    <div class="w-[90%] md:w-[80%] lg:w-[69.94%] mx-auto max-w-[1440px]">
      <h2 class="header-texts text-[#072042] mb-[1.5rem] md:mb-[2.5rem] text-[1.5rem] sm:text-[2rem] md:text-[2.5rem]">All Articles</h2>
      
      <!-- Loading State -->
      <template v-if="pending">
        <div class="mb-[2.5rem] md:mb-[4.5rem]">
          <UiSkeletonLoader/>
        </div>
      </template>

      <!-- Error State -->
      <template v-else-if="error">
        <div class="text-red-500 text-center py-[2rem] md:py-8">
         <p class="text-[0.875rem] md:text-[1rem]">
           Error fetching posts: Check Internet connection
         </p>
          <button @click="refresh" class="btn mt-4 text-[0.875rem] md:text-[1rem]">Retry</button>
        </div>
      </template>

      <!-- Empty State -->
      <template v-else-if="!data?.length">
        <h3 class="header-texts text-center py-[2rem] md:py-8 text-[1rem] sm:text-[1.25rem]">
          There are no Blog Posts at the moment, check back later...
        </h3>
      </template>

      <!-- Success State -->
      <template v-else>
        <div class="flex flex-col gap-[1rem] md:gap-[1.5rem] mb-[2.5rem] md:mb-[4.5rem]">
          <UiCardComponent 
            v-for="blog in data" 
            :key="blog._id"
            route="Blogs"
            :item="blog"
          />
        </div>

        <!-- Pagination -->
        <div v-if="showLoadMore" class="flex justify-center">
          <button 
            class="btn w-fit mx-auto text-[0.875rem] md:text-[1rem] py-[0.5rem] md:py-[0.75rem] px-[1.5rem]"
            @click="loadMore"
            :disabled="isLoadingMore"
          >
            <span v-if="!isLoadingMore">Load More</span>
            <span v-else>Loading...</span>
          </button>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
// Composables
const { urlFor } = useSanityImage()
const sanityClient = useSanityClient()
const router = useRouter()

// Configuration
const pageSize = 5
const currentPage = ref(1)
const totalPosts = ref(0)

// Data fetching
const { 
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
},
 {
    // Key changes to fix routing delay:
    server: false, // Fetch only on client-side
    lazy: true,    // Don't block navigation
    immediate: false // Don't fetch on component mount
  }
)

// Computed
const showLoadMore = computed(() => {
  return data.value?.length && (data.value.length < totalPosts.value)
})

const isLoadingMore = computed(() => {
  return pending.value && currentPage.value > 1
})

// Methods
const truncateText = (text, maxLength) => {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

const loadMore = async () => {
  currentPage.value++
  await refresh()
  
  // Smooth scroll to new items
  nextTick(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    })
  })
}

onMounted(async ()=>{
  await refresh()
})
</script>

<style scoped>
.btn {
  transition: all 0.3s ease;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}

.header-texts {
  line-height: 1.3;
}

.small-texts {
  line-height: 1.5;
}
</style>