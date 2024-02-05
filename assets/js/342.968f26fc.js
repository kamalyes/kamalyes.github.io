(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{657:function(a,t,s){"use strict";s.r(t);var e=s(7),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("strong",[a._v("如果你还想从头学起 Docker，可以看看这个系列的文章哦！")])]),a._v(" "),t("h2",{attrs:{id:"作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[a._v("#")]),a._v(" 作用")]),a._v(" "),t("p",[a._v("创建一个新的容器但不启动它")]),a._v(" "),t("h2",{attrs:{id:"语法格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法格式"}},[a._v("#")]),a._v(" 语法格式")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("OPTIONS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" IMAGE "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("COMMAND"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("ARG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("table",[t("thead",[t("tr",[t("th",[a._v("option")]),a._v(" "),t("th",[a._v("作用")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("--name")]),a._v(" "),t("td",[a._v("指定容器的名字")])])])]),a._v(" "),t("p",[t("strong",[a._v("备注：")]),a._v(" 其实还有好多 options，但是目前还没用到，要用的时候再写吧")]),a._v(" "),t("h2",{attrs:{id:"实际栗子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实际栗子"}},[a._v("#")]),a._v(" 实际栗子")]),a._v(" "),t("h4",{attrs:{id:"根据-tomcat-镜像-创建一个-mytomcat-容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#根据-tomcat-镜像-创建一个-mytomcat-容器"}},[a._v("#")]),a._v(" 根据 tomcat 镜像，创建一个 myTomcat 容器")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("myTomcat tomcat\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"指定镜像-tag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指定镜像-tag"}},[a._v("#")]),a._v(" 指定镜像 tag")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" tomcat7 tomcat:7\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"实际栗子-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实际栗子-2"}},[a._v("#")]),a._v(" 实际栗子")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[root@VM-8-3-opencloudos ~]# docker create --name tomcat7 tomcat:7\nUnable to find image 'tomcat:7' locally\n7: Pulling from library/tomcat\n0bc3020d05f1: Pull complete \na110e5871660: Pull complete \n83d3c0fa203a: Pull complete \na8fd09c11b02: Pull complete \n96ebf1506065: Pull complete \n26b72ffca293: Pull complete \n0bffa2ea17aa: Pull complete \nd880cebcc7a6: Pull complete \nd19ab8039b36: Pull complete \n5057492dc495: Pull complete \nDigest: sha256:f7d37d248d0eacec1e5995736234c9c22155626fcb27ea3ead13b9db24e698f7\nStatus: Downloaded newer image for tomcat:7\n4ee72225d1cdc2ca809bff289d11920b85bb63e9b146746ff5cdfafb3331b227\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);