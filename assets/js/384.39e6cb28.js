(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{700:function(s,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"一段话总结完-copy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一段话总结完-copy"}},[s._v("#")]),s._v(" 一段话总结完 COPY")]),s._v(" "),a("ul",[a("li",[s._v("作用：复制内容到镜像")]),s._v(" "),a("li",[s._v("格式：COPY "),a("code",[s._v("<src> <dest>")])]),s._v(" "),a("li",[s._v("详解：复制本地主机的"),a("code",[s._v("<src>")]),s._v("下内容到镜像中的 "),a("code",[s._v("<dest>")]),s._v("，目标路径不存在时，会自动创建。\n-"),a("code",[s._v("<src>")]),s._v("：可以是Dockerfile 所在目录的一个相对路径（文件或目录）")]),s._v(" "),a("li",[a("code",[s._v("<dest>")]),s._v("：可以是镜像内绝对路径，或者相对于工作目录（WORKDIR）的相对路径")]),s._v(" "),a("li",[s._v("路径：支持正则表达式，COPY test* /tmp")])]),s._v(" "),a("h3",{attrs:{id:"两种格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两种格式"}},[s._v("#")]),s._v(" 两种格式")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("COPY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--chown"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("dest"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nCOPY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--chown"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("dest"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"chown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chown"}},[s._v("#")]),s._v(" --chown")]),s._v(" "),a("p",[s._v("仅适用于 linux 上的 dockerfile，在 window 上没有用户、组的概念")]),s._v(" "),a("h4",{attrs:{id:"copy-作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy-作用"}},[s._v("#")]),s._v(" COPY 作用")]),s._v(" "),a("ul",[a("li",[s._v("COPY 指令从 "),a("code",[s._v("<src>")]),s._v("复制新文件、目录或远程文件 URL，并将它们添加到路径 "),a("code",[s._v("<dest>")])]),s._v(" "),a("li",[s._v("可以指定多个 "),a("code",[s._v("<src>")]),s._v("资源，但如果它们是文件或目录，则它们的路径被解析为相对于构建上下文的源")]),s._v(" "),a("li",[s._v("每个 "),a("code",[s._v("<src>")]),s._v("可能包含通配符，匹配将使用 Go 的 filepath.Match 规则完成")])]),s._v(" "),a("h3",{attrs:{id:"简单栗子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单栗子"}},[s._v("#")]),s._v(" 简单栗子")]),s._v(" "),a("h4",{attrs:{id:"通配符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通配符"}},[s._v("#")]),s._v(" * 通配符")]),s._v(" "),a("p",[s._v("把所有 hom 开头的文件复制到镜像文件系统的 /mydir/ 目录下")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("COPY hom* /mydir/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"通配符-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通配符-2"}},[s._v("#")]),s._v(" ? 通配符")]),s._v(" "),a("p",[s._v("? 匹配 0 或 1 个字符，比如会把 home.txt 文件复制到 /mydir/ 目录下")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("COPY hom?.txt /mydir/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重点"}},[s._v("#")]),s._v(" 重点")]),s._v(" "),a("p",[a("code",[s._v("<dest>")]),s._v(" 是绝对路径，或相对于 WORKDIR 的路径，源将在目标容器内复制到该路径中")]),s._v(" "),a("h4",{attrs:{id:"使用相对路径的栗子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用相对路径的栗子"}},[s._v("#")]),s._v(" 使用相对路径的栗子")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("COPY test.txt relativeDir/\n等价于\nCOPY test.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("WORKDIR"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/relativeDir/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"使用绝对路径的栗子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用绝对路径的栗子"}},[s._v("#")]),s._v(" 使用绝对路径的栗子")]),s._v(" "),a("p",[s._v("将 test.txt 添加到 /absoluteDir/ 目录下")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("COPY test.txt /absoluteDir/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"包含特殊字符的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包含特殊字符的文件"}},[s._v("#")]),s._v(" 包含特殊字符的文件")]),s._v(" "),a("p",[s._v("添加名为 arr[0].txt 的文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("COPY arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(".txt /mydir/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"标志-from-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标志-from-name"}},[s._v("#")]),s._v(" 标志 "),a("code",[s._v("--from=<name>")])]),s._v(" "),a("p",[s._v("将从 from 指定的构建阶段中寻找源文件 "),a("code",[s._v("<src>")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第一构建阶段:将仅用于生成 requirements.txt 文件")]),s._v("\nFROM tiangolo/uvicorn-gunicorn:python3.9 as requirements-stage\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将当前工作目录设置为 /tmp")]),s._v("\nWORKDIR /tmp\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成 requirements.txt")]),s._v("\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" requirements.txt\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第二构建阶段，在这往后的任何内容都将保留在最终容器映像中")]),s._v("\nFROM python:3.9\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将当前工作目录设置为 /code")]),s._v("\nWORKDIR /code\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从第一个阶段复制 requirements.txt;这个文件只存在于前一个 Docker 阶段，这就是使用 --from-requirements-stage 复制它的原因")]),s._v("\nCOPY "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--from")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("requirements-stage /tmp/requirements.txt /code/requirements.txt\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行命令")]),s._v("\nRUN pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --no-cache-dir "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--upgrade")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" /code/requirements.txt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("br"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h3",{attrs:{id:"copy-遵循的规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy-遵循的规则"}},[s._v("#")]),s._v(" COPY 遵循的规则")]),s._v(" "),a("h4",{attrs:{id:"src-路径必须在构建的上下文中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-路径必须在构建的上下文中"}},[s._v("#")]),s._v(" "),a("code",[s._v("<src>")]),s._v("路径必须在构建的上下文中")]),s._v(" "),a("p",[s._v("不能添加 ../something、&nbsp/something，因为 docker 构建的第一步是将上下文目录（和子目录）发送到 docker 守护进程")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# test.txt 是相对路径，相对于构建上下文")]),s._v("\nCOPY test.txt /mkdir/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 错误写法，文件均不在上下文目录中，并不会被找到")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个找的就是构建上下文的上级目录的 test.txt")]),s._v("\nCOPY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/test.txt /mkdir/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个找的是本机根目录下的 test.txt")]),s._v("\nCOPY /test.txt /mkdir/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h4",{attrs:{id:"src-是目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-是目录"}},[s._v("#")]),s._v(" "),a("code",[s._v("<src>")]),s._v("是目录")]),s._v(" "),a("ul",[a("li",[s._v("则复制目录的全部内容，包括文件系统元数据")]),s._v(" "),a("li",[s._v("不会复制目录本身，只会复制其内容")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("COPY "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" /mydir/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"src-是任何其他类型的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-是任何其他类型的文件"}},[s._v("#")]),s._v(" "),a("code",[s._v("<src>")]),s._v("是任何其他类型的文件")]),s._v(" "),a("ul",[a("li",[s._v("则将其与其元数据一起单独复制")]),s._v(" "),a("li",[a("code",[s._v("<dest>")]),s._v(" 以斜杠 / 结尾，它将被视为一个目录，并且 "),a("code",[s._v("<src>")]),s._v("的内容将写入"),a("code",[s._v("<dest>/base(<src>)")])])]),s._v(" "),a("h4",{attrs:{id:"指定了多个-src-资源-或者由于使用了通配符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定了多个-src-资源-或者由于使用了通配符"}},[s._v("#")]),s._v(" 指定了多个 "),a("code",[s._v("<src>")]),s._v("资源，或者由于使用了通配符")]),s._v(" "),a("p",[s._v("则 "),a("code",[s._v("<dest>")]),s._v(" 必须是一个目录，并且必须以斜杠 / 结尾")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("COPY test1.txt test2.txt /mydir/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"dest-不以斜杠结尾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dest-不以斜杠结尾"}},[s._v("#")]),s._v(" "),a("code",[s._v("<dest>")]),s._v(" 不以斜杠结尾")]),s._v(" "),a("p",[s._v("它将被视为常规文件，并且 "),a("code",[s._v("<src>")]),s._v("的内容将写入 "),a("code",[s._v("<dest>")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("COPY test.txt /mytext\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"dest-不存在"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dest-不存在"}},[s._v("#")]),s._v(" "),a("code",[s._v("<dest>")]),s._v(" 不存在")]),s._v(" "),a("p",[s._v("路径中所有缺失的目录都会自动创建")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("COPY test.txt /dir/test/my/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("p",[a("code",[s._v("<src>")]),s._v("的内容发生变化，第一个遇到的 COPY 指令将使来自 Dockerfile 的所有后续指令的缓存无效，这包括使 RUN 指令的缓存无效")]),s._v(" "),a("h3",{attrs:{id:"完整练习的-dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整练习的-dockerfile"}},[s._v("#")]),s._v(" 完整练习的 dockerfile")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("FROM centos\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加文件到目录下")]),s._v("\nCOPY test.txt /mydir/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将文件内容写入 mytest")]),s._v("\nCOPY test.txt /mytest\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 压缩文件,自动解压")]),s._v("\nCOPY jmeter.log.zip /myzipdir/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加目录")]),s._v("\nCOPY TeamFile /\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 其他文件")]),s._v("\nCOPY jmeter.log /mydir/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 多个文件")]),s._v("\nCOPY test1.txt test2.txt /mydir/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通配符,dest 不存在自动创建")]),s._v("\nCOPY test*.txt /mydir/test/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 特殊字符串")]),s._v("\nCOPY COPY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(".txt /mydir/\n\nWORKDIR /data\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 相对路径")]),s._v("\nCOPY test.txt test/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h3",{attrs:{id:"add-和-copy-的区别和使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-和-copy-的区别和使用场景"}},[s._v("#")]),s._v(" ADD 和 COPY 的区别和使用场景")]),s._v(" "),a("ul",[a("li",[s._v("ADD 支持添加远程 url 和自动提取压缩格式的文件，COPY 只允许从本机中复制文件")]),s._v(" "),a("li",[s._v("COPY 支持从其他构建阶段中复制源文件（--from）")]),s._v(" "),a("li",[s._v("根据官方 Dockerfile 最佳实践，除非真的需要从远程 url 添加文件或自动提取压缩文件才用 ADD，其他情况一律使用 COPY")])]),s._v(" "),a("h4",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),a("ul",[a("li",[s._v("ADD 从远程 url 获取文件和复制的效果并不理想，因为该文件会增加 Docker Image 最终的大小")]),s._v(" "),a("li",[s._v("相反，应该使用 curl huo wget 来获取远程文件，然后在不需要它时进行删除")])])])}),[],!1,null,null,null);a.default=r.exports}}]);