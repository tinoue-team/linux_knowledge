---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'ls'
pubDate: 2022-07-01
description: 'ディレクトリの一覧表示、ファイルの情報表示'
author: 'Astro学習者'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'Astroのロゴ。'
tags: ["ファイル・ディレクトリ管理"]
---

## 基本

### 概要

ディレクトリまたは、ファイルの情報を現在の階層基準で表示する。

### 構文

```bash
ls -a  # --all 隠しファイルも表示
ls -A # --almost-all
ls -l # 詳細表示、 long の意味
ls -t # ファイルの更新時間順
ls -r # 表示順を逆順にする

ls -h # ファイルサイズなどを読みやすい単位にする
ls -S #  ファイルのサイズ順
ls -X # 拡張子ごとにまとめる
ls -m # カンマ区切りで出力
```

## オプション

### オプションリスト

| オプション | 未省略 | 説明 |
| --- | --- | --- |
| -a | --all | 隠しファイルも含めて表示 |
| -A | --almost-all | -a コマンドの . と .. のエイリアスは表示しない |
| -d | --directory | ディレクトリ自身の情報の表示 |
| -F | --classify | ファイルの種類も表示する<br> `/` …ディレクトリ<br>`*` …実行ファイル<br> `@` …シンボリックリンク<br> |
| -i | --inode | i ノード番号を表示する<br>[i ノードと、-i オプションについて](https://www.notion.so/868a3319b1d448258b7f555244e6f82e?pvs=21) |
| -l | --format=long | ファイルの詳細な情報を表示する |
| -r | --reverse | 逆順にソートする |
| -S |  | サイズ順にソートする |
| -X |  | 拡張子でまとめてソート |
| -m |  | カンマ区切りで出力 |
| -R | --recursive | ディレクトリ内を再起的にすべて表示する |
| -t | --sort=time | 更新日時でソートして表示する |
| -h | --human-readable | 適切な単位付きで表示する(-l と併用) |

### `-○` オプション

## シナリオ
