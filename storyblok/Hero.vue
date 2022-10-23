<script setup lang="ts">
import { StoryblokComponent } from "@storyblok/vue";

defineProps<{ blok: typeof StoryblokComponent }>();
</script>
<template>
  <div v-editable="blok" class="grid grid-cols-2 gap-8 container mx-auto">
    <img :src="blok.media.filename" :alt="blok.media.alt" class="w-full" />
    <div>
      <h1 class="text-4xl font-bold">{{ blok.title }}</h1>
      <p class="text-xl mb-8">{{ blok.text }}</p>
      <NuxtLink to="/portfolio" class="text-white border border-white p-2">
        Go to portfolio</NuxtLink
      >
    </div>
  </div>
</template>
