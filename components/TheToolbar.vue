<script setup lang="ts">
const title = ref("Brilliant");
</script>
<template>
  <header class="bg-green shadow-lg p-2">
    <div class="container mx-auto">
      <div class="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          class="h-12 mr-4"
          width="65px"
          height="48px"
        />
        <h1 class="text-2xl text-white">{{ title }}</h1>
      </div>
    </div>
  </header>
</template>
