import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const customTheme = create({
    // ベースとなるテーマ (light, dark)
    base: 'light',

    // ブランドカラーなど
    brandTitle: 'Storybookサンプル',
    brandUrl: '/',
    //FIXME: 環境変数の読み込みがうまくいっていないので、暫定的にハードコード
    brandImage: `${process.env.IMAGE_PATH_PREVIEW}logo-storybook.png`,
    // brandImage: `${process.env['BUILD_ENV'] === 'preview' ? 
    //   process.env.IMAGE_PATH_PREVIEW : 
    //   process.env.IMAGE_PATH_DEV}logo-storybook.png`,
    brandTarget: '_self',

    // その他のカスタマイズ
});

addons.setConfig({
  theme: customTheme,
});
