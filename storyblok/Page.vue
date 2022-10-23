<script setup lang="ts">
import { StoryblokComponent } from "@storyblok/vue";

defineProps<{ blok: typeof StoryblokComponent }>();
</script>
<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="inblok in blok.body"
      :key="inblok._uid"
      :blok="inblok"
    />
  </div>
</template>
