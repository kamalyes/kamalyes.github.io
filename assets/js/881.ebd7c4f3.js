(window.webpackJsonp=window.webpackJsonp||[]).push([[881],{1194:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"springboot-之-banner-定制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot-之-banner-定制"}},[t._v("#")]),t._v(" SpringBoot 之 banner 定制")]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("Spring Boot 启动时默认会显示以下 LOGO：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::        (v2.1.1.RELEASE)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("实际上，Spring Boot 支持自定义 logo 的功能。")]),t._v(" "),a("p",[t._v("让我们来看看如何实现的。")]),t._v(" "),a("p",[t._v("只要你在 "),a("code",[t._v("resources")]),t._v(" 目录下放置名为 "),a("code",[t._v("banner.txt")]),t._v("、"),a("code",[t._v("banner.gif")]),t._v(" 、"),a("code",[t._v("banner.jpg")]),t._v(" 或 "),a("code",[t._v("banner.png")]),t._v(" 的文件，Spring Boot 会自动加载，将其作为启动时打印的 logo。")]),t._v(" "),a("ul",[a("li",[t._v("对于文本文件，Spring Boot 会将其直接输出。")]),t._v(" "),a("li",[t._v("对于图像文件（ "),a("code",[t._v("banner.gif")]),t._v(" 、"),a("code",[t._v("banner.jpg")]),t._v(" 或 "),a("code",[t._v("banner.png")]),t._v(" ），Spring Boot 会将图像转为 ASCII 字符，然后输出。")])]),t._v(" "),a("h2",{attrs:{id:"变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[t._v("#")]),t._v(" 变量")]),t._v(" "),a("p",[t._v("banner.txt 文件中还可以使用变量来设置字体、颜色、版本号。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("变量")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("${application.version}")])]),t._v(" "),a("td",[a("code",[t._v("MANIFEST.MF")]),t._v(" 中定义的版本。如："),a("code",[t._v("1.0")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("${application.formatted-version}")])]),t._v(" "),a("td",[a("code",[t._v("MANIFEST.MF")]),t._v(" 中定义的版本，并添加一个 "),a("code",[t._v("v")]),t._v(" 前缀。如："),a("code",[t._v("v1.0")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("${spring-boot.version}")])]),t._v(" "),a("td",[t._v("Spring Boot 版本。如："),a("code",[t._v("2.1.1.RELEASE")]),t._v(".")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("${spring-boot.formatted-version}")])]),t._v(" "),a("td",[t._v("Spring Boot 版本，并添加一个 "),a("code",[t._v("v")]),t._v(" 前缀。如："),a("code",[t._v("v2.1.1.RELEASE")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("${Ansi.NAME}")]),t._v(" (or "),a("code",[t._v("${AnsiColor.NAME}")]),t._v(", "),a("code",[t._v("${AnsiBackground.NAME}")]),t._v(", "),a("code",[t._v("${AnsiStyle.NAME}")]),t._v(")")]),t._v(" "),a("td",[t._v("ANSI 颜色、字体。更多细节，参考："),a("a",{attrs:{href:"https://github.com/spring-projects/spring-boot/tree/v2.1.1.RELEASE/spring-boot-project/spring-boot/src/main/java/org/springframework/boot/ansi/AnsiPropertySource.java",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("AnsiPropertySource")]),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("${application.title}")])]),t._v(" "),a("td",[a("code",[t._v("MANIFEST.MF")]),t._v(" 中定义的应用名。")])])])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("p",[t._v("在 Spring Boot 项目中的 "),a("code",[t._v("resources")]),t._v(" 目录下添加一个名为 banner.txt 的文件，内容如下：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnsiColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BRIGHT_YELLOW")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnsiStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BOLD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n ________  ___  ___  ________   ___       __   ___  ___\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\   ___ \\"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\  \\"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\  \\"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\   ___  \\"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\  \\     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\  \\"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\  \\"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\  \\\n\\ \\  \\_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\ \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\    \\ \\  \\ \\  \\\\\\  \\\n \\ \\  \\ \\\\ \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\  __\\ \\  \\ \\  \\\\\\  \\\n  \\ \\  \\_\\\\ \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\__\\_\\  \\ \\  \\\\\\  \\\n   \\ \\_______\\ \\_______\\ \\__\\\\ \\__\\ \\____________\\ \\_______\\\n    \\"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_______"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_______"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("__"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" \\"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("__"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("____________"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_______"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnsiBackground")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WHITE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnsiColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RED")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnsiStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UNDERLINE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Spring")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Boot")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("boot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Spring")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Boot")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tutorial")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("blockquote",[a("p",[t._v("注："),a("code",[t._v("${}")]),t._v(" 设置字体颜色的变量之间不能换行或空格分隔，否则会导致除最后一个变量外，都不生效。")])]),t._v(" "),a("p",[t._v("启动应用后，控制台将打印如下 logo：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20181221231330.png",alt:"img"}}),t._v("\n推荐两个生成字符画的网站，可以将生成的字符串放入这个"),a("code",[t._v("banner.txt")]),t._v(" 文件：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.network-science.de/ascii/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.network-science.de/ascii/"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://patorjk.com/software/taag/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://patorjk.com/software/taag/"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[a("code",[t._v("application.properties")]),t._v(" 中与 Banner 相关的配置：")]),t._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# banner 模式。有三种模式：console/log/off")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# console 打印到控制台（通过 System.out）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# log - 打印到日志中")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# off - 关闭打印")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("spring.main.banner-mode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("off")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# banner 文件编码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("spring.banner.charset")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("UTF-8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# banner 文本文件路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("spring.banner.location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("classpath:banner.txt")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# banner 图像文件路径（可以选择 png,jpg,gif 文件）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("spring.banner.image.location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("classpath:banner.gif")]),t._v("\nused).\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 图像 banner 的宽度（字符数）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("spring.banner.image.width")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("76")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 图像 banner 的高度（字符数）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("spring.banner.image.height")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("=")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 图像 banner 的左边界（字符数）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("spring.banner.image.margin")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否将图像转为黑色控制台主题")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("spring.banner.image.invert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("false")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("p",[t._v("当然，你也可以在 YAML 文件中配置，例如：")]),t._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("banner-mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" off\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编程"}},[t._v("#")]),t._v(" 编程")]),t._v(" "),a("p",[t._v("默认，Spring Boot 会注册一个 "),a("code",[t._v("SpringBootBanner")]),t._v(" 的单例 Bean，用来负责打印 Banner。")]),t._v(" "),a("p",[t._v("如果想完全个人定制 Banner，可以这么做：先实现 "),a("code",[t._v("org.springframework.boot.Banner#printBanner")]),t._v(" 接口来自己定制 Banner。在将这个 Banner 通过 "),a("code",[t._v("SpringApplication.setBanner(…)")]),t._v(" 方法注入 Spring Boot。")]),t._v(" "),a("h2",{attrs:{id:"示例源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例源码"}},[t._v("#")]),t._v(" 示例源码")]),t._v(" "),a("blockquote",[a("p",[t._v("示例源码："),a("a",{attrs:{href:"https://github.com/kamalyes/spring-boot-tutorial/tree/master/codes/spring-boot-banner",target:"_blank",rel:"noopener noreferrer"}},[t._v("spring-boot-banner"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-banner",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Boot 官方文档之 Customizing the Banner"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);