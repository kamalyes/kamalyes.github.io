# 拉取nodejs 16.19.1版本镜像  其它版本访：https://hub.docker.com/_/node/tags?page=1
FROM node:16.19.1-alpine3.17 AS builder

# 制定工作目录并执行yarn install
WORKDIR /opt/web
COPY package.json yarn.lock ./
RUN yarn install

# 设置nodemodules环境变量
ENV PATH="./node_modules/.bin:$PATH"

# 复制本地路径下所有文件并执行build
COPY . ./

RUN pwd
RUN yarn run docs:build
RUN yarn run fileDisplay

# 拉取nginx1.17版本镜像 https://hub.docker.com/_/nginx/tags?page=1
FROM nginx:1.17-alpine
# 安装一些常用插件
RUN apk --no-cache add curl vim wget openssl
# RUN openssl req -x509 -nodes -newkey rsa:4096 -keyout nginx.key -out nginx.crt -days 365 -subj "/CN=$(hostname)"

RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.2.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
    chmod +x envsubst && \
    mv envsubst /usr/local/bin

# 复制nginx.config文件
COPY ./nginx.config /etc/nginx/nginx.template

COPY ./nginx.crt /etc/nginx/ssl/nginx.crt
COPY ./nginx.key /etc/nginx/ssl/nginx.key

# 使用envsubst替换nginx.config${..}变量
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]

# 复制上一个（builder）镜像至当前镜像内
COPY --from=builder /opt/web/docs/.vuepress /usr/share/nginx/html
