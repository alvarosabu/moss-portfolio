<script setup lang="ts">
const route = useRoute();

const { fetchProjectBySlug } = usePortfolio();

const story = await fetchProjectBySlug(route.params.slug as string);
const resolvedRichText = computed(() => renderRichText(story.content.content));

useHead({
  title: story.name,
  meta: [
    {
      hid: "description",
      name: "description",
      content: story.content.excerpt,
    },
    {
      hid: "keywords",
      property: "keywords",
      keywords: story.tag_list.join(", "),
    },
    // og
    {
      hid: "og:description",
      property: "og:description",
      content: story.content.excerpt,
    },
    {
      hid: "og:title",
      property: "og:title",
      content: story.name,
    },
    {
      hid: "og:type",
      property: "og:type",
      content: "article",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: `http://alvarosaburido.dev/portfolio/${route.params.slug}`,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: story.content.media?.filename,
    },
    {
      hid: "og:image:alt",
      property: "og:image:alt",
      content: story.content.media?.alt,
    },
    {
      hid: "og:publish_date",
      property: "og:publish_date",
      content: story.published_at,
    },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@alvarosabu" },
    {
      hid: "twitter:title",
      property: "twitter:title",
      content: `${story.name}`,
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: story.content.excerpt,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: story.content.media?.filename,
    },
    {
      hid: "twitter:image:alt",
      name: "twitter:image:alt",
      content: story.content.media?.alt,
    },
  ],
});
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
