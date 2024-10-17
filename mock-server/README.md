# mock-Server

UIコンポーネント利用アプリのバックエンドサービスのモックです。  

## 環境

|name|ver|description|
|---|---|---|
|json-sever|0.17.4|mock server|
||||

## アプリ構成

* db.json: データベース設定
* middleware.js: ミドル設定
* route.json: ルーティング設定

### 初期構築

ゼロベースからの構築メモ

* install
 
```sh
# Json-server
## 1+の安定版は20240919時点では未リリース。不具合も多いのでこの時点の最後の安定版を使用中。
npm install json-server@0.17.4
```

* setting

```json: package.json
  "scripts": {
    "json-server": "json-server --watch db.json -p 19000 --routes routes.json --middlewares middleware.js"
  }
```

## 環境構築

環境構築手順は以下の通りです。  
node, npmがインストールされていることを前提とします。

```sh
npm install
```

## 起動

起動手順は以下の通りです。

```sh
npm run json-server
```
