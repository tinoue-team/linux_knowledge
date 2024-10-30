#!/bin/bash

# 色の指定
W_FG="\033[97m" # 明るい文字
G_BG="\033[42m" # 緑色の背景
R_BG="\033[41m" # 赤色の背景
RESET="\033[0m" # 色のリセット
# 使用方法:
# ./add_frame_none.sh [ファイルまたはディレクトリのパス]

# 引数がない場合はエラーメッセージを表示
if [ $# -lt 1 ]; then
    echo "${R_BG}Usage${RESET}: $0 <file_or_directory> [additional_files_or_directories...]"
    exit 1
fi

# 指定された引数をループ
for path in "$@"; do
    if [ -f "$path" ]; then
        # ファイルが指定された場合
        files=("$path")

    elif [ -d "$path" ]; then
        # ディレクトリが指定された場合、拡張子 .md のファイルを全て取得
        files=()

        # `find` コマンドの出力を読み込み、配列に追加
        while IFS= read -r file; do
            files+=("$file")
        done < <(find "$path" -type f \( -name "*.md" -o -name "*.mdx" \))

    else
        echo "Warning: $path is not a valid file or directory. Skipping."
        continue
    fi

    # 各ファイルに対して処理
    for file in "${files[@]}"; do
        echo -e "${G_BG}${W_FG} Processing file ${RESET}: $file"

        # バックアップを作成
        # cp "$file" "${file}.bak"

        # sed コマンドで編集を行う
        # ```bash と ```sh で後続するテキストがない場合 frame="none" を挿入

        sed -i '' "s/\`\`\`bash$/\`\`\`bash frame=\"none\"/g" "$file"
        sed -i '' "s/\`\`\`sh$/\`\`\`sh frame=\"none\"/g" "$file"

        # 確認のため、一時的なログを表示
        grep -E '^```(bash|sh)' "$file" | grep -v 'frame="none"'

    done
done

echo "Script execution completed."
