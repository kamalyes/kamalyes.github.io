(window.webpackJsonp=window.webpackJsonp||[]).push([[418],{736:function(s,n,e){"use strict";e.r(n);var a=e(7),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"jenkins中配置node环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jenkins中配置node环境"}},[s._v("#")]),s._v(" Jenkins中配置Node环境")]),s._v(" "),n("h2",{attrs:{id:"下载插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下载插件"}},[s._v("#")]),s._v(" 下载插件")]),s._v(" "),n("p",[s._v("下载nodejs插件安装并重启否则当前jenkins环境中无node环境。"),n("br"),s._v(" "),n("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/jenkins/baa1ed89ddb26be16736205927339.png",alt:"在这里插入图片描述"}})]),s._v(" "),n("p",[s._v("安装之后可在已安装的tab中查看"),n("br"),s._v(" "),n("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/jenkins/b15153ea337e0def77f07cb6387e861b.png",alt:"在这里插入图片描述"}})]),s._v(" "),n("h2",{attrs:{id:"配置环境变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置环境变量"}},[s._v("#")]),s._v(" 配置环境变量")]),s._v(" "),n("p",[s._v("下载完之后进入全局工具配置界面"),n("br"),s._v(" "),n("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/jenkins/b19153ea337e0def77f07cb6387e861b.png",alt:"在这里插入图片描述"}})]),s._v(" "),n("p",[n("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/jenkins/b18153ea337e0def77f07cb6387e861b.png",alt:"在这里插入图片描述"}})]),s._v(" "),n("p",[n("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/jenkins/b21153ea337e0def77f07cb6387e861b.png",alt:"在这里插入图片描述"}})]),s._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("p",[s._v("此时node环境还未安装，需要创建一个自由风格项目去安装node"),n("br"),s._v("\n在配置中的构建环境中"),n("br"),s._v(" "),n("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/jenkins/b22153ea337e0def77f07cb6387e861b.png",alt:"在这里插入图片描述"}})]),s._v(" "),n("p",[n("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/jenkins/b23153ea337e0def77f07cb6387e861b.png",alt:"在这里插入图片描述"}})]),s._v(" "),n("p",[n("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/jenkins/b25153ea337e0def77f07cb6387e861b.png",alt:"在这里插入图片描述"}}),n("br"),s._v("\n但此时的node还不是全局环境的Node. 可以在别的任务中查看node -v"),n("br"),s._v("\n可以看见会报如下错误:"),n("br"),s._v(" "),n("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/jenkins/b26153ea337e0def77f07cb6387e861b.png",alt:"在这里插入图片描述"}})]),s._v(" "),n("p",[s._v("创建一个流水线的脚本")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/jenkins/b27153ea337e0def77f07cb6387e861b.png",alt:"在这里插入图片描述"}})]),s._v(" "),n("p",[n("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/jenkins/b28153ea337e0def77f07cb6387e861b.png",alt:"在这里插入图片描述"}})]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('pipeline {\n    agent any\n    \n    tools {nodejs "node12.22.6"}\n    \n    stages {\n        stage(\'Hello\') {\n            steps {\n                sh "node -v"\n            }\n        }\n    }\n}\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/jenkins/b30153ea337e0def77f07cb6387e861b.png",alt:"在这里插入图片描述"}})]),s._v(" "),n("p",[s._v("正常打印出node的版本了。至此，可在任何流水线中的构建环境中选择使用Node环境了。"),n("br"),s._v(" "),n("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/jenkins/b32153ea337e0def77f07cb6387e861b.png",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);n.default=t.exports}}]);