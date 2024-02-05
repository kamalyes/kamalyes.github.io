(window.webpackJsonp=window.webpackJsonp||[]).push([[431],{745:function(e,s,n){"use strict";n.r(s);var a=n(7),t=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"android网络安全配置区分正式服和测试服"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#android网络安全配置区分正式服和测试服"}},[e._v("#")]),e._v(" Android网络安全配置区分正式服和测试服")]),e._v(" "),s("blockquote",[s("p",[e._v("Android 从 7.0 开始，系统不再信任用户 CA 证书（应用 targetSdkVersion >= 24 时生效，如果 targetSdkVersion <24 即使系统是 7.0 + 依然会信任）。也就是说即使安装了用户 CA 证书，在 Android 7.0 + 的机器上，targetSdkVersion>= 24 的应用的 HTTPS 包就抓不到了。所以需要修改网络安全配置")])]),e._v(" "),s("p",[e._v("在Android开发中，为了帮助测试人员进行Http||WebSocket抓包，一般都会在Android的AndroidManifest.xml文件中配置network_security_config。不过，这也带来了一些安全性的问题，所以我们通常的策略是：线上的版本不支持抓包，测试版本支持抓包即可。为此，需要单独为正式服和测试服单独的进行配置。")]),e._v(" "),s("p",[e._v("通常，network_security_config.xml 文件配置如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<?xml version="1.0" encoding="utf-8"?>\n<network-security-config xmlns:tools="http://schemas.android.com/tools">\n    <base-config cleartextTrafficPermitted="true">\n        <trust-anchors>\n            <certificates src="system" overridePins="true" />\n            <certificates src="user" overridePins="true" />\n        </trust-anchors>\n    </base-config>\n</network-security-config>\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("然后，在AndroidManifest.xml里的"),s("code",[e._v("<application>")]),e._v("标签中添加代码。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('android:networkSecurityConfig="@xml/network_security_config"\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("为实现在测试、开发阶段可以抓包，但正式发布包不能抓包，需要做如下的配置。首先在"),s("code",[e._v("AndroidManifest.xml")]),e._v("里的"),s("code",[e._v("<application>")]),e._v("标签中新增的代码改成 。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('android:networkSecurityConfig="${NETWORK_SECURITY_CONFIG}"\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("然后，在"),s("code",[e._v("build.gradle")]),e._v("文件"),s("code",[e._v("buildTypes")]),e._v("中的"),s("code",[e._v("release")]),e._v("和"),s("code",[e._v("debug")]),e._v("脚本配置中分别配置如下脚本：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('release {\n       manifestPlaceholders = [\n           NETWORK_SECURITY_CONFIG: ""\n       ]\n} \n\ndebug {\n       manifestPlaceholders = [\n           NETWORK_SECURITY_CONFIG: "@xml/network_security_config"\n       ]\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("p",[e._v("由上面的配置可以看到，由于压根就没有引入证书文件，所以"),s("code",[e._v("Release")]),e._v("模式下打的包不能抓包，反之"),s("code",[e._v("Debug")]),e._v("包则可以。")]),e._v(" "),s("p",[s("strong",[e._v("所以要做的就是开发测试阶段打Debug包、发布线上就打Release包即可。")])]),e._v(" "),s("p",[e._v("同时，对于Android7.0以上的手机，开着网络代理访问不了Webview页面的问题，需要在Webview的WebViewClient中将下面这行代码给注释掉。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("super.onReceivedSslError(view, handler, error);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("这一段代码的作用是为了忽略掉SSL证书错误，因为开启代理后网络会变得不安全，证书会错误，Webview检测到证书错误之后就直接让Webview白板，不请求任何数据。")]),e._v(" "),s("p",[e._v("引用文章：https://developer.android.google.cn/training/articles/security-config?hl=zh-cn#CustomTrust")])])}),[],!1,null,null,null);s.default=t.exports}}]);