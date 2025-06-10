<template>
  <article 
    class="flex gap-[2.88rem] pb-[2.5rem] border-b border-[#6087BE] max-md:flex-col"
  >
    <div class="w-[20rem] h-[12.5rem] max-md:w-full overflow-hidden" v-if="item?.mainImage">
      <NuxtImg 
        :src="urlFor(item?.mainImage).width(800).url()" 
        class="w-full h-full object-cover rounded-[12px]" 
        :alt="item?.title"
        placeholder
        loading="lazy"
      />
    </div>
    <div class="w-full h-full flex-1 flex flex-col gap-[1rem] text-[#072042]">
      <h3 class="header-texts text-[1.75rem]">
        {{ item?.title }}
      </h3>
      <p class="small-texts">
        {{ item?.introduction || item?.vision || item?.challenge}}
      </p>
      <NuxtLink 
        :to="`/${route}/${item?.slug?.current}`" 
        class="btn w-fit"
      >
        Read More
      </NuxtLink>
    </div>
  </article>
</template>

<script setup>
const { urlFor } = useSanityImage()

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
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

article {
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
}

.header-texts {
  line-height: 1.3;
}

.small-texts {
  line-height: 1.5;
}
</style>
