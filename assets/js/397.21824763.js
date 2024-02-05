(window.webpackJsonp=window.webpackJsonp||[]).push([[397],{713:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("在介绍 Docker 具体的操作前，先简要复习下 Docker 的架构，这样可以更好地帮助我们理解 Docker 中的各个命令。")]),s._v(" "),a("p",[s._v("首先我们一直对 Docker 这个叫法就有些误解，Docker 其实指代的是用于开发，部署，运行应用的一个平台。平常中说的 Docker 准确来说是 Docker Engine.")]),s._v(" "),a("p",[s._v("Docker Engine 是一个 C/S 架构的应用。其中主要的组件有：")]),s._v(" "),a("ul",[a("li",[s._v("Docker Server：长时间运行在后台的程序，就是熟悉的 daemon 进程.")]),s._v(" "),a("li",[s._v("Docker Client: 命令行接口的客户端。")]),s._v(" "),a("li",[s._v("REST API: 用于和 daemon 进程的交互。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/python/1861307-20200213155336579-1003678198.png",alt:""}})]),s._v(" "),a("p",[s._v("我们通过给 Docker Client 下发各种指令，然后 Client 通过 Docker daemon 提供的 REST API 接口进行交互，来让 daemon 处理编译，运行，部署容器的繁重工作。 大多数情况下， Docker Client 和 Docker Daemon 运行在同一个系统下，但有时也可以使用 Docker Client 来连接远程的 Docker Daemon 进程，也就是远程的 Server 端。")]),s._v(" "),a("p",[s._v("清楚了 Docker 的简单架构，就可以了解下具体的命令了。")]),s._v(" "),a("h2",{attrs:{id:"docker-镜像构建指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-镜像构建指令"}},[s._v("#")]),s._v(" Docker 镜像构建指令")]),s._v(" "),a("h3",{attrs:{id:"指令1-构建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令1-构建镜像"}},[s._v("#")]),s._v(" 指令1：构建镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" URL "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Docker 构建镜像的上下文。")]),s._v(" "),a("p",[s._v("这里的上下文指的就是命令的最后一个参数 "),a("code",[s._v("PATH | URL| -")]),s._v("，具体来说就 "),a("code",[s._v("docker build .")]),s._v(" 中的 "),a("code",[s._v(".")]),s._v(" 很多人以为这个 "),a("code",[s._v(".")]),s._v(" 是 DockerFile 的位置，其实不然，准确来说是构建上下文的位置。前面说到 Docker 是 C/S 架构，在 Client 端下发具体的命令，在 Server 端（Daemon）执行具体的内容。这也就意味着，构建镜像的过程其实是在 Server 端完成的。而上下文的出现，就是为了把需要的内容传递给 Server，这也就为什么在每次构建时都能看到这样一句话。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost python_shell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker build --rm -t temp/python-test .")]),s._v("\nSending build context to Docker daemon  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".608kB\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这里的 Sending 其实就是把本地 Client 端的文件内容，拷贝到 Server 端。而许多初学者，在 DockerFile 中写出了 "),a("code",[s._v("COPY /opt/xxxx /app")]),s._v(" 这样的话，其实就是没有理解上下文的概念，并不知道在 Server 端是没有 "),a("code",[s._v("opt/xxxx")]),s._v(" 的文件的。")]),s._v(" "),a("p",[s._v("还有的人将 Docker File 放在硬盘根目录执行，殊不知，这样会将根目录所有的文件都拷贝到 Server 端，造成构建极其缓慢。")]),s._v(" "),a("p",[s._v("Options 常用参数：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("-t")]),s._v(": 打包出镜像的名称及标签，通常写法为 "),a("code",[s._v("name:tag")])]),s._v(" "),a("li",[a("code",[s._v("--rm")]),s._v(": 构建成功后，删除中间产生的容器。")]),s._v(" "),a("li",[a("code",[s._v("--force-rm=true")]),s._v(": 无论是否构建成功，都删除中间产生的容器")]),s._v(" "),a("li",[a("code",[s._v("--no-cache")]),s._v(": 构建镜像时不使用缓存。")]),s._v(" "),a("li",[a("code",[s._v("-f")]),s._v(": 指定 DockerFile 的路径")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build --force-rm --no-cache "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" local/centos7:v1 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"dockerfile-指令及编写规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-指令及编写规范"}},[s._v("#")]),s._v(" DockerFile 指令及编写规范")]),s._v(" "),a("h3",{attrs:{id:"指令1-指定基础镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令1-指定基础镜像"}},[s._v("#")]),s._v(" 指令1：指定基础镜像")]),s._v(" "),a("p",[s._v("通过 "),a("code",[s._v("FROM")]),s._v(" 来制定基础镜像，命令很简单，但有一点需要注意的是，一定确切指定基础镜像的版本，而不是写成 "),a("code",[s._v("latesst")]),s._v(", 因为随着时间推移，官方的最新镜像都会一直更新，这样就会造成无法构建的情况。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("FROM centos:7 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# That's perfect!")]),s._v("\nFROM centos:latest "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# That's so bad!")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"指令2-容器中执行命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令2-容器中执行命令"}},[s._v("#")]),s._v(" 指令2：容器中执行命令")]),s._v(" "),a("p",[s._v("RUN 命令用于在容器中执行命令行的命令。一般有两种写法：")]),s._v(" "),a("ul",[a("li",[s._v("shell 形式：以这种模式执行时，在容器内部是以 "),a("code",[s._v('/bin/sh -c "task command"')]),s._v(" 执行，所以 1 号进程是 bash 进程。")])]),s._v(" "),a("p",[s._v("RUN 后面直接跟 shell 命令就可以了。切记，在 shell 形式下，不要把命令拆成多行 RUN。因为每一次的 RUN 都会构建一层新的镜像，保存了很多没有用的运行信息。而且 Union FS 是由最大层数限制的。所以尽量将命令合成一行。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("RUN yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" httpd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" yum clean all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" httpd.service "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# That's perfect!")]),s._v("\n\nRUM yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" httpd / "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Another perfect solution!")]),s._v("\n    yum clean all /\n    systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" httpd.service \n\nRUN yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" httpd "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# That's so bad!")]),s._v("\nRUN yum clean all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("还有一点需要注意，把构建时没用的依赖包想着清空。否则的话，随着镜像的重复构建，保存了大量的没有信息。")]),s._v(" "),a("ul",[a("li",[s._v("exec 写法")])]),s._v(" "),a("p",[s._v("exec 写法更像函数调用中的格式。使用该模式时，进行的命令就是容器内的 1 号进程。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("RUN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"可执行文件"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"参数1"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"参数2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nRUN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yum"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-y"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"install"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"httpd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("RUN：在执行命令时会新创建一层，通常用于安装软件包"),a("br"),s._v("\nCMD：用于设置默认的执行命令，可被 container 运行时替换。如果在 DockerFile 中写入多条 CMD 命令，仅最后一条有意义。"),a("br"),s._v("\nENTRYPOINT：命令被执行时，是不可被忽略的。一般用于启动时的命令。")])]),s._v(" "),a("h3",{attrs:{id:"指令3-设置工作目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令3-设置工作目录"}},[s._v("#")]),s._v(" 指令3：设置工作目录")]),s._v(" "),a("p",[s._v("WORKDIR 用于改变各层的工作目录（也就是进入容器内的默认目录），如果指定的目录不存在就会创建它。工作目录在构建过程中，可以被各层都访问到。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("WORKDIR /src\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"指令4-设置匿名卷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令4-设置匿名卷"}},[s._v("#")]),s._v(" 指令4：设置匿名卷")]),s._v(" "),a("p",[s._v("在容器运行时，尽量对容器的存储层不进行写操作，对于像数据库中这样动态的数据文件应该用 VOLUME 来保存。而在 DockerFile VOLUME 可以将目录指定为匿名卷。这样在运行时，如果没有挂载指定的目录，并不会像容器的存储层写入数据，保证存储层的无状态化。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("VOLUME /data\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"开启-systemd-centos7-镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启-systemd-centos7-镜像"}},[s._v("#")]),s._v(" 开启 Systemd Centos7 镜像")]),s._v(" "),a("p",[s._v("官方 Centos7 的镜像已经包含了 systemd 的功能，只是没有开启。这里只需要以其为基础镜像，打开 systemd 的功能即可。需要注意的是，打开 systemd 需要在运行时开启特权以挂载 Cgroup 等内容。")]),s._v(" "),a("p",[s._v("编写 DockerFile")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost docker_images"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat Dockerfile")]),s._v("\nFROM centos:7\n\nENV container "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n\nRUN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cd /lib/systemd/system/sysinit.target.wants/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" *"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nsystemd-tmpfiles-setup.service "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /lib/systemd/system/multi-user.target.wants/*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /etc/systemd/system/*.wants/*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /lib/systemd/system/local-fs.target.wants/*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /lib/systemd/system/sockets.target.wants/*udev*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /lib/systemd/system/sockets.target.wants/*initctl*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /lib/systemd/system/basic.target.wants/*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /lib/systemd/system/anaconda.target.wants/*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nVOLUME "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/sys/fs/cgroup"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nCMD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/sbin/init"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("ul",[a("li",[s._v("VOLUME 指定了匿名目录，不会在存储层保存该目录的内容，适用于动态变化等持久性文件。")]),s._v(" "),a("li",[s._v("CMD 保证容器启动时开启 systemd")])]),s._v(" "),a("p",[s._v("打包镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" local/c7-systemd "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("--rm: 表示删除打包时临时的容器")])]),s._v(" "),a("p",[s._v("运行镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--privileged")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ti")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /sys/fs/cgroup:/sys/fs/cgroup:ro local/c7-systemd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("--privileged: 给予容器特殊的权限，来挂载 Cgroup 等。")])]),s._v(" "),a("h2",{attrs:{id:"httpd-镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httpd-镜像"}},[s._v("#")]),s._v(" Httpd 镜像")]),s._v(" "),a("p",[s._v("下面基于上面开启 systemd 的镜像为基础，打包 Httpd 镜像。")]),s._v(" "),a("p",[s._v("编写 DockerFile")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("FROM local/c7-systemd\n\nRUN yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" httpd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" yum clean all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" httpd.service\n\nEXPOSE "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("下载依赖包后，删除没有用的内容，是编写 DockerFile 好习惯。")])]),s._v(" "),a("p",[s._v("编译 DockerFile")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" local/c7-systemd-httpd "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("运行 Container")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--privileged")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ti")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /sys/fs/cgroup:/sys/fs/cgroup:ro "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 local/c7-systemd-httpd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("在下载依赖时出现网络问题，请查看 "),a("a",{attrs:{href:"https://www.cnblogs.com/michael9/p/12300824.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker 代理"),a("OutboundLink")],1),s._v(" 这篇文章。")]),s._v(" "),a("h2",{attrs:{id:"python-镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-镜像"}},[s._v("#")]),s._v(" Python 镜像")]),s._v(" "),a("p",[s._v("有时我们需要在容器中运行 python 脚本，下面来打包类似的镜像。在下载需要的依赖时，通常的服务器并没访问公网的能力，这时需要为容器配置配置代理，在下载依赖后，有时由于代理的原因，导致内部的服务器无法访问，这时可以再将设置的代理清空。")]),s._v(" "),a("p",[s._v("创建文件")]),s._v(" "),a("p",[s._v("注意，这里的文件要和 DockerFile 在同级目录下。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 requirements 文件保存依赖")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat python_shell/requirements.txt")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("requests")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.21")]),s._v(".0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编写 Python 脚本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat python_shell/success.py")]),s._v("\nprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"python Running"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("编写 DockerFile")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("FROM python:3.6.8\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# set proxy")]),s._v("\nENV "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MY_PROXY_URL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://173.60.115.117:80"')]),s._v("\nENV "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HTTP_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MY_PROXY_URL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HTTPS_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MY_PROXY_URL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FTP_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MY_PROXY_URL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("http_proxy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MY_PROXY_URL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("https_proxy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MY_PROXY_URL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ftp_proxy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MY_PROXY_URL")]),s._v("\n\nWORKDIR /src\n\nCOPY "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\nRUN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pip"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"install"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--no-cache-dir"')]),s._v(",  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-r"')]),s._v(",  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./requirements.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clear the proxy")]),s._v("\nENV "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MY_PROXY_URL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\nENV "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HTTP_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MY_PROXY_URL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HTTPS_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MY_PROXY_URL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FTP_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MY_PROXY_URL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("http_proxy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MY_PROXY_URL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("https_proxy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MY_PROXY_URL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ftp_proxy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MY_PROXY_URL")]),s._v("\n\n\nCMD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"python"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./success.py"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("打包镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" temp/python-test "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("运行镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run temp/python-test")]),s._v("\npython Running "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://docs.docker.com/engine/docker-overview/",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker-overview"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://hub.docker.com/_/centos",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker-centos-image"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://hub.docker.com/_/python",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker-python-image"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.fundebug.com/2017/05/15/write-excellent-dockerfile/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.fundebug.com/2017/05/15/write-excellent-dockerfile/"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://docs.docker.com/develop/develop-images/dockerfile_best-practices/",target:"_blank",rel:"noopener noreferrer"}},[s._v("dockerfile_best-practices"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://yeasy.gitbooks.io/docker_practice/image/build.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker-chinese-reference"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);