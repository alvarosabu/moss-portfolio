<script setup lang="ts">
const { getStory } = useStories();

const story = await getStory("portfolio");

const { fetchProjects, projects } = usePortfolio();

await fetchProjects();
</script>
<template>
  <main role="main">
    <header class="mx-auto container my-24">
      <h1 class="text-4xl font-bold">{{ story.name }}</h1>
    </header>
    <section class="mx-auto container">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
        v-if="projects.length > 0"
      >
        <NuxtLink
          v-for="project in projects"
          :key="project.id"
          :project="project"
          class="bg-lime-100 shadow-lg rounded-lg overflow-hidden"
          :to="`/portfolio/${project.slug}`"
        >
          <NuxtImg
            class="w-full aspect-video"
            :src="project.content.media.filename"
            format="webp"
            sizes="sm:100vw md:50vw lg:460px"
          />
          <div class="p-4">
            <h3>{{ project.name }}</h3>
            <p>{{ project.content.excerpt }}</p>
          </div>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
