FROM node:22.10.0-alpine3.20

WORKDIR /var/www/app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
# RUN ls -la
RUN pnpm install --frozen-lockfile

# # 6. プロジェクトの残りのファイルをコピー
# COPY . .

# 7. Entrypointスクリプトをコピー
# COPY entrypoint.sh /var/www/app/entrypoint.sh

# 8. Entrypointスクリプトに実行権限を付与
# RUN chmod +x /app/entrypoint.sh

# 9. ポート3000を公開（Astroのデフォルトポート）
EXPOSE 4321

RUN curl -sSfL https://get.tur.so/install.sh | bash

# # 10. 環境変数を設定
# ENV NODE_ENV=production

# 11. Entrypointスクリプトを実行
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
