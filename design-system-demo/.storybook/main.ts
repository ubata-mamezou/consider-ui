import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // staticDirs: ['../public'], 
  // core: {
  //   builder: 'vite', // builderとしてviteを明示
  // },
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
  docs: {
    // defaultName: 'デザインシステムサンプル', //	自動生成されたドキュメントページの名前（最初に生成されたドキュメントのタイトルしか変わらないから使えない）
    docsMode: false, //ドキュメントモード（true:ドキュメントだけ表示するモード。ストーリーは表示されなくなる。, false:デフォルト)
  },
};

export default config;
