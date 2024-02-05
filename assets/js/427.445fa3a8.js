(window.webpackJsonp=window.webpackJsonp||[]).push([[427],{742:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"安装-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker"}},[s._v("#")]),s._v(" 安装 docker")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum update "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum 更新升级")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" yum-utils device-mapper-persistent-data lvm2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装前置工具")]),s._v("\nyum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置yum源")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装docker")]),s._v("\nsystemctl start "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动docker")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置开机启动")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" version "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查是否安装成功")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加速镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 阿里云（需要登录账号分配地址）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网易云 https://vgunv6qp.mirror.aliyuncs.com")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 腾讯云 https://mirror.ccs.tencentyun.com")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 中科大 https://docker.mirrors.ustc.edu.cn")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker中国 https://registry.docker-cn.com")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /etc/docker\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/docker/daemon.json "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'EOF\'\n{\n    "registry-mirrors": [\n        "https://mirror.ccs.tencentyun.com",\n        "https://docker.mirrors.ustc.edu.cn",\n        "https://registry.docker-cn.com"\n    ]\n}\nEOF')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新加载配置并启动docker")]),s._v("\nsystemctl daemon-reload\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--now")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" version "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v("[1;32m"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${Version}")]),s._v("安装成功！"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v('[0m"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\033[1;31m安装失败！\\033[0m'")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("h1",{attrs:{id:"安装dockercompose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装dockercompose"}},[s._v("#")]),s._v(" 安装DockerCompose")]),s._v(" "),t("h4",{attrs:{id:"第一种-下载直接移动到-usr-bin目录下-加上执行权限即可"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一种-下载直接移动到-usr-bin目录下-加上执行权限即可"}},[s._v("#")]),s._v(" 第一种："),t("a",{attrs:{href:"https://github.com/docker/compose/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载"),t("OutboundLink")],1),s._v("直接移动到"),t("code",[s._v("/usr/bin")]),s._v("目录下，加上执行权限即可")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@harbor ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv docker-compose-Linux-x86_64 /usr/bin/docker-compose")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@harbor ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod +x /usr/bin/docker-compose")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@harbor ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll /usr/bin/docker-compose")]),s._v("\n-rwxr-xr-x "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12211728")]),s._v(" Mar  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":30 /usr/bin/docker-compose\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@harbor ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose -v")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" version "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.28")]),s._v(".5, build c4eb3a1f\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h4",{attrs:{id:"第二种方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二种方式"}},[s._v("#")]),s._v(" 第二种方式")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--upgrade")]),s._v(" pip\npip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --ignore-installed requests\npip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装docker-compose")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 若报错则执行以下命令")]),s._v("\nInstalling collected packages: requests\n  Attempting uninstall: requests\n    Found existing installation: requests "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.6")]),s._v(".0\nERROR: Cannot uninstall "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'requests'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" It is a distutils installed project and thus we cannot accurately determine "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" files belong to it "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" would lead to only a partial uninstall.\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-12-15-centos Download"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pip install --ignore-installed requests")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pip: command not found解决办法")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://bootstrap.pypa.io/get-pip.py'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" get-pip.py "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# python3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://bootstrap.pypa.io/pip/2.7/get-pip.py'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" get-pip.py "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# python2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" python get-pip.py\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" easy_install pip\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 简历软连接")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sv")]),s._v(" /usr/local/python/bin/pip /usr/bin/pip\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);