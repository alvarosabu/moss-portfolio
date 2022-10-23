export type StoryVersion = "draft" | "published";

export enum StoryStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
}

export interface StoriesConfig {
  version: StoryVersion;
}

export const storiesConfig: StoriesConfig = {
  version: process.env.NODE_ENV === "production" ? "published" : "draft",
};

export function useStories() {
  async function getStory(id = "home") {
    const story = await useAsyncStoryblok(id, storiesConfig);

    return story;
  }

  return {
    getStory,
  };
}
