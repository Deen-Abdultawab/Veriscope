<template>
  <section class="w-full pt-[2rem] md:pt-[4.44rem] pb-[4rem] md:pb-[10.81rem] bg-[#FFFFFF]">
    <div class="w-[90%] md:w-[80%] lg:w-[69.94%] mx-auto max-w-[1440px]">
      <h2 class="header-texts text-[#072042] mb-[1.5rem] md:mb-[2.5rem] text-[1.75rem] md:text-[2rem]">All Case Studies</h2>

      <!-- Loading State -->
      <template v-if="pending && currentPage === 1">
        <div class="mb-[2.5rem] md:mb-[4.5rem]">
          <UiSkeletonLoader/>
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
          <UiCardComponent 
            v-for="caseStudy in displayedCaseStudies" 
            :key="caseStudy._id"
            :item="caseStudy"
            route="caseStudies"
          />
        </div>

        <!-- Pagination -->
        <div v-if="hasMore" class="flex justify-center">
          <button 
            class="btn w-fit min-w-[10rem] mx-auto text-[0.875rem] md:text-[1rem] py-[0.5rem] md:py-[0.75rem] px-[1.5rem] hover:bg-[#0d3a7a] transition-colors grid place-items-center"
            @click="loadMore"
            :disabled="isLoadingMore"
          >
            <IconsSpinLoader v-if="isLoadingMore"/>
            <span v-else>Load More</span>
          </button>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
const sanityClient = useSanityClient()

// Pagination
const pageSize = 2
const currentPage = ref(1)
const totalCaseStudies = ref(0)
const displayedCaseStudies = ref([])

// Data fetching with useAsyncData
const { 
  pending, 
  error, 
  refresh 
} = await useAsyncData(
  `caseStudies-page-${currentPage.value}`,
  async () => {
    const start = (currentPage.value - 1) * pageSize
    const query = groq`{
      "caseStudies": *[_type == "caseStudy"] | order(publishedAt desc) [${start}...${start + pageSize}] {
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
    
    // Append new case studies to the displayed list
    displayedCaseStudies.value = [
      ...displayedCaseStudies.value,
      ...result.caseStudies
    ]
    
    return result.caseStudies
  },
  {
    server: false,
    lazy: true,
    immediate: false
  }
)

// Computed
const hasMore = computed(() => {
  return displayedCaseStudies.value.length < totalCaseStudies.value
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
  // nextTick(() => {
  //   window.scrollTo({
  //     top: document.body.scrollHeight,
  //     behavior: 'smooth'
  //   })
  // })
}

onMounted(async () => {
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