(window.webpackJsonp=window.webpackJsonp||[]).push([[486],{802:function(a,s,t){"use strict";t.r(s);var e=t(7),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("在项目测试过程中，我经常需要将数据库中的数据作为参数传递到请求中。Jmeter中MYSQL数据库连接操作过程如下：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/jmeter/1896875-20200729113911570-1736120938.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"_1-下载-导入mysql的jdbc驱动包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载-导入mysql的jdbc驱动包"}},[a._v("#")]),a._v(" 1. 下载/导入mysql的jdbc驱动包")]),a._v(" "),s("ul",[s("li",[a._v("进入"),s("a",{attrs:{href:"https://mvnrepository.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("MVN公有仓库"),s("OutboundLink")],1),a._v("搜索mysql-connector-java\n"),s("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/jmeter/16859065359625.png",alt:""}})]),a._v(" "),s("li",[a._v("选择一个版本进入下载jar包完成后直接复制到jmeter的lib目录下，重启jmeter。\n"),s("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/jmeter/16869065035555.png",alt:""}})])]),a._v(" "),s("h2",{attrs:{id:"_2-添加mysql数据库连接配置-jdbc-connection-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加mysql数据库连接配置-jdbc-connection-configuration"}},[a._v("#")]),a._v(" 2. 添加MYSQL数据库连接配置（JDBC Connection Configuration）")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("进入Jmeter->右击“线程组”，选择“添加”->“配置元件”->“JDBC Connection Configuration”\n"),s("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/jmeter/16859071211090.png",alt:""}})])]),a._v(" "),s("li",[s("p",[a._v("设置“JDBC Connection Configuration”\n字段解释：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("Variable Name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" created pool：数据库连接池的变量名，后续请求中需要用到\nDataBase URL：例如：jdbc:mysql://localhost:3306/jmeter?user"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("root"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("password")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("jmeter"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("useUnicode")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("characterEncoding")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("gbk"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("autoReconnect")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("failOverReadOnly")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\nJDBC Driver Class：数据库驱动类型（mysql为com.mysql.jdbc.Driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nUsername：数据库登录的用户名\nPassword：数据库登录的用户名对应的密码\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])])])]),a._v(" "),s("h2",{attrs:{id:"_3-创建数据库操作请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建数据库操作请求"}},[a._v("#")]),a._v(" 3. 创建数据库操作请求")]),a._v(" "),s("p",[a._v("右击“线程组”，选择“添加”->“取样器”->“JDBC Request”->填写JDBC请求数据")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("Variable Name of Pool declared "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" JDBC Connection Configuration:填入在“JDBC Connection Configuration”中设置的“Variable Name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" created pool”名称；\nQuery:输入SQL查询语句；\nVariable names：将查询结果设置为变量名，供后续请求调用；\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/jmeter/16859071891859.png",alt:""}})]),a._v(" "),s("p",[a._v("可以添加一个结果树用于查看，后续取参数则需以"),s("code",[a._v("${xxx_1},${xxx_2}${xxx_n}")]),a._v("命名")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/jmeter/16859072681671.png",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);