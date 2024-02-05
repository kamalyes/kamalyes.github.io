(window.webpackJsonp=window.webpackJsonp||[]).push([[381],{697:function(s,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[s._v("#")]),s._v(" USER")]),s._v(" "),a("p",[s._v("指定运行容器时的用户名或 UID，后续的RUN等指令也会使用指定的用户身份")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n或\n"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("UID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("GID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"小栗子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小栗子"}},[s._v("#")]),s._v(" 小栗子")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" www\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("当容器中运行的服务不需要管理员权限时，可以先建立一个特定的用户和用户组，为它分配必要的权限，使用 USER 切换到这个用户")]),s._v(" "),a("h3",{attrs:{id:"重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重点"}},[s._v("#")]),s._v(" 重点")]),s._v(" "),a("ul",[a("li",[s._v("使用 USER 指定用户时，可以使用用户名、UID 或 GID，或是两者的组合")]),s._v(" "),a("li",[s._v("使用 USER 指定用户后，Dockerfile 中后续的命令 RUN、CMD、ENTRYPOINT 都将使用该用户")])]),s._v(" "),a("h3",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("ul",[a("li",[s._v("在 Windows 上，如果用户不是内置帐户，则必须先创建该用户")]),s._v(" "),a("li",[s._v("可以通过 Dockerfile 的 RUN net user 命令来完成")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("FROM microsoft/windowsservercore\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在容器创建新用户")]),s._v("\nRUN net user /add patrick\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" patrick\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"也可以使用-docker-run-u-指定用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#也可以使用-docker-run-u-指定用户"}},[s._v("#")]),s._v(" 也可以使用 docker run -u 指定用户")]),s._v(" "),a("ul",[a("li",[s._v("替代默认设置的用户")]),s._v(" "),a("li",[s._v("可以使用 uid 来指定用户")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" busybox "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);