(window.webpackJsonp=window.webpackJsonp||[]).push([[558],{874:function(s,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"hdfs-运维"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hdfs-运维"}},[s._v("#")]),s._v(" HDFS 运维")]),s._v(" "),a("h2",{attrs:{id:"hdfs-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hdfs-命令"}},[s._v("#")]),s._v(" HDFS 命令")]),s._v(" "),a("h3",{attrs:{id:"显示当前目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示当前目录结构"}},[s._v("#")]),s._v(" 显示当前目录结构")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示当前目录结构")]),s._v("\nhdfs dfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 递归显示当前目录结构")]),s._v("\nhdfs dfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示根目录下内容")]),s._v("\nhdfs dfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ls")]),s._v(" /\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"创建目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建目录"}},[s._v("#")]),s._v(" 创建目录")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建目录")]),s._v("\nhdfs dfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 递归创建目录")]),s._v("\nhdfs dfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"删除操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除操作"}},[s._v("#")]),s._v(" 删除操作")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除文件")]),s._v("\nhdfs dfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 递归删除目录和文件")]),s._v("\nhdfs dfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"导入文件到-hdfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入文件到-hdfs"}},[s._v("#")]),s._v(" 导入文件到 HDFS")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 二选一执行即可")]),s._v("\nhdfs dfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-put")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("localsrc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dst"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nhdfs dfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-copyFromLocal")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("localsrc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dst"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"从-hdfs-导出文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从-hdfs-导出文件"}},[s._v("#")]),s._v(" 从 HDFS 导出文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 二选一执行即可")]),s._v("\nhdfs dfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dst"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("localsrc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nhdfs dfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-copyToLocal")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dst"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("localsrc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"查看文件内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看文件内容"}},[s._v("#")]),s._v(" 查看文件内容")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 二选一执行即可")]),s._v("\nhdfs dfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-text")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nhdfs dfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"显示文件的最后一千字节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示文件的最后一千字节"}},[s._v("#")]),s._v(" 显示文件的最后一千字节")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("hdfs dfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-tail")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 和Linux下一样，会持续监听文件内容变化 并显示文件的最后一千字节")]),s._v("\nhdfs dfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-tail")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"拷贝文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拷贝文件"}},[s._v("#")]),s._v(" 拷贝文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("hdfs dfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-cp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dst"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"移动文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动文件"}},[s._v("#")]),s._v(" 移动文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("hdfs dfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-mv")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dst"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"统计当前目录下各文件大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统计当前目录下各文件大小"}},[s._v("#")]),s._v(" 统计当前目录下各文件大小")]),s._v(" "),a("ul",[a("li",[s._v("默认单位字节")]),s._v(" "),a("li",[s._v("-s : 显示所有文件大小总和，")]),s._v(" "),a("li",[s._v("-h : 将以更友好的方式显示文件大小（例如 64.0m 而不是 67108864）")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("hdfs dfs -du <path>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"合并下载多个文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并下载多个文件"}},[s._v("#")]),s._v(" 合并下载多个文件")]),s._v(" "),a("ul",[a("li",[s._v("-nl 在每个文件的末尾添加换行符（LF）")]),s._v(" "),a("li",[s._v("-skip-empty-file 跳过空文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("hdfs dfs -getmerge\n# 示例 将HDFS上的hbase-policy.xml和hbase-site.xml文件合并后下载到本地的/usr/test.xml\nhdfs dfs -getmerge -nl  /test/hbase-policy.xml /test/hbase-site.xml /usr/test.xml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"统计文件系统的可用空间信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统计文件系统的可用空间信息"}},[s._v("#")]),s._v(" 统计文件系统的可用空间信息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("hdfs dfs -df -h /\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"更改文件复制因子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改文件复制因子"}},[s._v("#")]),s._v(" 更改文件复制因子")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("hdfs dfs -setrep [-R] [-w] <numReplicas> <path>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("更改文件的复制因子。如果 path 是目录，则更改其下所有文件的复制因子")]),s._v(" "),a("li",[s._v("-w : 请求命令是否等待复制完成")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 示例\nhdfs dfs -setrep -w 3 /user/hadoop/dir1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"权限控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限控制"}},[s._v("#")]),s._v(" 权限控制")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 权限控制和Linux上使用方式一致\n# 变更文件或目录的所属群组。 用户必须是文件的所有者或超级用户。\nhdfs dfs -chgrp [-R] GROUP URI [URI ...]\n# 修改文件或目录的访问权限  用户必须是文件的所有者或超级用户。\nhdfs dfs -chmod [-R] <MODE[,MODE]... | OCTALMODE> URI [URI ...]\n# 修改文件的拥有者  用户必须是超级用户。\nhdfs dfs -chown [-R] [OWNER][:[GROUP]] URI [URI ]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"文件检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件检测"}},[s._v("#")]),s._v(" 文件检测")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("hdfs dfs -test - [defsz]  URI\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可选选项：")]),s._v(" "),a("ul",[a("li",[s._v("-d：如果路径是目录，返回 0。")]),s._v(" "),a("li",[s._v("-e：如果路径存在，则返回 0。")]),s._v(" "),a("li",[s._v("-f：如果路径是文件，则返回 0。")]),s._v(" "),a("li",[s._v("-s：如果路径不为空，则返回 0。")]),s._v(" "),a("li",[s._v("-r：如果路径存在且授予读权限，则返回 0。")]),s._v(" "),a("li",[s._v("-w：如果路径存在且授予写入权限，则返回 0。")]),s._v(" "),a("li",[s._v("-z：如果文件长度为零，则返回 0。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 示例\nhdfs dfs -test -e filename\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"hdfs-安全模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hdfs-安全模式"}},[s._v("#")]),s._v(" HDFS 安全模式")]),s._v(" "),a("h3",{attrs:{id:"什么是安全模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是安全模式"}},[s._v("#")]),s._v(" 什么是安全模式？")]),s._v(" "),a("ul",[a("li",[s._v("安全模式是 HDFS 的一种特殊状态，在这种状态下，HDFS 只接收读数据请求，而不接收写入、删除、修改等变更请求。")]),s._v(" "),a("li",[s._v("安全模式是 HDFS 确保 Block 数据安全的一种保护机制。")]),s._v(" "),a("li",[s._v("Active NameNode 启动时，HDFS 会进入安全模式，DataNode 主动向 NameNode 汇报可用 Block 列表等信息，在系统达到安全标准前，HDFS 一直处于“只读”状态。")])]),s._v(" "),a("h3",{attrs:{id:"何时正常离开安全模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#何时正常离开安全模式"}},[s._v("#")]),s._v(" 何时正常离开安全模式")]),s._v(" "),a("ul",[a("li",[s._v("Block 上报率：DataNode 上报的可用 Block 个数 / NameNode 元数据记录的 Block 个数")]),s._v(" "),a("li",[s._v("当 Block 上报率 >= 阈值时，HDFS 才能离开安全模式，默认阈值为 0.999")]),s._v(" "),a("li",[s._v("不建议手动强制退出安全模式")])]),s._v(" "),a("h3",{attrs:{id:"触发安全模式的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#触发安全模式的原因"}},[s._v("#")]),s._v(" 触发安全模式的原因")]),s._v(" "),a("ul",[a("li",[s._v("NameNode 重启")]),s._v(" "),a("li",[s._v("NameNode 磁盘空间不足")]),s._v(" "),a("li",[s._v("Block 上报率低于阈值")]),s._v(" "),a("li",[s._v("DataNode 无法正常启动")]),s._v(" "),a("li",[s._v("日志中出现严重异常")]),s._v(" "),a("li",[s._v("用户操作不当，如："),a("strong",[s._v("强制关机（特别注意！）")])])]),s._v(" "),a("h3",{attrs:{id:"故障排查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#故障排查"}},[s._v("#")]),s._v(" 故障排查")]),s._v(" "),a("ul",[a("li",[s._v("找到 DataNode 不能正常启动的原因，重启 DataNode")]),s._v(" "),a("li",[s._v("清理 NameNode 磁盘")]),s._v(" "),a("li",[s._v("谨慎操作，有问题找星环，以免丢失数据")])]),s._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("HDFS 官方文档"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/caiyisen/p/7395843.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("HDFS 知识点总结"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);