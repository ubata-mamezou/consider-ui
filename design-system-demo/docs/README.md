# README

## 概要

方針やルールに関するドキュメントを格納するディレクトリ

## ルール

* ディレクトリ構造はストーリーで指定しているtitleに合わせること。
* イメージは基本同一ディレクトリに配置すること。
* ドキュメントはmdx形式とする。

## ドキュメントTips

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