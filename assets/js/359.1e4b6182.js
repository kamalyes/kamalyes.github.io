(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{674:function(t,s,a){"use strict";a.r(s);var e=a(7),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("strong",[t._v("如果你还想从头学起 Docker，可以看看这个系列的文章哦！")])]),t._v(" "),s("h2",{attrs:{id:"作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),s("p",[t._v("将本地的镜像或上传到镜像仓库，要先登录到镜像仓库")]),t._v(" "),s("h4",{attrs:{id:"上传本地镜像的前置操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传本地镜像的前置操作"}},[t._v("#")]),t._v(" 上传本地镜像的前置操作")]),t._v(" "),s("ul",[s("li",[t._v("注册 Docker hub 账号")]),t._v(" "),s("li",[t._v("Linux 登录 Docker hub 账号")]),t._v(" "),s("li",[t._v("给镜像设置 TAG")])]),t._v(" "),s("h2",{attrs:{id:"语法格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法格式"}},[t._v("#")]),t._v(" 语法格式")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":TAG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("options")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("--disable-content-trust")]),t._v(" "),s("td",[t._v("忽略镜像的校验,默认开启")])])])]),t._v(" "),s("h2",{attrs:{id:"实际栗子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实际栗子"}},[t._v("#")]),t._v(" 实际栗子")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" push jenkins/jenkins\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"重点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重点"}},[t._v("#")]),t._v(" 重点")]),t._v(" "),s("ul",[s("li",[t._v("kamalyes/jenkins ，为什么会起这个名字，因为 kamalyes 是我在 Docker Hub 注册的账号名（Docker ID）")]),t._v(" "),s("li",[t._v("如果前面不写存在的账号名（需要已登录），或者写了但没有 docker login 登录这个账号的话，均会报权限错误的问题哦")])]),t._v(" "),s("h4",{attrs:{id:"权限错误解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#权限错误解决方案"}},[t._v("#")]),t._v(" 权限错误解决方案")]),t._v(" "),s("p",[t._v("docker push 的时候报错：denied: requested access to the resource is denied")]),t._v(" "),s("h4",{attrs:{id:"进入-docker-hub-查看上传的镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入-docker-hub-查看上传的镜像"}},[t._v("#")]),t._v(" 进入 Docker Hub 查看上传的镜像")]),t._v(" "),s("p",[t._v("访问："),s("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener"}},[t._v("https://hub.docker.com/")]),t._v("，登录自己的账号\n 能看到刚刚上传的镜像，此时这个镜像是公开的，你可以在其他地方进行拉取哦")])])}),[],!1,null,null,null);s.default=r.exports}}]);