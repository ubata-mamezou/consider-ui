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
  * 方針やルールに関するドキュメントを格納するディレクトリ
* :file_folder:src: UIコンポーネントライブラリ
  * UIコンポーネントを格納するディレクトリ
* :file_folder:stories: UIコンポーネントストーリー
  * ストーリーを格納するディレクトリ

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

## インタラクションテスト

インタラクションテストの実行は下記の通りです。  
Chrome, firefoxのクロスブラウザテストが実行されるように設定しています。
```sh
npm run test-storybook
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

## UIコンポーネントドキュメント

### ルール

* ディレクトリ構造はストーリーで指定しているtitleに合わせること。
* イメージは基本同一ディレクトリに配置すること。
* ドキュメントはmdx形式とする。

### ドキュメントTips

* イメージの表示
方法は2通りありますが、パスのエラーを早く気付ける点を重視して方法1を標準とする。

  * 方法1: イメージをインポートし、それをimgタグで表示する
    ```mdx
    import ButtonSize from "./Button.spec.size.drawio.png";

    <img src={ButtonSize} alt="サイズ"/>
    ```
  * 方法2: Markdown表記で、パスをカレント（今回だとdocs）から指定する
    ```mdx
    ![サイズ](/docs/components/Button/Button.spec.size.drawio.png)
    ```
