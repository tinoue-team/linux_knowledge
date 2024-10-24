# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### astro dev

```bash
astro dev [...flags]
```

|option| description|
|:---|:---|
| `--port` |  Specify which port to run on. Defaults to 4321.|
| `--host` |  Listen on all addresses, including LAN and public addresses.|
| `--host <custom-address>` |  Expose on a network IP address at `<custom-address>`|
| `--open` |  Automatically open the app in the browser on server start|
| `--force` |  Clear the content layer cache, forcing a full rebuild.|
| `--help (-h)` |  See all available flags.|

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 開発からデプロイまで

### 開発

プロジェクトの諸々の開発を行なったら、以下の手順でデプロイを行なっていく

1. **ローカルでの開発**
  リアルタイムでのコードの反映を確認しながらの開発を行なっていく(ホットリロード)

    ```bash
    pnpm run dev
    ```

1. **リンターとフォーマッターの適用**

    ```bash
    pnpm check
    pnpm fmt
    pnpm lint
    ```

1. **SSGページのビルドを確認**
  静的ページレンダリングを確認する

    ```bash
    # ASTRO_DATABASE_FILE 変数を定義することを求められたら、
    export ASTRO_DATABASE_FILE=./.astro/content.db
    pnpm run build
    ```

    ビルドのエラーが発生したら `--verbose`オプションで確認することもできる

    ```bash
    pnpm run build --verbose
    ```

## 本番用 DB (turso) を参照して開発

### DB へのスキーマ実行

.env ファイルに ASTRO_DB_REMOTE_URL と ASTRO_DB_APP_TOKEN を定義して turso (リモート DB) に反映させる

```bash
pnpm astro db push --remote
```

Astro DB では、ローカルとリモートの両方のデータベースに接続できます。 デフォルトでは、Astroは `dev` および `build` コマンドにローカルデータベースファイルを使用し、毎回テーブルを再作成して開発シードデータを挿入します。

### 本番のデータを元にビルド、開発

ホスティングされたリモートデータベースに接続するには、`--remote`フラグを使用します。このフラグにより、リモートデータベースへの読み取りと書き込みの両方が可能になり、本番環境でのユーザーデータの受け入れと永続化が可能になります。

package.json ですでに `--remote` フラグ付きの実行コマンドを定義済みのため

```bash
pnpm run build:remote

pnpm run dev:remote
```

を実行するとリモートのデータベースを参照するようになる。

## その他

### TODO

- vscode 拡張機能がない環境での開発を考慮して、[@astrojs/ts-plugin](https://www.npmjs.com/package/@astrojs/ts-plugin) をインストールする
