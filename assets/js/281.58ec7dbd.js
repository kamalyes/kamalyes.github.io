(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{596:function(a,s,t){"use strict";t.r(s);var n=t(7),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"memcached-快速入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#memcached-快速入门"}},[a._v("#")]),a._v(" Memcached 快速入门")]),a._v(" "),s("h2",{attrs:{id:"一、memcached-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、memcached-简介"}},[a._v("#")]),a._v(" 一、Memcached 简介")]),a._v(" "),s("p",[a._v("Memcached 是一个自由开源的，高性能，分布式内存对象缓存系统。")]),a._v(" "),s("p",[a._v("Memcached 是一种基于内存的 key-value 存储，用来存储小块的任意数据（字符串、对象）。这些数据可以是数据库调用、API 调用或者是页面渲染的结果。")]),a._v(" "),s("p",[a._v("Memcached 简洁而强大。它的简洁设计便于快速开发，减轻开发难度，解决了大数据量缓存的很多问题。它的 API 兼容大部分流行的开发语言。本质上，它是一个简洁的 key-value 存储系统。")]),a._v(" "),s("h3",{attrs:{id:"memcached-特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#memcached-特性"}},[a._v("#")]),a._v(" Memcached 特性")]),a._v(" "),s("p",[a._v("memcached 作为高速运行的分布式缓存服务器，具有以下的特点。")]),a._v(" "),s("ul",[s("li",[a._v("协议简单")]),a._v(" "),s("li",[a._v("基于 libevent 的事件处理")]),a._v(" "),s("li",[a._v("内置内存存储方式")]),a._v(" "),s("li",[a._v("memcached 不互相通信的分布式")])]),a._v(" "),s("h2",{attrs:{id:"二、memcached-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、memcached-命令"}},[a._v("#")]),a._v(" 二、Memcached 命令")]),a._v(" "),s("p",[a._v("可以通过 telnet 命令并指定主机 ip 和端口来连接 Memcached 服务。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("telnet 127.0.0.1 11211\n\nTrying 127.0.0.1...\nConnected to 127.0.0.1.\nEscape character is '^]'.\nset foo 0 0 3                                                   保存命令\nbar                                                             数据\nSTORED                                                          结果\nget foo                                                         取得命令\nVALUE foo 0 3                                                   数据\nbar                                                             数据\nEND                                                             结束行\nquit                                                            退出\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("h2",{attrs:{id:"三、java-连接-memcached"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、java-连接-memcached"}},[a._v("#")]),a._v(" 三、Java 连接 Memcached")]),a._v(" "),s("p",[a._v("使用 Java 程序连接 Memcached，需要在你的 classpath 中添加 Memcached jar 包。")]),a._v(" "),s("p",[a._v("本站 jar 包下载地址："),s("a",{attrs:{href:"https://www.runoob.com/try/download/spymemcached-2.10.3.jar",target:"_blank",rel:"noopener noreferrer"}},[a._v("spymemcached-2.10.3.jar"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("p",[a._v("Google Code jar 包下载地址："),s("a",{attrs:{href:"http://code.google.com/p/spymemcached/downloads/list",target:"_blank",rel:"noopener noreferrer"}},[a._v("spymemcached-2.10.3.jar"),s("OutboundLink")],1),a._v("（需要科学上网）。")]),a._v(" "),s("p",[a._v("以下程序假定 Memcached 服务的主机为 127.0.0.1，端口为 11211。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("spy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("memcached"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MemcachedClient")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MemcachedJava")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 本地连接 Memcached 服务")]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MemcachedClient")]),a._v(" mcc "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MemcachedClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("InetSocketAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11211")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Connection to server sucessful."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n         "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 关闭连接")]),a._v("\n         mcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("shutdown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),a._v(" ex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" ex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br")])]),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://memcached.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Memcached 官网"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/memcached/memcached/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Memcached Github"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.runoob.com/memcached/memcached-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Memcached 教程"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);