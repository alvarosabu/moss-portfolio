<script setup lang="ts">
const { getStory } = useStories();

const story = await getStory("home");
</script>
<template>
  <main role="main">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>
