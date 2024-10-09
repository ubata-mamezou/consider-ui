import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const parameters = {
  docs: {
    theme: themes.normal, // Docsページ専用のテーマ
  },
};

export default preview;
