(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{683:function(e,r,t){"use strict";t.r(r);var a=t(7),s=Object(a.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[e._v("#")]),e._v(" 背景")]),e._v(" "),r("ul",[r("li",[e._v("目前项目组上， Docker 用的非常重，所有微服务都是通过 docker 来部署的")]),e._v(" "),r("li",[e._v("所以不能仅仅会命令，还得会一些原理的东西，特此补一篇基础点的，后面再更加深入一些 docker 原理")])]),e._v(" "),r("h2",{attrs:{id:"hello-world-的栗子"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-的栗子"}},[e._v("#")]),e._v(" hello world 的栗子")]),e._v(" "),r("p",[e._v("直接在命令行敲")]),e._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run hello-world\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("h2",{attrs:{id:"docker-的底层原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-的底层原理"}},[e._v("#")]),e._v(" docker 的底层原理")]),e._v(" "),r("h3",{attrs:{id:"docker-是如何工作的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-是如何工作的"}},[e._v("#")]),e._v(" docker 是如何工作的?")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("docker 是一个 C/S 结构的系统")])]),e._v(" "),r("li",[r("p",[e._v("docker 的守护进程运行在主机上")])]),e._v(" "),r("li",[r("p",[e._v("通过 Socket 从客户端访问")])]),e._v(" "),r("li",[r("p",[e._v("docker-Server 接收到 docker-Client的指令，就会执行这个命令")])]),e._v(" "),r("li",[r("p",[e._v("docker-client：可以理解为 cmd 窗口，或者是 docker 桌面版，在上面敲 docker 命令")])]),e._v(" "),r("li",[r("p",[e._v("docker-host：其实就是 docker-server，里面包含了守护进程、容器、镜像")])]),e._v(" "),r("li",[r("p",[e._v("docker daemon：就是守护进程，收到命令后就会去执行命令")])]),e._v(" "),r("li",[r("p",[e._v("Linux 服务器敲 docker 命令（客户端）")])]),e._v(" "),r("li",[r("p",[e._v("客户端访问 docker 的后台守护进程")])]),e._v(" "),r("li",[r("p",[e._v("后台守护进程来执行命令，作用于不用的 docker 容器")])])])])}),[],!1,null,null,null);r.default=s.exports}}]);