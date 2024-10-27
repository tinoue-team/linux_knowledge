---
# layout: ../../../layouts/MarkdownPostLayout.astro
title: 'cat'
pubDate: 2024-10-27
description: 'ファイル閲覧を目的に利用するが、ファイルのテキストを出力する働きで、オプションによって複数のテキストを結合して標準出力を行う'
author: 'Astro学習者'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'Astroのロゴ。'
tags: ["ファイル・ディレクトリ管理"]
---

## 基本

### 説明

concatenate (連結する)の略

以下のようにファイルを複数指定すると、それらのファイルを連結して順番に表示する

```bash
cat /etc/hostname
b36be26de5af

cat /etc/hosts
127.0.0.1       localhost
::1     localhost ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
172.17.0.2      b36be26de5af

cat /etc/hosts /etc/hostname
127.0.0.1       localhost
::1     localhost ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
172.17.0.2      b36be26de5af
b36be26de5af
```
