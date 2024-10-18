# デザインシステム

デザインシステムの検証リポジトリです。
ここではコンポーネントライブラリにフォーカスしています。

## 環境

|name|ver|description|
|---|---|---|
|react|18.3.1|ui framework|
|typescript|5.6.2|lang|
|vite|5.4.8|build|
|storybook|8.3.4||
||||

## アプリ構成

* :file_folder:docs: UIコンポーネントドキュメント
* :file_folder:src: UIコンポーネントライブラリ
* :file_folder:stories: UIコンポーネントストーリー

## 環境構築

環境構築手順は以下の通りです。  
node, npmがインストールされていることを前提とします。

```sh
npm install
npm run build
```

## 起動

下記のコマンドを実行して、[ここ](http://localhost:6006/)にアクセスできれば起動完了です。

```sh
npm run storybook
```

## ビルド

ビルド手順は以下の通りです。

* Storybookの静的コンテンツ
```sh
npm run build-storybook
```

* コンポーネントライブラリ
```sh
npm run build
```
