(window.webpackJsonp=window.webpackJsonp||[]).push([[546],{861:function(s,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("学习阶段fork或者创建了很多仓库，现在密密麻麻，想要删除但是需要一个个寻找点击确认。"),a("br"),s._v("\n删除需要多次确认这个设计本身是没有任何问题的，但是在这样的场景下却需要一个更加快捷的方案。")]),s._v(" "),a("p",[s._v("查找之后，了解到可以通过脚本的方式调用restful api的方式来进行处理。"),a("br"),s._v("\n点击查看文档："),a("a",{attrs:{href:"https://docs.github.com/en/rest/reference/repos#delete-a-repository",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方restful地址"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("流程很简单：")]),s._v(" "),a("ol",[a("li",[s._v("生成具有删除权限的token")]),s._v(" "),a("li",[s._v("打开命令行，运行命令")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XDELETE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Authorization: token 占位token"')]),s._v(" https://api.github.com/repos/账号或组织名称/仓库名称\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("注意这里请求的是"),a("code",[s._v("https://api.")]),s._v("前缀，而不直接是原来的仓库路径，请求实例")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XDELETE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Authorization: token ghp_slq6ef3k4DkDyoh6cmKK5MUAsVBSTE0"')]),s._v(" https://api.github.com/repos/zealpane/git-knowledge\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("下面详细说明步骤")]),s._v(" "),a("h3",{attrs:{id:"_1-获取token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取token"}},[s._v("#")]),s._v(" 1. 获取token")]),s._v(" "),a("p",[s._v("访问地址："),a("a",{attrs:{href:""}},[s._v("https://github.com/settings/tokens")]),a("br"),s._v(" "),a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/backend/f53468a817da4a6996b99affb1eace59.png",alt:"在这里插入图片描述"}}),a("br"),s._v("\n点击"),a("code",[s._v("Generate new token")]),s._v("按钮，选择有效期限"),a("br"),s._v("\n勾选")]),s._v(" "),a("ul",[a("li",[s._v("[x]  delete_repo Delete repositories")])]),s._v(" "),a("p",[s._v("然后点击"),a("code",[s._v("Generate token")]),s._v("，然后复制生成的token即可")]),s._v(" "),a("h3",{attrs:{id:"_2-基础用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-基础用法"}},[s._v("#")]),s._v(" 2. 基础用法")]),s._v(" "),a("p",[s._v("删除的基本语法如下")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XDELETE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Authorization: token 占位token"')]),s._v(" https://api.github.com/repos/账号或组织名称/仓库名称\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果要删除的不多，")]),s._v(" "),a("h3",{attrs:{id:"_3-批量删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-批量删除"}},[s._v("#")]),s._v(" 3. 批量删除")]),s._v(" "),a("p",[s._v("基本思路就是使用for循环遍历，当然写多行curl也是可以的")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("@echo off\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等号后面是具体的仓库名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("list")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Groza code-e\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("for %%a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("%list%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" https://api.github.com/repos/账号或组织名称/%%a\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XDELETE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Authorization: token 我的token"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" c.txt https://api.github.com/repos/账号或组织名称/%%a\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("操作非常顺滑，一下子清爽了很多。"),a("br"),s._v("\n如果仓库实在太多，不想一个一个复制，可以通过这个接口获取所有仓库地址，然后再在本地处理匹配取出目标名称")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Authorization: token github_pat_xu1RPEFWbNSoTWBtTCeTxMz"')]),s._v(" https://api.github.com/user/repos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" repos.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("会得到以下类似文件\n"),a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/backend/20230225113019.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"_4-其它操作系统思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-其它操作系统思路"}},[s._v("#")]),s._v(" 4. 其它操作系统思路")]),s._v(" "),a("p",[s._v("如果需要在linux上实现也是一样的思路，"),a("code",[s._v("curl")]),s._v("命令在linux上也是可以使用的。只需要按照linux上的for命令来进行改造即可")])])}),[],!1,null,null,null);a.default=r.exports}}]);