import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
// import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
// import React from "react";
import DocumentTemplate from './DocumentTemplate.mdx';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: {
        contentsSelector: '.sbdocs-content', //見出しの検索のためのコンテナのCSSセレクタ
        headingSelector: 'h1, h2, h3', //目次に表示する見出しのリストを定義します
        ignoreSelector: '.sbdocs-subtitle, .css-jy82ux', //特定の見出しやストーリーを無視するように目次を設定
        title: '目次', //タイトル
        disable: false, //目次自動生成(true:生成しない、false:生成する)
        unsafeTocbotOptions: {
          orderedList: false,
        },
      },
      theme: themes.normal, // Docsページ専用のテーマ
      // page: () => (
      //   <>
      //     <Title />
      //     <Subtitle />
      //     <Description />
      //     <Primary />
      //     <Controls />
      //     <Stories />
      //   </>
      // ),
      page: DocumentTemplate,
    },
  },
};

export default preview;
