(window.webpackJsonp=window.webpackJsonp||[]).push([[402],{717:function(s,a,t){"use strict";t.r(a);var r=t(7),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"java-中日志框架的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-中日志框架的使用"}},[s._v("#")]),s._v(" Java 中日志框架的使用")]),s._v(" "),a("h2",{attrs:{id:"日志定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志定义"}},[s._v("#")]),s._v(" 日志定义：")]),s._v(" "),a("p",[s._v("在计算机领域，日志文件（logfile）是一个记录了发生在运行中的操作系统或其它软件中的事件的文件，或者记录了在网络聊天软件的用户之间发送的消息。")]),s._v(" "),a("p",[s._v("日志记录（Logging）：是指保存日志的行为。最简单的做法是将日志写入单个存放日志的文件。")]),s._v(" "),a("p",[s._v("日志级别优先级：")]),s._v(" "),a("p",[a("code",[s._v("ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < OFF")])]),s._v(" "),a("h2",{attrs:{id:"日志框架的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志框架的作用"}},[s._v("#")]),s._v(" 日志框架的作用：")]),s._v(" "),a("p",[s._v("①：跟踪用户对系统访问，记录了系统行为的时间、地点、状态等相关信息，能够帮助我们了解并监控系统状态")]),s._v(" "),a("p",[s._v("②：进行统计")]),s._v(" "),a("p",[s._v("③：进行 Debug，在系统产生问题时，能够帮助我们快速的定位、诊断并解决问题。")]),s._v(" "),a("p",[s._v("在发生错误或者接近某种危险状态时能够及时提醒我们处理")]),s._v(" "),a("h2",{attrs:{id:"常用的日志框架类别简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用的日志框架类别简介"}},[s._v("#")]),s._v(" 常用的日志框架类别简介：")]),s._v(" "),a("p",[a("strong",[s._v("Log4j")]),s._v(" Apache Log4j 是一个基于 Java 的日志记录工具。它是由"),a("code",[s._v("Ceki Gülcü")]),s._v("首创的，现在则是 Apache 软件基金会的一个项目。 Log4j 是几种 Java 日志框架之一。")]),s._v(" "),a("p",[a("strong",[s._v("Log4j 2")]),s._v(" Apache Log4j 2 是 apache 开发的一款 Log4j 的升级产品，Log4j 被 apache 收购，升级，改为 log4j2，框架改动很大，只是借用之名。")]),s._v(" "),a("p",[a("strong",[s._v("JCL （Jakarta Commons Logging）")]),s._v(" Apache 基金会所属的项目，是一套 Java 日志接口，之前叫 Jakarta Commons Logging，后更名为 Commons Logging。")]),s._v(" "),a("p",[a("strong",[s._v("Slf4j（Simple Logging Facade for Java）")]),s._v(" 类似于 Commons Logging，是一套简易 Java 日志门面，本身并无日志的实现。")]),s._v(" "),a("p",[a("strong",[s._v("Logback")]),s._v(" 一套日志组件的实现(slf4j 阵营)。")]),s._v(" "),a("p",[a("strong",[s._v("JUL")]),s._v(" (Java Util Logging),自 Java1.4 以来的官方日志实现，已被淘汰。")]),s._v(" "),a("p",[a("strong",[s._v("jboss-logging")]),s._v(" 等。")]),s._v(" "),a("p",[s._v("Spring 框架内部使用的日志框架是 "),a("code",[s._v("JCL (Jakarta Commons Logging)")])]),s._v(" "),a("p",[s._v("Mybatis 框架中使用的是 "),a("code",[s._v("Log4j")])]),s._v(" "),a("p",[s._v("Hibernate 框架中使用的是 "),a("code",[s._v("jboss-logging")])]),s._v(" "),a("p",[s._v("Springboot 底层使用的是 "),a("code",[s._v("SLF4j + Logback")])]),s._v(" "),a("p",[s._v("（Log4j，Logback，SLF4j 都是同一个作者。）")]),s._v(" "),a("h2",{attrs:{id:"问题引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题引入"}},[s._v("#")]),s._v(" 问题引入：")]),s._v(" "),a("p",[s._v("市场上存在非常多的日志框架。每一种日志框架都有自己单独的 API，要使用对应的框架就要使用其对应的 API，这就大大的增加应用程序代码对于日志框架的耦合性。")]),s._v(" "),a("h2",{attrs:{id:"解决思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决思路"}},[s._v("#")]),s._v(" 解决思路：")]),s._v(" "),a("p",[s._v("为了解决上述问题，就在日志框架和应用程序之间架设一个沟通的桥梁，对于应用程序来说，无论底层的日志框架如何变，都不需要有任何感知。只要门面服务做的足够好，随意换另外一个日志框架，应用程序不需要修改任意一行代码，就可以直接上线。")]),s._v(" "),a("p",[s._v("在软件开发领域有这样一句话：计算机科学领域的任何问题都可以通过增加一个间接的中间层来解决。而门面模式就是对于这句话的典型实践。")]),s._v(" "),a("p",[a("code",[s._v("Logback")]),s._v("文档免费。"),a("code",[s._v("Logback")]),s._v("的所有文档是全面免费提供的，不象 Log4J 那样只提供部分免费文档而需要用户去购买付费文档。Logback 拥有更好的性能。")]),s._v(" "),a("p",[s._v("因为"),a("code",[s._v("springboot")]),s._v("底层使用的是 "),a("code",[s._v("SLF4j + Logback")]),s._v("，而且平时开发中使用频率最高的也是此组合，所以选择使用此组合进行日志框架的整合。")]),s._v(" "),a("h2",{attrs:{id:"可能出现的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可能出现的问题"}},[s._v("#")]),s._v(" 可能出现的问题：")]),s._v(" "),a("p",[s._v("如果我们直接暴力的排除其它日志框架，可能导致第三方库在调用日志接口时抛出 ClassNotFound 异常，这里就需要用到"),a("strong",[s._v("中间转换包")]),s._v("。")]),s._v(" "),a("p",[a("strong",[s._v("中间转换包")]),s._v("说白了就是一种偷天换日的解决方案。比如 "),a("code",[s._v("log4j-over-slf4j")]),s._v("，即 log4j -> slf4j 的转换包，这个库定义了与 log4j 一致的接口（包名、类名、方法签名均一致），但是接口的实现却是对 slf4j 日志接口的包装，即间接调用了 slf4j 日志接口，实现了对日志的转发。")]),s._v(" "),a("h2",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案：")]),s._v(" "),a("p",[s._v("①：先排除其它日志包")]),s._v(" "),a("p",[s._v("②：在项目中引入 "),a("code",[s._v("slf4j")]),s._v(" 的 转换包")]),s._v(" "),a("p",[s._v("③：在项目中引入 "),a("code",[s._v("slf4j+logback")]),s._v(" 依赖 + "),a("code",[s._v("logback")]),s._v("的配置文件")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("在项目中引入 slf4j的 转换包"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mvnrepository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("artifact"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("slf4j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("log4j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("over"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("slf4j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("slf4j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("groupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("log4j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("over"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("slf4j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("artifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 替换log4j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.7")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".25")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dependency"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("slf4j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("groupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("jcl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("over"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("slf4j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("artifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 替换commons"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("logging "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.7")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".25")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dependency"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("slf4j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("groupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("jul"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("slf4j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("artifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 替换java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("logging "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.7")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".25")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dependency"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("在项目中引入 slf4j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("logback 依赖"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("slf4j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("groupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("slf4j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("log4j12"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("artifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.7")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".6")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dependency"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("slf4j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("groupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("slf4j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("artifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.7")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".6")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dependency"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("qos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("logback"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("groupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("logback"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("classic"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("artifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dependency"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])]),a("p",[a("code",[s._v("logback.xml")]),s._v("配置文件")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("xml version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),s._v(" encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UTF-8"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("appender name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"STDOUT"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ch.qos.logback.core.ConsoleAppender"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("encoder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("pattern"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("relative "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5l")]),s._v("evel "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pattern"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("encoder"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("appender"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("root level"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"WARN"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("appender"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ref ref"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"STDOUT"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 日志：从低到高；只会打印指定级别以后的"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" additivity表示是否将日志信息反馈给root\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DEBUG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("》"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INFO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("》"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WARN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("》"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ERROR")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Additivity")]),s._v("："),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("避免重复打印日志\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 在自己的项目在中设置打印日志的级别，开发时使用"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("logger name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.xxx.xxx"')]),s._v(" level"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DEBUG"')]),s._v(" additivity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("appender"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ref ref"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"STDOUT"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("logger"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("configuration"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接：")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://www.slf4j.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("slf4j 官网"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"http://www.slf4j.org/manual.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("slf4j 使用手册"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"http://logback.qos.ch/",target:"_blank",rel:"noopener noreferrer"}},[s._v("logback 官网"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://commons.apache.org/proper/commons-logging/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Commons Logging 官网"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);