// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/image-edge",
    "@unocss/nuxt",
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_API_TOKEN,
        useApiClient: true,
      },
    ],
  ],
});
