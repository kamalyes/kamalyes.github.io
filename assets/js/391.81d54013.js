(window.webpackJsonp=window.webpackJsonp||[]).push([[391],{707:function(s,n,t){"use strict";t.r(n);var a=t(7),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("假如你已经构建了一个应用，但是现在需要部署它。应该怎么做？首先，最好选择一个云提供商，因为它们一般成本低而且部署容易。")]),s._v(" "),n("p",[s._v("Docker 是用于构建和共享容器化应用的事实标准。你可以使用它打包你的应用程序，并包含多种开源 Web 服务器来为你的应用程序提供服务。另外，你还可以通过配置网络服务器来发送安全标头，这样使你的程序更安全。")]),s._v(" "),n("p",[n("strong",[s._v("前提条件：")])]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node 16"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://docs.docker.com/install/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://developer.okta.com/signup/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Okta开发者帐户"),n("OutboundLink")],1)])]),s._v(" "),n("h3",{attrs:{id:"为什么要使用docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用docker"}},[s._v("#")]),s._v(" "),n("strong",[s._v("为什么要使用Docker？")])]),s._v(" "),n("p",[s._v("你可能会问：“为什么要用 Docker？这不会使事情复杂化吗？”")]),s._v(" "),n("p",[s._v("是的我同意。用 Docker 进行操作比用 Heroku 进行 "),n("code",[s._v("firebase deploy")]),s._v(" 或 "),n("code",[s._v("git push")]),s._v(" 处理更为复杂。但是如果你真的要使事情复杂化，并用 Kubernetes 去管理你的应用，那么它可以给你更多的控制权。?")]),s._v(" "),n("h3",{attrs:{id:"创建dockerfile和nginx配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建dockerfile和nginx配置"}},[s._v("#")]),s._v(" "),n("strong",[s._v("创建Dockerfile和Nginx配置")])]),s._v(" "),n("p",[s._v("在你的根目录中创建一个 "),n("code",[s._v("Dockerfile")]),s._v("。")]),s._v(" "),n("div",{staticClass:"language-docker line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取nodejs 16.19.1版本镜像  更多版本访：https://hub.docker.com/_/node/tags?page=1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" node:16.19.1-alpine3.17 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" builder")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 制定工作目录并执行yarn install")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /opt/web")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" package.json yarn.lock ./")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yarn install")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置nodemodules环境变量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" PATH="),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./node_modules/.bin:$PATH"')])]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制本地路径下所有文件并执行build")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" . ./")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yarn run docs:build")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取nginx1.17版本镜像 更多版本访问：https://hub.docker.com/_/nginx/tags?page=1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" nginx:1.17-alpine")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装一些常用插件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apk --no-cache add curl vim wget")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" curl -L https://github.com/a8m/envsubst/releases/download/v1.2.0/envsubst-`uname -s`-`uname -m` -o envsubst && "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    chmod +x envsubst && "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    mv envsubst /usr/local/bin")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制nginx.config文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" ./nginx.config /etc/nginx/nginx.template")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用envsubst替换nginx.config${..}变量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" ["),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/sh"')]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-c"')]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'\"")]),s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制上一个（builder）镜像内至当前镜像内")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token options"}},[n("span",{pre:!0,attrs:{class:"token property"}},[s._v("--from")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("builder")])]),s._v(" /opt/web/docs/.vuepress/dist /usr/share/nginx/html")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("p",[s._v("这将会构建你的项目并把 Nginx 添加为 Web服务器。它还将安装 "),n("code",[s._v("envsubst")]),s._v(" 版本，该版本允许你用环境变量去替换变量，并设置默认值。")]),s._v(" "),n("p",[s._v("在同一目录中创建一个 "),n("code",[s._v("nginx.config")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-nginx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" $")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("PORT:-80"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gzip config")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("gzip")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("gzip_min_length")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1k")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("gzip_comp_level")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("gzip_types")]),s._v(" text/plain text/css text/javascript application/json application/javascript application/x-javascript application/xml")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("gzip_vary")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("gzip_disable")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MSIE [1-6]\\."')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" /usr/share/nginx/html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try_files")]),s._v(" $"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v("/ /index.html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("这个文件把 Nginx 配置为将你的 React 应用作为 SPA（其中所有路由都转到 index.html）并在 80 端口上运行。在 uri 前面有两个 $，以防止 uri 被替换为空白值。")]),s._v(" "),n("h3",{attrs:{id:"构建-docker-镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构建-docker-镜像"}},[s._v("#")]),s._v(" "),n("strong",[s._v("构建 Docker 镜像")])]),s._v(" "),n("p",[s._v("先执行 "),n("code",[s._v("docker ps")]),s._v(" 确保你的 Docker 守护进程正在运行。然后运行以下命令来构建你的 Docker 镜像。命令中的 "),n("code",[s._v("docs-docker")]),s._v(" 可以是你想要为镜像命名的任何名字。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" docs-docker "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("该过程完成后，你将会看到以下消息的内容：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("Successfully built 3211a1255527\nSuccessfully tagged docs-docker:latest\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"运行你的应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行你的应用"}},[s._v("#")]),s._v(" "),n("strong",[s._v("运行你的应用")])]),s._v(" "),n("p",[s._v("现在，你可以用 "),n("code",[s._v("docker run")]),s._v(" 命令通过 Docker 在端口 3000 上运行。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v(":80 docs-docker\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("如果你发现这些 "),n("code",[s._v("docker")]),s._v(" 命令很难记住，也可以在 "),n("code",[s._v("package.json")]),s._v("文件中添加几个脚本 。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker build -t do c s ."')]),s._v(",\n"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docs-dock er"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker run -p 3000:80 docs-docker"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("然后就可以用 "),n("code",[s._v("npm run docker")]),s._v(" 和 "),n("code",[s._v("npm run docs-docker")]),s._v(" 运行了。")])])}),[],!1,null,null,null);n.default=e.exports}}]);