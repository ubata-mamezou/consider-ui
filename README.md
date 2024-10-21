# consider-ui

UIの検証リポジトリです。

## アプリ構成

* :file_folder:design-system-demo: [デザインシステム](./design-system-demo/README.md)
  * 概要
    * こんな風に表現すれば程度の大枠をwikiに作成
  * デザイン原則
    * こんな風に表現すれば程度の大枠をwikiに作成
  * スタイルガイド
    * Figmaへのリンクをwikiに掲載
  * コンポーネントライブラリ
    * コンポーネント実装
    * ドキュメント作成（MDX）
    * ストーリー実装（Storybook）
      * ドキュメント自動生成
      * インテグレーションテスト実装（interaction-test）
      * ヴィジュアルテスト実装（T.B.D）
    * ローカルビルド
    * GitHub Pagesで公開
* :file_folder:glossary: [UIコンポーネント利用アプリ](./glossary/README.md)
  * コンポーネントライブラリのローカルインストール
  * 画面: 一覧形式、単票形式
  * 機能: CRUDあり
  * APIの呼び出し: Fetchでモックサーバーを呼び出し（CRUDあり）
  * テスト（T.B.D）
* :file_folder:mock-server: [モックサーバー](./mock-server/README.md)

## 手順

用途に合わせた手順を実施してください。  
内容はそれぞれのREADME.mdを参照してください。

### デザインシステムを確認したい
1. デザインシステムの環境構築
2. デザインシステムを起動

### UIコンポーネント利用したアプリを確認したい
1. デザインシステムの環境構築
2. モックサーバーの環境構築
3. UIコンポーネント利用アプリの環境構築
4. モックサーバーの起動
5. UIコンポーネント利用アプリの起動
