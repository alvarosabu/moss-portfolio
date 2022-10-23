<script setup lang="ts">
import { StoryblokComponent } from "@storyblok/vue";

defineProps<{ blok: typeof StoryblokComponent }>();
</script>
<template>
  <div v-editable="blok" class="grid grid-cols-2 gap-8 container mx-auto">
    <img :src="blok.media.filename" :alt="blok.media.alt" class="w-full" />
    <div>
      <h1 class="text-4xl font-bold">{{ blok.title }}</h1>
      <p class="text-xl">{{ blok.text }}</p>
    </div>
  </div>
</template>
