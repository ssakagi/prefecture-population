<div id="top"></div>

## 使用技術一覧

<!-- シールド一覧 -->
<p style="display: inline">
  <!-- フロントエンドのフレームワーク一覧 -->
  <img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-TailwindCSS-000000.svg?logo=tailwindcss&style=for-the-badge">
  <img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <!-- バックエンドのフレームワーク一覧 -->
  <!-- バックエンドの言語一覧 -->
  <!-- ミドルウェア一覧 -->
  <!-- インフラ一覧 -->
  <img src="https://img.shields.io/badge/-Docker-1488C6.svg?logo=docker&style=for-the-badge">
</p>

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [開発環境構築](#開発環境構築)
5. [トラブルシューティング](#トラブルシューティング)
6. [参考資料](#参考資料)

<!-- プロジェクト名を記載 -->

## プロジェクト名

都道府県別人口推移グラフ表示アプリケーション

<!-- プロジェクトについて -->

## プロジェクトについて

フロントエンドの研修修了課題のリポジトリです

<!-- プロジェクトの概要を記載 -->

<p align="right">(<a href="#top">トップへ</a>)</p>

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク | バージョン |
| -------------------- | ---------- |
| Node.js              | 20.14.0    |
| React                | 18.3.1     |
| Next.js              | 14.2.3     |

その他のパッケージのバージョンは package.json を参照してください

<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成

<!-- Treeコマンドを使ってディレクトリ構成を記載 -->

<pre>
.
├── .env.local
├── .env.test.local
├── .eslintrc.json
├── .gitignore
├── .storybook
│   ├── main.ts
│   └── preview.ts
├── Dockerfile
├── Makefile
├── README.md
├── __tests__
│   ├── app
│   │   └── api
│   │       └── resas
│   ├── components
│   │   └── CheckField.test.tsx
│   └── hooks
│       └── usePrefPopulation.test.tsx
├── cypress
│   ├── e2e
│   │   └── spec.cy.ts
│   └── support
│       ├── commands.ts
│       └── e2e.ts
├── cypress.config.ts
├── docker-compose.yml
├── jest.config.ts
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── src
│   ├── app
│   │   ├── api
│   │   │   └── resas
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── CheckField.stories.tsx
│   │   ├── CheckField.tsx
│   │   ├── Graph.stories.tsx
│   │   ├── Graph.tsx
│   │   ├── Header.stories.tsx
│   │   └── Header.tsx
│   ├── hooks
│   │   └── usePrefPopulation.tsx
│   └── templates
│       ├── Main.stories.tsx
│       └── Main.tsx
├── tailwind.config.ts
├── tsconfig.json
└── yarn.lock
</pre>

<p align="right">(<a href="#top">トップへ</a>)</p>

## 開発環境構築

<!-- コンテナの作成方法、パッケージのインストール方法など、開発環境構築に必要な情報を記載 -->

### コンテナの作成と起動

.env.local ファイル及び .env.test.local ファイルを[環境変数の一覧](#環境変数の一覧)を元に作成

ファイル作成後、以下のコマンドで開発環境を構築

`make prepare`

### 動作確認

http://127.0.0.1:3000 にアクセスできるか確認

アクセスできたら成功

### コンテナの停止

以下のコマンドでコンテナを停止することができます

`make down`

### 環境変数の一覧

| 変数名  | 役割                  | デフォルト値 | DEV 環境での値           |
| ------- | --------------------- | ------------ | ------------------------ |
| API_KEY | RESAS-API の API キー |              | 各自でキーを発行すること |

### コマンド一覧

| Make         | 実行する処理                                                                         | 元のコマンド                                             |
| ------------ | ------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| make prepare | node_modules のインストール、イメージのビルド、コンテナの起動を順に行う              | docker-compose run --rm app yarn<br>docker-compose up -d |
| make up      | コンテナの起動                                                                       | docker-compose up -d                                     |
| make build   | イメージのビルド                                                                     | docker-compose build                                     |
| make down    | コンテナの停止                                                                       | docker-compose down                                      |
| make test    | テストを実行　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 | docker-compose exec app yarn test:watch                  |
| make catalog | カタログを作成                                                                       | docker-compose exec -d app yarn storybook                |

## トラブルシューティング

### docker daemon is not running

Docker Desktop が起動できていないので起動させましょう

### Ports are not available: address already in use

別のコンテナもしくはローカル上ですでに使っているポートがある可能性があります
<br>
下記記事を参考にしてください
<br>
[コンテナ起動時に Ports are not available: address already in use が出た時の対処法について](https://qiita.com/shun198/items/ab6eca4bbe4d065abb8f)

### Module not found

`make build`

を実行して Docker image を更新してください

### 特定のファイルでCSSが効かない

tailwind.config.tsのcontentにパスを追加してください

### モジュール '"@testing-library/react"' にエクスポートされたメンバー 'screen' がありません。

> Starting from RTL version 16, you'll also need to install @testing-library/dom
>
> -- <cite><https://github.com/testing-library/react-testing-library#readme></cite>

### require() of ES Module /app/node_modules/strip-ansi/index.js from /app/node_modules/string-width/index.js not supported.

> Add this to your package.json file
>
> ```json
> "resolutions": {
>   "wrap-ansi": "7.0.0",
>   "string-width": "4.1.0"
>   }
> ```
>
> -- <cite><https://stackoverflow.com/questions/77406363/error-err-require-esm-require-of-es-module-node-modules-wrap-ansi-index-js></cite>

### Error: Jest: Failed to parse the TypeScript config file /app/jest.config.ts

> ts-nodeのinstallをしていなかったのが、問題でしたね。
>
> --<cite><https://qiita.com/yusei53/items/a8e397e856cc96e7c329></cite>

### Attempted to load @next/swc-linux-arm64-gnu, but it was not installed

> ホスト側でyarn addする前の状態に再度変更するか、上記の変更がコンテナ内に加わらないようにする必要があります。
>
> -- <cite><https://qiita.com/P-man_Brown/items/db1996bdee33ee667741></cite>

### ReferenceError: Request is not defined

> Try adding this to your test:
>
> ```ts
> /**
>  * @jest-environment node
>  */
> ```
>
> -- <cite><https://github.com/vercel/next.js/discussions/59041></cite>

<p align="right">(<a href="#top">トップへ</a>)</p>

## 参考資料

- <https://qiita.com/shun198/items/c983c713452c041ef787>
- <https://zenn.dev/shimapon3/articles/13e3d4b147742c>
- <https://zenn.dev/kawaxumax/articles/9c4cea2d731dae>

<p align="right">(<a href="#top">トップへ</a>)</p>
