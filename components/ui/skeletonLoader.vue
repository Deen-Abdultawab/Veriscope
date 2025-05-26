<template>
   <div v-for="n in 3" :key="n" class="flex gap-[2.88rem] pb-[2.5rem] border-b border-[#6087BE]">
        <div class="w-[20rem] h-[12.5rem] bg-gray-100 rounded-[12px] animate-pulse"></div>
        <div class="flex-1 flex flex-col gap-4">
        <div class="h-8 bg-gray-100 rounded w-3/4 animate-pulse"></div>
        <div class="space-y-2">
            <div class="h-4 bg-gray-100 rounded animate-pulse"></div>
            <div class="h-4 bg-gray-100 rounded animate-pulse w-5/6"></div>
            <div class="h-4 bg-gray-100 rounded animate-pulse w-2/3"></div>
        </div>
        <div class="h-10 bg-gray-100 rounded w-32 animate-pulse mt-2"></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.skeleton-item {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>