import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // staticDirs: ['../public'], 
  //ストーリーおよびMDXパス
  stories: [
    // documents
    "../docs/**/*.mdx", 
    // stories
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    // "@storybook/addon-actions",
    // "@storybook/addon-docs",
    // "@storybook/addon-storyshots",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;
