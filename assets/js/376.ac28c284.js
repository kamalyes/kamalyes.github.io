(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{691:function(s,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"workdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workdir"}},[s._v("#")]),s._v(" WORKDIR")]),s._v(" "),a("ul",[a("li",[s._v("切换到镜像中的指定路径，设置工作目录")]),s._v(" "),a("li",[s._v("在 WORKDIR 中需要使用绝对路径，如果镜像中对应的路径不存在，会自动创建此目录")]),s._v(" "),a("li",[s._v("一般用 WORKDIR 来替代"),a("code",[s._v("RUN cd <path>")]),s._v("切换目录进行操作的指令")]),s._v(" "),a("li",[s._v("WORKDIR 指令为 Dockerfile 中跟随它的任何 RUN、CMD、ENTRYPOINT、COPY、ADD 指令设置工作目录")]),s._v(" "),a("li",[s._v("如果 WORKDIR 不存在，即使它没有在任何后续 Dockerfile 指令中使用，它也会被创建")])]),s._v(" "),a("h3",{attrs:{id:"小栗子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小栗子"}},[s._v("#")]),s._v(" 小栗子")]),s._v(" "),a("p",[s._v("会将宿主机的 test.txt 文件复制到 镜像的 /tmp/test.txt")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("WORKDIR /tmp\nCOPY test.txt "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"使用相对路径的场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用相对路径的场景"}},[s._v("#")]),s._v(" 使用相对路径的场景")]),s._v(" "),a("p",[s._v("WORKDIR 指令可以在 Dockerfile 中多次使用\n如果提供了相对路径，它将相对于前一个 WORKDIR 指令的路径")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("WORKDIR /a\nWORKDIR b\nWORKDIR c\nRUN "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("pwd 的输出将会是 /a/b/c")]),s._v(" "),a("h4",{attrs:{id:"推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐"}},[s._v("#")]),s._v(" 推荐")]),s._v(" "),a("p",[s._v("为了避免出错，推荐WORKDIR指令中只使用绝对路径")]),s._v(" "),a("h3",{attrs:{id:"使用环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用环境变量"}},[s._v("#")]),s._v(" 使用环境变量")]),s._v(" "),a("p",[s._v("WORKDIR 指令可以使用前面 ENV 设置的环境变量")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ENV "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DIRPATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/path\nWORKDIR "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DIRPATH")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DIRNAME")]),s._v("\nRUN "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /path/$DIRNAME")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);