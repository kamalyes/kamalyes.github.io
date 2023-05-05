# 拉取nodejs 16.8.0版本镜像  其它版本访：https://hub.docker.com/_/node/tags?page=1
FROM node:16.8.0 AS builder

# 设置nodemodules环境变量
ENV PATH="./node_modules/.bin:$PATH"

# 制定工作目录并执行npm install
ENV DOCKER_WORKSPACES /opt/web
RUN mkdir -p ${DOCKER_WORKSPACES}
WORKDIR ${DOCKER_WORKSPACES}

# 复制本地路径下所有文件并执行build
COPY . ./

RUN pwd
RUN npm install
RUN npm run docs:build
RUN npm run baiduPush

# 拉取nginx1.17版本镜像 https://hub.docker.com/_/nginx/tags?page=1
FROM nginx:1.23-alpine
ENV DOCKER_WORKSPACES /opt/web
RUN mkdir -p ${DOCKER_WORKSPACES}
WORKDIR ${DOCKER_WORKSPACES}
# 安装一些常用插件curl vim wget
RUN apk --no-cache add openssl && mkdir /etc/nginx/ssl/ && cd /etc/nginx/ssl/
RUN openssl req -x509 -nodes -newkey rsa:4096 -keyout nginx.key -out nginx.crt -days 365 -subj "/CN=$(hostname)"

# 复制上一个(builder)镜像至当前镜像内
COPY --from=builder ${DOCKER_WORKSPACES}/docs/.vuepress/dist /usr/share/nginx/html/

EXPOSE 80

ENTRYPOINT nginx -g "daemon off;"
