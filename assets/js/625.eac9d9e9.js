(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{940:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"设计模式之适配器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计模式之适配器模式"}},[s._v("#")]),s._v(" 设计模式之适配器模式")]),s._v(" "),t("h2",{attrs:{id:"意图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#意图"}},[s._v("#")]),s._v(" 意图")]),s._v(" "),t("p",[t("strong",[s._v("适配器模式")]),s._v(" (Adapter)是一种结构型设计模式， 它能使不兼容的对象能够相互合作。")]),s._v(" "),t("p",[s._v("适配器模式通过封装对象将复杂的转换过程隐藏于幕后。 被封装的对象甚至察觉不到适配器的存在。")]),s._v(" "),t("p",[s._v("适配器不仅可以转换不同格式的数据， 其还有助于采用不同接口的对象之间的合作。 它的运作方式如下：")]),s._v(" "),t("ul",[t("li",[s._v("适配器实现与其中一个现有对象兼容的接口。")]),s._v(" "),t("li",[s._v("现有对象可以使用该接口安全地调用适配器方法。")]),s._v(" "),t("li",[s._v("适配器方法被调用后将以另一个对象兼容的格式和顺序将请求传递给该对象。")])]),s._v(" "),t("h2",{attrs:{id:"适用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[s._v("#")]),s._v(" 适用场景")]),s._v(" "),t("ul",[t("li",[s._v("当你希望使用某个类， 但是其接口与其他代码不兼容时， 可以使用适配器类。")]),s._v(" "),t("li",[s._v("如果您需要复用这样一些类， 他们处于同一个继承体系， 并且他们又有了额外的一些共同的方法， 但是这些共同的方法不是所有在这一继承体系中的子类所具有的共性。")])]),s._v(" "),t("h2",{attrs:{id:"结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结构"}},[s._v("#")]),s._v(" 结构")]),s._v(" "),t("p",[s._v("适配器实现了其中一个对象的接口， 并对另一个对象进行封装。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20210430141928.png",alt:"img"}})]),s._v(" "),t("h3",{attrs:{id:"结构说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结构说明"}},[s._v("#")]),s._v(" 结构说明")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("客户端")]),s._v(" （Client） 是包含当前程序业务逻辑的类。")]),s._v(" "),t("li",[t("strong",[s._v("客户端接口")]),s._v(" （Client Interface） 描述了其他类与客户端代码合作时必须遵循的协议。")]),s._v(" "),t("li",[t("strong",[s._v("服务")]),s._v(" （Service） 中有一些功能类 （通常来自第三方或遗留系统）。 客户端与其接口不兼容， 因此无法直接调用其功能。")]),s._v(" "),t("li",[t("strong",[s._v("适配器")]),s._v(" （Adapter） 是一个可以同时与客户端和服务交互的类： 它在实现客户端接口的同时封装了服务对象。 适配器接受客户端通过适配器接口发起的调用， 并将其转换为适用于被封装服务对象的调用。")]),s._v(" "),t("li",[s._v("客户端代码只需通过接口与适配器交互即可， 无需与具体的适配器类耦合。 因此， 你可以向程序中添加新类型的适配器而无需修改已有代码。 这在服务类的接口被更改或替换时很有用： 你无需修改客户端代码就可以创建新的适配器类。")])]),s._v(" "),t("h3",{attrs:{id:"结构代码范式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结构代码范式"}},[s._v("#")]),s._v(" 结构代码范式")]),s._v(" "),t("p",[s._v("【Target】")]),s._v(" "),t("p",[s._v("定义用户实际"),t("strong",[s._v("需要的接口")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Target")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("【Adaptee】")]),s._v(" "),t("p",[s._v("定义一个需要"),t("strong",[s._v("适配的接口")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Adaptee")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpecificRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"特殊请求"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("【Adapter】")]),s._v(" "),t("p",[s._v("通过在内部"),t("strong",[s._v("包装一个")]),s._v(" "),t("strong",[s._v("Adaptee 对象")]),s._v("，把源接口转换成目标接口。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Adapter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Target")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Adaptee")]),s._v(" adaptee "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Adaptee")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("adaptee"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("SpecificRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("【客户端】")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("public class AdapterPattern {\n    public static void main(String[] args) {\n        Target target = new Adapter();\n        target.Request();\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("【输出】")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("特殊请求\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"伪代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#伪代码"}},[s._v("#")]),s._v(" 伪代码")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20210430165258.png",alt:"img"}})]),s._v(" "),t("p",[s._v("适配器假扮成一个圆钉 （Round­Peg）， 其半径等于方钉 （Square­Peg） 横截面对角线的一半 （即能够容纳方钉的最小外接圆的半径）。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 假设你有两个接口相互兼容的类：圆孔（Round­Hole）和圆钉（Round­Peg）。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RoundHole")]),s._v(" is\n    constructor "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RoundHole")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("radius"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    method "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getRadius")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" is\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回孔的半径。")]),s._v("\n\n    method "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("peg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RoundPeg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" is\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getRadius")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" peg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getRadius")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RoundPeg")]),s._v(" is\n    constructor "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RoundPeg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("radius"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    method "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getRadius")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" is\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回钉子的半径。")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 但还有一个不兼容的类：方钉（Square­Peg）。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SquarePeg")]),s._v(" is\n    constructor "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SquarePeg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("width"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    method "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getWidth")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" is\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回方钉的宽度。")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 适配器类让你能够将方钉放入圆孔中。它会对 RoundPeg 类进行扩展，以接收适")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 配器对象作为圆钉。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SquarePegAdapter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RoundPeg")]),s._v(" is\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在实际情况中，适配器中会包含一个 SquarePeg 类的实例。")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" field peg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SquarePeg")]),s._v("\n\n    constructor "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SquarePegAdapter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("peg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SquarePeg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" is\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("peg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" peg\n\n    method "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getRadius")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" is\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 适配器会假扮为一个圆钉，")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 其半径刚好能与适配器实际封装的方钉搭配起来。")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" peg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getWidth")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Math")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sqrt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 客户端代码中的某个位置。")]),s._v("\nhole "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RoundHole")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nrpeg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RoundPeg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nhole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rpeg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n\nsmall_sqpeg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SquarePeg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nlarge_sqpeg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SquarePeg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nhole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("small_sqpeg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此处无法编译（类型不一致）。")]),s._v("\n\nsmall_sqpeg_adapter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SquarePegAdapter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("small_sqpeg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nlarge_sqpeg_adapter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SquarePegAdapter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("large_sqpeg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nhole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("small_sqpeg_adapter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\nhole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("large_sqpeg_adapter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br")])]),t("h2",{attrs:{id:"案例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[s._v("#")]),s._v(" 案例")]),s._v(" "),t("p",[s._v("适配器模式在 Java 代码中很常见。")]),s._v(" "),t("p",[s._v("Java 核心程序库中有一些标准的适配器：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html#asList-T...-",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("java.util.Arrays#asList()")]),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#list-java.util.Enumeration-",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("java.util.Collections#list()")]),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#enumeration-java.util.Collection-",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("java.util.Collections#enumeration()")]),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/io/InputStreamReader.html#InputStreamReader-java.io.InputStream-",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("java.io.InputStreamReader(InputStream)")]),t("OutboundLink")],1),s._v(" （返回 "),t("code",[s._v("Reader")]),s._v("对象）")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/io/OutputStreamWriter.html#OutputStreamWriter-java.io.OutputStream-",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("java.io.OutputStreamWriter(OutputStream)")]),t("OutboundLink")],1),s._v(" （返回 "),t("code",[s._v("Writer")]),s._v("对象）")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/javax/xml/bind/annotation/adapters/XmlAdapter.html#marshal-BoundType-",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("javax.xml.bind.annotation.adapters.XmlAdapter#marshal()")]),t("OutboundLink")],1),s._v(" 和 "),t("code",[s._v("#unmarshal()")])])]),s._v(" "),t("p",[t("strong",[s._v("识别方法")]),s._v("： 适配器可以通过以不同抽象或接口类型实例为参数的构造函数来识别。 当适配器的任何方法被调用时， 它会将参数转换为合适的格式， 然后将调用定向到其封装对象中的一个或多个方法。")]),s._v(" "),t("h2",{attrs:{id:"与其他模式的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与其他模式的关系"}},[s._v("#")]),s._v(" 与其他模式的关系")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/bridge",target:"_blank",rel:"noopener noreferrer"}},[s._v("桥接模式"),t("OutboundLink")],1),s._v("通常会于开发前期进行设计， 使你能够将程序的各个部分独立开来以便开发。 另一方面， "),t("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"}},[s._v("适配器模式"),t("OutboundLink")],1),s._v("通常在已有程序中使用， 让相互不兼容的类能很好地合作。")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"}},[s._v("适配器"),t("OutboundLink")],1),s._v("可以对已有对象的接口进行修改， "),t("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/decorator",target:"_blank",rel:"noopener noreferrer"}},[s._v("装饰模式"),t("OutboundLink")],1),s._v("则能在不改变对象接口的前提下强化对象功能。 此外， "),t("em",[s._v("装饰")]),s._v("还支持递归组合， "),t("em",[s._v("适配器")]),s._v("则无法实现。")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"}},[s._v("适配器"),t("OutboundLink")],1),s._v("能为被封装对象提供不同的接口， "),t("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/proxy",target:"_blank",rel:"noopener noreferrer"}},[s._v("代理模式"),t("OutboundLink")],1),s._v("能为对象提供相同的接口， "),t("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/decorator",target:"_blank",rel:"noopener noreferrer"}},[s._v("装饰"),t("OutboundLink")],1),s._v("则能为对象提供加强的接口。")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/facade",target:"_blank",rel:"noopener noreferrer"}},[s._v("外观模式"),t("OutboundLink")],1),s._v("为现有对象定义了一个新接口， "),t("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"}},[s._v("适配器"),t("OutboundLink")],1),s._v("则会试图运用已有的接口。 "),t("em",[s._v("适配器")]),s._v("通常只封装一个对象， "),t("em",[s._v("外观")]),s._v("通常会作用于整个对象子系统上。")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/bridge",target:"_blank",rel:"noopener noreferrer"}},[s._v("桥接"),t("OutboundLink")],1),s._v("、 "),t("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/state",target:"_blank",rel:"noopener noreferrer"}},[s._v("状态模式"),t("OutboundLink")],1),s._v("和"),t("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/strategy",target:"_blank",rel:"noopener noreferrer"}},[s._v("策略模式"),t("OutboundLink")],1),s._v(" （在某种程度上包括"),t("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"}},[s._v("适配器"),t("OutboundLink")],1),s._v("） 模式的接口非常相似。 实际上， 它们都基于"),t("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/composite",target:"_blank",rel:"noopener noreferrer"}},[s._v("组合模式"),t("OutboundLink")],1),s._v("——即将工作委派给其他对象， 不过也各自解决了不同的问题。 模式并不只是以特定方式组织代码的配方， 你还可以使用它们来和其他开发者讨论模式所解决的问题。")])]),s._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"}},[s._v("《Head First 设计模式》"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"}},[s._v("《大话设计模式》"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"}},[s._v("设计模式教程"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);