(window.webpackJsonp=window.webpackJsonp||[]).push([[509],{826:function(s,a,n){"use strict";n.r(a);var t=n(7),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("文章中还介绍了测试工具，比如cURL、postman，单API如何测试；但这些都是偏基础的东西，且网上教程各式各样，就不再赘述了；这里主要讲的就是关于复杂场景的API测试要如何应对")]),s._v(" "),a("h2",{attrs:{id:"api测试的流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api测试的流程"}},[s._v("#")]),s._v(" API测试的流程")]),s._v(" "),a("ul",[a("li",[s._v("先介绍下STAR 法则")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("STAR 法则是回答问题的基本法则他把回答问题分为四个步骤,这个法则可以回答问题条理清晰,思路明确,面面俱到,希望大家掌握这个法则,来应对面试中的所有问题.\n\nS-situation（情景）事情在什么情况下发生\nT-target （目标）要完成什么样的目标\nA-action（行动）为了完成目标所做的行动\nR-result（结果）所得到的结果\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("细说流程")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("S-后端开发与数据层开发完成以后，可以开始接口测试  \nT-测试逻辑层与数据层，确认业务是否能够正常使用  \nA-具体怎么做\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".接口文档-开发提供\n        接口文档：\n        接口URL地址，请求参数，请求方式，返回结果  \n        接口文档格式：HTML（SwaggerUI、ApiFix、MeterSphere等）或Word\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".接口分析-不同公司要求不同\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".只测试接口是否能够跑通,只需要考虑正常场景  \n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".接口场景需要全面覆盖\n            正常场景： \n            申请借款模块：\n                不同的申请方式，还款方式，期数······  \n                条件组合，测试不同组合下结果是否正确 \n                判定表的方法-每个条件组合，测试结果是否正确 \n                参数格式的校验、等价类、边界值等等 \n                参数定义的int类型，传输的得是int类型  \n                参数定义的是string类型，传输数据，正常得是string，但是在开发框架里面，输入int类型，也会被强行转成string类型  \n             异常场景 \n                 少一个必填参数  \n                 多一个参数  \n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".接口用例  \n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".执行\n        选择工具执行：\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".Jmeter（主流） \n            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".打开jmeter（1.找到bat文件运行 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".cmd输入jmeter）  \n            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".新建线程组  \n            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".新建HTTP请求  \n                请求方式-get、post  \n                请求参数-表单格式、json格式、xml格式  \n            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".建立查看结果树  \n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".requests  \n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".postman（主流）  \n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".swagger  \n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".soupui\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(".在线测试工具  \n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".检查对应的结果  \n        Jmeter-建立监听器，查看结果树  \n        requests print出来，打印结果\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".检查返回结果是否正确  \n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".检查逻辑结果，保存的数据是否正确  \n R-完成对逻辑层和数据层的检查测试\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br")])]),a("h1",{attrs:{id:"如何应对复杂场景的api测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何应对复杂场景的api测试"}},[s._v("#")]),s._v(" 如何应对复杂场景的API测试？")]),s._v(" "),a("h2",{attrs:{id:"测试场景一-被测业务操作是由多个api调用协作完成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试场景一-被测业务操作是由多个api调用协作完成"}},[s._v("#")]),s._v(" 测试场景一：被测业务操作是由多个API调用协作完成")]),s._v(" "),a("h3",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),a("p",[s._v("一个单一的前端操作可能会触发后端一系列的API调用，此时API的测试用例就不再是简单的单个API调用，而是一系列API的调用")]),s._v(" "),a("h3",{attrs:{id:"存在的情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存在的情况"}},[s._v("#")]),s._v(" 存在的情况")]),s._v(" "),a("ul",[a("li",[s._v("存在后一个API需要使用前一个API返回结果的情况")]),s._v(" "),a("li",[s._v("需要根据前一个API的返回结果决定后面应该调用哪个API")])]),s._v(" "),a("h3",{attrs:{id:"存在问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存在问题"}},[s._v("#")]),s._v(" 存在问题")]),s._v(" "),a("p",[s._v("高效地获取单个前端操作所触发的API调用顺序")]),s._v(" "),a("h3",{attrs:{id:"解决上述问题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决上述问题思路"}},[s._v("#")]),s._v(" 解决上述问题思路")]),s._v(" "),a("ol",[a("li",[s._v("通过网络监控手段，捕获单个前端操作时所触发的API调用顺序，譬如Fiddler、Charles等抓包工具")]),s._v(" "),a("li",[s._v("也可以通过用户行为日志，通过大数据手段来获取调用顺序")])]),s._v(" "),a("h2",{attrs:{id:"测试场景二-api-测试过程中的第三方依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试场景二-api-测试过程中的第三方依赖"}},[s._v("#")]),s._v(" 测试场景二：API 测试过程中的第三方依赖")]),s._v(" "),a("h3",{attrs:{id:"背景-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景-2"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),a("ul",[a("li",[s._v("API 之间是存在依赖关系的，比如你的被测对象是 API A，但是 API A 的内部调用了 API B，此时如果由于某种原因，API B 在被测环境中处于不可用状态，那么 API A 的测试就会受到影响。")]),s._v(" "),a("li",[s._v("在单体架构下，通常只会在涉及到第三方 API 集成的场景中才会遇到这个问题，所以还不算严重。但是，在微服务架构下，API 间相互耦合的依赖问题就会非常严重。")])]),s._v(" "),a("h3",{attrs:{id:"解决问题的核心思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决问题的核心思路"}},[s._v("#")]),s._v(" 解决问题的核心思路")]),s._v(" "),a("p",[s._v("启用 Mock Server 来代替真实的 API")]),s._v(" "),a("h2",{attrs:{id:"测试场景三-异步-api-的测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试场景三-异步-api-的测试"}},[s._v("#")]),s._v(" 测试场景三：异步 API 的测试")]),s._v(" "),a("h3",{attrs:{id:"什么是异步api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是异步api"}},[s._v("#")]),s._v(" 什么是异步API")]),s._v(" "),a("p",[s._v("调用后会立即返回，但是实际任务并没有真正完成，而是需要稍后去查询或者回调（Callback）的 API")]),s._v(" "),a("h3",{attrs:{id:"对异步-api-的测试主要分为两个部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对异步-api-的测试主要分为两个部分"}},[s._v("#")]),s._v(" 对异步 API 的测试主要分为两个部分")]),s._v(" "),a("ol",[a("li",[s._v("测试异步调用是否成功：检查返回值和后台工作线程是否被创建两个方面就可以了")]),s._v(" "),a("li",[s._v("测试异步调用的业务逻辑处理是否正确")])]),s._v(" "),a("h3",{attrs:{id:"测试异步调用的业务逻辑复杂性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试异步调用的业务逻辑复杂性"}},[s._v("#")]),s._v(" 测试异步调用的业务逻辑复杂性")]),s._v(" "),a("p",[s._v("因为异步 API 通常发生在一些比较慢的操作上，比如数据库 I/O、消息队列 I/O 等，此时测试往往需要去验证数据库中的值、消息队列中的值等，这就需要测试代码具有访问和操作数据库或者消息队列的能力。在实际工程项目中，这些能力一般会在测试框架级别提供，也就是说要求 API 测试框架中包含对应的工具类去访问和操作数据库或者消息队列等")])])}),[],!1,null,null,null);a.default=r.exports}}]);