<script setup lang="ts">
const route = useRoute();

const { fetchProjectBySlug } = usePortfolio();

const story = await fetchProjectBySlug(route.params.slug as string);
const resolvedRichText = computed(() => renderRichText(story.content.content));
</script>
<template>
  <div class="mx-auto container px-4">
    <header class="my-24">
      <NuxtImg
        class="w-full aspect-video"
        :src="story.content.media.filename"
        format="webp"
      />
      <h1 class="text-4xl font-bold">{{ story.name }}</h1>
    </header>
    <div v-html="resolvedRichText" class="prose"></div>
  </div>
</template>
