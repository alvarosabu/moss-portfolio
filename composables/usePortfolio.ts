import { useStoryblokApi } from "@storyblok/vue";

const state = reactive({
  projects: [],
});

export function usePortfolio() {
  const storyapi = useStoryblokApi();

  async function fetchProjects() {
    try {
      const { data } = await storyapi.get("cdn/stories/", {
        ...storiesConfig,
        starts_with: "portfolio/",
        is_startpage: false,
      });
      state.projects = data.stories;
    } catch (error) {
      console.error(
        "There was an error fetching projects from Storyblok",
        error
      );
    }
  }

  async function fetchProjectBySlug(slug: string): Promise<any> {
    try {
      const { data } = await storyapi.get("cdn/stories", {
        ...storiesConfig,
        starts_with: "portfolio/",
        // Prepend */ to match with the first part of the full_slug
        by_slugs: "*/" + slug,
      });
      const story = data.stories[0];
      return story;
    } catch (error) {
      console.error(
        `There was an error fetching project ${slug} from Storyblok`,
        error
      );
    }
  }

  return {
    ...toRefs(state),
    fetchProjects,
    fetchProjectBySlug,
  };
}
