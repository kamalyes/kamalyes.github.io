(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{664:function(a,t,s){"use strict";s.r(t);var e=s(7),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("strong",[a._v("如果你还想从头学起 Docker，可以看看这个系列的文章哦！")])]),a._v(" "),t("h2",{attrs:{id:"作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[a._v("#")]),a._v(" 作用")]),a._v(" "),t("p",[a._v("提取容器的日志")]),a._v(" "),t("h2",{attrs:{id:"语法格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法格式"}},[a._v("#")]),a._v(" 语法格式")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" logs "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("OPTIONS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" CONTAINER\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"options-说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options-说明"}},[a._v("#")]),a._v(" options 说明")]),a._v(" "),t("table",[t("thead",[t("tr",[t("td",[a._v("options")]),a._v(" "),t("td",[a._v("作用")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("--details")]),a._v(" "),t("td",[a._v("显示提供给日志的其他详细信息")])]),a._v(" "),t("tr",[t("td",[a._v("-f, --follow")]),a._v(" "),t("td",[a._v("跟踪日志输出")])]),a._v(" "),t("tr",[t("td",[a._v("--tail")]),a._v(" "),t("td",[a._v("仅列出最新N条容器日志")])]),a._v(" "),t("tr",[t("td",[a._v("-t, --timestamps")]),a._v(" "),t("td",[a._v("显示时间戳")])])])]),a._v(" "),t("p",[t("strong",[a._v("备注:")]),a._v(" 其实还有两个 options，但是目前还没用到，要用的时候再写吧")]),a._v(" "),t("h2",{attrs:{id:"实际栗子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实际栗子"}},[a._v("#")]),a._v(" 实际栗子")]),a._v(" "),t("h4",{attrs:{id:"给日志加时间戳"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#给日志加时间戳"}},[a._v("#")]),a._v(" 给日志加时间戳")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" logs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" tomcat7\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"打印最新-5-条日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打印最新-5-条日志"}},[a._v("#")]),a._v(" 打印最新 5 条日志")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" logs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tail")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" tomcat7\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"跟踪打印日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跟踪打印日志"}},[a._v("#")]),a._v(" 跟踪打印日志")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" logs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" tomcat7\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("日志刷新时，就能实时看到最新的日志了")])])}),[],!1,null,null,null);t.default=r.exports}}]);