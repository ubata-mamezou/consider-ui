# consider-ui

UIの検証リポジトリです。

## 環境

|name|ver|description|
|---|---|---|
|react|18.3.1|ui framework|
|typescript|5.6.2|lang|
|vite|5.4.8|build|
|storybook|8.3.4||
||||

## アプリ構成

* :file_folder:design-system-demo: デザインシステム
  コンポーネントライブラリを定義しているアプリ
* :file_folder:glossary: アプリ
  デザインシステムで定義したコンポネントライブラリを使用したアプリ


## 環境構築

当リポジトリのアプリ、Storybookを開発/動作させる環境構築手順は以下の通りです。  
node, npmがインストールされていることを前提とします。

```sh
cd design-system-demo
npm install
cd ..

cd glossary
npm install
cd ..
```

## 起動

アプリ、Storybookを起動する手順は以下の通りです。

* デザインシステム（Storybook）
```sh
# design-system-demoフォルダで実行
npm run storybook
```

* アプリ
```sh
# glossaryフォルダで実行
npm run dev
```

## ビルド（静的コンテンツの生成）

アプリ、Storybookの静的コンテンツを生成する手順は以下の通りです。

* デザインシステム（Storybook）
```sh
# design-system-demoフォルダで実行
npm run build-storybook
```

* デザインシステム（コンポーネントライブラリ）
```sh
# design-system-demoフォルダで実行
npm run build
```

* アプリケーション
```sh
# glossaryフォルダで実行
npm run build
```

