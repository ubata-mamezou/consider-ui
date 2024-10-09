import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const customTheme = create({
    // ベースとなるテーマ (light, dark)
    base: 'light',

    // ブランドカラーなど
    brandTitle: 'Storybookサンプル',
    brandUrl: '/',
    brandImage: '/logo-storybook.png',
    brandTarget: '_self',

    // その他のカスタマイズ
});

addons.setConfig({
  theme: customTheme,
});
