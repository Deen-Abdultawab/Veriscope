<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
useHead({
  meta: [
    { property: 'og:image', content: '/favicon.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://veriscopedigital.com' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: '/favicon.png' }
  ]
})

</script>
