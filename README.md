# consider-ui

UIの検証リポジトリです。

## 環境構築

当リポジトリのアプリ、Storybookを開発/動作させる環境構築手順は以下の通りです。  
node, npmがインストールされていることを前提とします。

1. ディレクトリ変更
  ```sh
  cd design-system-demo
  ```
2. packageをインストール
  ```sh
  npm install
  ```

## 起動

アプリ、Storybookを起動する手順は以下の通りです。

### アプリケーション
```sh
npm run dev
```

### Storybook
```sh
npm run storybook
```

## ビルド（静的コンテンツの生成）

アプリ、Storybookの静的コンテンツを生成する手順は以下の通りです。

### アプリケーション
```sh
npm run build
```

### Storybook
```sh
npm run build-storybook
```

