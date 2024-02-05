(window.webpackJsonp=window.webpackJsonp||[]).push([[433],{749:function(s,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"安装-配置jdk环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-配置jdk环境"}},[s._v("#")]),s._v(" 安装&配置JDK环境")]),s._v(" "),a("h3",{attrs:{id:"一、安装jdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、安装jdk"}},[s._v("#")]),s._v(" 一、安装JDK")]),s._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Oracle官网下载最新版JDK"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[s._v("若要下载历史版本，直接百度搜索想要的版本再进入官网下载：")]),s._v(" "),a("p",[a("img",{attrs:{src:"C:%5CUsers%5Cyuyq%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20231031131514518.png",alt:"image-20231031131514518"}})])])]),s._v(" "),a("p",[a("strong",[s._v("1) 下载 jdk 的tar包到指定的目录下")]),s._v("  (或者手动从Oracle官网下载后上传到指定的目录下也行)")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://download.java.net/openjdk/jdk11/ri/openjdk-11+28_linux-x64_bin.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("2) 解压 jdk tar 包")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xzvf")]),s._v(" jdk-11.0.14_linux-x64_bin.tar.gz "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" /usr/local/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"二、配置jdk环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、配置jdk环境变量"}},[s._v("#")]),s._v(" 二、配置JDK环境变量")]),s._v(" "),a("p",[a("strong",[s._v("1) 根据需要的Java版本把下面代码加入到配置文件内容中")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Java11环境变量配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/jdk-11\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Java8环境变量配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/jdk1.8.0_321\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".:"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/jre/lib/rt.jar:"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/dt.jar:"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/tools.jar\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("2) 刷新配置文件使之生效")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("3)查看Java版本信息")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出如下即可")]),s._v("\nopenjdk "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-09-25\nOpenJDK Runtime Environment "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("build "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("+28"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nOpenJDK "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("-Bit Server VM "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("build "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("+28, mixed mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"安装-配置jmeter环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-配置jmeter环境"}},[s._v("#")]),s._v(" 安装&配置JMeter环境")]),s._v(" "),a("h3",{attrs:{id:"一、安装jmeter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、安装jmeter"}},[s._v("#")]),s._v(" 一、安装JMeter")]),s._v(" "),a("p",[a("strong",[s._v("1)下载安装包")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dlcdn.apache.org//jmeter/binaries/apache-jmeter-5.6.2.tgz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("2)将JMeter安装包解压到/usr/local/路径下")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xvf")]),s._v(" apache-jmeter-5.6.2.tgz "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" /usr/local/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("3)建立脚本&报告目录")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scripts：脚本上传的地址，report：报告生成存放目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /opt/jmeter/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("scripts,report"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"二、配置jmeter环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、配置jmeter环境变量"}},[s._v("#")]),s._v(" 二、配置JMeter环境变量")]),s._v(" "),a("p",[a("strong",[s._v("1) 把下面代码加入到配置文件内容中")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JMETER_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/apache-jmeter-5.6.2\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JMETER_HOME")]),s._v("/lib/ext/ApacheJMeter_core.jar:"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JMETER_HOME")]),s._v("/lib/jorphan.jar:"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CLASSPATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JMETER_HOME")]),s._v("/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("2) 刷新配置文件使之生效")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("3)查看JMeter版本信息")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("jmeter "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\nWARN StatusConsoleListener The use of package scanning to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("locate")]),s._v(" plugins is deprecated and will be removed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" a future release\nWARN StatusConsoleListener The use of package scanning to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("locate")]),s._v(" plugins is deprecated and will be removed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" a future release\nWARN StatusConsoleListener The use of package scanning to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("locate")]),s._v(" plugins is deprecated and will be removed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" a future release\nWARN StatusConsoleListener The use of package scanning to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("locate")]),s._v(" plugins is deprecated and will be removed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" a future release\nOct "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":09:28 PM java.util.prefs.FileSystemPreferences"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(" run\nINFO: Created user preferences directory.\n    _    ____   _    ____ _   _ _____       _ __  __ _____ _____ _____ ____\n   / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  _ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  / ___"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ____"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ____"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_   _"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ____"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  _ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  / _ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" / _ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  _"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    _  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  _"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  _"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n / ___ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  __/ ___ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("___"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  _  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("___  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("___  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("___"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  _ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("\n/_/   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" /_/   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("____"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_____"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_____"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_____"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.6")]),s._v(".2\n\nCopyright "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1999")]),s._v("-2023 The Apache Software Foundation\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[a("strong",[s._v("3)设置jmeter-server自启")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cat >/etc/systemd/system/jmeter-server.service<<EOF\n[Unit]\nDescription=jmeter-server \n \n[Service]\nType=simple\nExecStart=/usr/local/apache-jmeter-5.6.2/bin/jmeter-server\n \n[Install]\nWantedBy=multi-user.target\nEOF\nsystemctl reload\nsystemctl restart jmeter-server.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"使用jmeter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用jmeter"}},[s._v("#")]),s._v(" 使用JMeter")]),s._v(" "),a("blockquote",[a("p",[s._v("在Linux服务器上一般以非GUI界面去执行jmx压测脚本")])]),s._v(" "),a("p",[a("strong",[s._v("1)参数")])]),s._v(" "),a("p",[s._v("全部参数可查阅"),a("a",{attrs:{href:"https://jmeter.apache.org/usermanual/get-started.html#non_gui",target:"_blank",rel:"noopener noreferrer"}},[s._v("JMeter命令行模式官方使用手册"),a("OutboundLink")],1),s._v("，以下为常用参数：")]),s._v(" "),a("ul",[a("li",[s._v("-h 帮助")]),s._v(" "),a("li",[s._v("-n 非GUI模式")]),s._v(" "),a("li",[s._v("-t 指定要运行的 JMeter 测试脚本文件")]),s._v(" "),a("li",[s._v("-l 记录结果的文件 每次运行之前，(要确保之前没有运行过,即xxx.jtl不存在，不然报错)")]),s._v(" "),a("li",[s._v("-r 启动jmeter.properties文件中指定的所有远程服务器")]),s._v(" "),a("li",[s._v("-e 在脚本运行结束后生成html报告")]),s._v(" "),a("li",[s._v("-o 用于存放html报告的目录(目录要为空，不然报错)")])]),s._v(" "),a("p",[a("strong",[s._v("2) 命令")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("jmeter -n -t <脚本文件名>.jmx -l <本不存在的结果文件名>.jtl -e -o <存放html报告的空目录>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("若当前已在jmeter的bin目录下，jmeter前要加“./”，即“./jmeter -n -t ……”")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("jmeter "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" httptest.jmx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" httptest.jtl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("120.79")]),s._v(".25.xxx:1099,120.79.26.xxx:1099,39.108.136.168:1099 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-JthreadNum")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-JloopNum")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-JrampupTime")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-JjmeterTestCsvHome")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("./ "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" ./report\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);