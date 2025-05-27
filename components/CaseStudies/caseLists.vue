<template>
  <section class="w-full pt-[2rem] md:pt-[4.44rem] pb-[4rem] md:pb-[10.81rem] bg-[#FFFFFF]">
    <div class="w-[90%] md:w-[80%] lg:w-[69.94%] mx-auto max-w-[1440px]">
      <h2 class="header-texts text-[#072042] mb-[1.5rem] md:mb-[2.5rem] text-[1.75rem] md:text-[2rem]">All Case Studies</h2>

      <!-- Loading State -->
      <template v-if="pending && currentPage === 1">
        <div class="mb-[2.5rem] md:mb-[4.5rem]">
          <div class="flex flex-col gap-[1rem] md:gap-[1.5rem]">
            <article 
              v-for="n in 3" 
              :key="n"
              class="flex gap-[1.5rem] md:gap-[2.88rem] pb-[1.5rem] md:pb-[2.5rem] border-b border-[#6087BE] max-md:flex-col"
            >
              <div class="w-full md:w-[20rem] h-[10rem] sm:h-[12.5rem] bg-gray-100 rounded-[0.75rem] md:rounded-[12px] animate-pulse"></div>
              <div class="flex-1 flex flex-col gap-[0.75rem] md:gap-4">
                <div class="h-6 md:h-8 bg-gray-100 rounded w-3/4 animate-pulse"></div>
                <div class="space-y-2">
                  <div class="h-3 md:h-4 bg-gray-100 rounded animate-pulse"></div>
                  <div class="h-3 md:h-4 bg-gray-100 rounded animate-pulse w-5/6"></div>
                </div>
                <div class="h-8 md:h-10 bg-gray-100 rounded w-[7.5rem] md:w-32 animate-pulse mt-1 md:mt-2"></div>
              </div>
            </article>
          </div>
        </div>
      </template>

      <!-- Error State -->
      <template v-else-if="error">
        <div class="text-red-500 text-center py-[2rem] md:py-8">
         <p class="text-[0.875rem] md:text-[1rem]">
           Error fetching case studies: Check your internet connection
         </p>
          <button @click="refresh" class="btn mt-4 text-[0.875rem] md:text-[1rem]">Retry</button>
        </div>
      </template>

      <!-- Content -->
      <template v-else>
        <div class="flex flex-col gap-[1.25rem] md:gap-[1.5rem] mb-[3rem] md:mb-[4.5rem]">
          <article 
            v-for="caseStudy in data" 
            :key="caseStudy._id"
            class="flex gap-[1.5rem] md:gap-[2.88rem] pb-[1.5rem] md:pb-[2.5rem] border-b border-[#6087BE] max-md:flex-col hover:bg-gray-50/50 transition-colors duration-200 p-2 rounded-lg"
          >
            <div class="w-full md:w-[20rem] h-[10rem] sm:h-[12.5rem] overflow-hidden">
              <NuxtImg 
                :src="urlFor(caseStudy.mainImage).width(800).url()" 
                class="w-full h-full object-cover rounded-[0.75rem] md:rounded-[12px] transition-transform duration-300 hover:scale-105"
                :alt="caseStudy.title"
                placeholder
                loading="lazy"
              />
            </div>
            <div class="w-full h-full flex-1 flex flex-col gap-[0.75rem] md:gap-[1rem] text-[#072042]">
              <h3 class="header-texts text-[1.25rem] md:text-[1.75rem] leading-snug">
                {{ caseStudy.title }}
              </h3>
              <p class="small-texts text-[0.875rem] md:text-[1rem] line-clamp-2">
                {{ caseStudy.vision || caseStudy.challenge }}
              </p>
              <NuxtLink 
                :to="`/caseStudies/${caseStudy.slug.current}`" 
                class="btn w-fit mt-1 text-[0.875rem] md:text-[1rem] py-[0.5rem] md:py-[0.75rem] px-[1rem] md:px-[1.5rem] hover:bg-[#0d3a7a] transition-colors"
              >
                Read More
              </NuxtLink>
            </div>
          </article>
        </div>

        <!-- Pagination -->
        <div v-if="hasMore" class="flex justify-center">
          <button 
            class="btn w-fit mx-auto text-[0.875rem] md:text-[1rem] py-[0.5rem] md:py-[0.75rem] px-[1.5rem] hover:bg-[#0d3a7a] transition-colors"
            @click="loadMore"
            :disabled="isLoadingMore || !hasMore"
          >
            <span v-if="isLoadingMore">Loading...</span>
            <span v-else>Load More</span>
          </button>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
const sanityClient = useSanityClient()
const { urlFor } = useSanityImage()

// Pagination
const pageSize = 3
const currentPage = ref(1)
const totalCaseStudies = ref(0)

// Data fetching with useAsyncData
const { 
  data, 
  pending, 
  error, 
  refresh 
} = await useAsyncData(
  `caseStudies-page-${currentPage.value}`,
  async () => {
    const start = (currentPage.value - 1) * pageSize
    const query = groq`{
      "caseStudies": *[_type == "caseStudy"] | order(publishedAt desc) [${start}...${start + pageSize - 1}] {
        _id,
        title,
        slug,
        client,
        mainImage,
        vision,
        challenge,
        publishedAt
      },
      "total": count(*[_type == "caseStudy"])
    }`
    
    const result = await sanityClient.fetch(query)
    totalCaseStudies.value = result.total
    return result.caseStudies
  },
   {
    // Key changes to fix routing delay:
    server: false, // Fetch only on client-side
    lazy: true,    // Don't block navigation
    immediate: false // Don't fetch on component mount
  }
)

// Computed
const hasMore = computed(() => {
  return data.value?.length && data.value.length < totalCaseStudies.value
})

const isLoadingMore = computed(() => {
  return pending.value && currentPage.value > 1
})

// Methods
async function loadMore() {
  if (!hasMore.value) return
  
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
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.line-clamp-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

.header-texts {
  line-height: 1.3;
}

.small-texts {
  line-height: 1.5;
}
</style>