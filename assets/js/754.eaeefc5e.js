(window.webpackJsonp=window.webpackJsonp||[]).push([[754],{1066:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("strong",[s._v("如果你想查看更多 Mysql 常用函数及操作语法格式可以在以下文章找找哦")])]),s._v(" "),t("ul",[t("li",[t("p",[t("RouterLink",{attrs:{to:"/08.数据库/03.关系型数据库/02.Mysql/59.Mysql常用操作语句汇总.html"}},[s._v("Mysql常用操作语句汇总")])],1)]),s._v(" "),t("li",[t("p",[t("RouterLink",{attrs:{to:"/08.数据库/03.关系型数据库/02.Mysql/01.Mysql常用函数汇总.html"}},[s._v("Mysql常用函数的汇总")])],1)])]),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" "),t("strong",[s._v("前言")])]),s._v(" "),t("ul",[t("li",[s._v("其实Mysql并没有全连接，Oracle才有全连接（full join）")]),s._v(" "),t("li",[s._v("但是在MySQL中，union关键字可以达到同样的效果，所以这里也要介绍下union")])]),s._v(" "),t("h2",{attrs:{id:"union-的语法格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#union-的语法格式"}},[s._v("#")]),s._v(" union 的语法格式")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[sql1]\nUNION [ALL | DISTINCT]\n[sql2]\nUNION [ALL | DISTINCT]\n[sql3]\n....\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h4",{attrs:{id:"语法格式说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法格式说明"}},[s._v("#")]),s._v(" 语法格式说明")]),s._v(" "),t("ul",[t("li",[s._v("sql1、sql2、sql3：平时写的查询 sql，可以连接很多条 sql")]),s._v(" "),t("li",[s._v("ALL：可选参数，返回所有结果集，"),t("strong",[s._v("包含重复数据")])]),s._v(" "),t("li",[s._v("distinct：可选参数，"),t("strong",[s._v("删除结果集中重复的数据（默认只写 union 也会删除重复数据，所以不加也没事）")])])]),s._v(" "),t("h2",{attrs:{id:"先看看dept、emp表有什么数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先看看dept、emp表有什么数据"}},[s._v("#")]),s._v(" 先看看dept、emp表有什么数据")]),s._v(" "),t("h4",{attrs:{id:"dept表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dept表"}},[s._v("#")]),s._v(" dept表")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/mysql/join_table_query_for_dept.png",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"emp表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#emp表"}},[s._v("#")]),s._v(" emp表")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/mysql/join_table_query_for_emp.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"union-all-的栗子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#union-all-的栗子"}},[s._v("#")]),s._v(" union all 的栗子")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("left")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" dept "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dept_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("union")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("right")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" dept "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dept_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/mysql/Snipaste_2023-02-17_13-10-01.png",alt:""}})]),s._v(" "),t("p",[s._v("蓝色圈子：第一条 sql 的查询结果")]),s._v(" "),t("p",[s._v("红色圈子：第二条 sql 的查询结果")]),s._v(" "),t("h2",{attrs:{id:"union-的栗子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#union-的栗子"}},[s._v("#")]),s._v(" union 的栗子")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("left")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" dept "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dept_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("union")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("right")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" dept "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dept_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/mysql/Snipaste_2023-02-17_13-10-36.png",alt:""}})]),s._v(" "),t("p",[t("strong",[s._v("上图是去重之后的结果，而没有去重的结果可以看union all 的栗子")])]),s._v(" "),t("h4",{attrs:{id:"知识点-重点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#知识点-重点"}},[s._v("#")]),s._v(" 知识点（重点）")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("使用 union 连接的多条sql，每个 sql 查询出来的结果集的字段名称要一致**【只需要名称一致即可，顺序可以不同，但建议相同】**，可以看看下面的栗子")])]),s._v(" "),t("li",[t("p",[s._v("最终 union 连接查询的结果集的字段顺序会"),t("strong",[s._v("以第一个 sql 查出来结果集的字段顺序为基准")])])])]),s._v(" "),t("h4",{attrs:{id:"union-连接的两条-sql-各自指定的字段顺序不相同的栗子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#union-连接的两条-sql-各自指定的字段顺序不相同的栗子"}},[s._v("#")]),s._v(" union 连接的两条 sql ，各自指定的字段顺序不相同的栗子")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("leader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("is_enable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("dept_id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" dept_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("union")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" leader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/mysql/Snipaste_2023-02-17_13-12-00.png",alt:""}})]),s._v(" "),t("p",[s._v("从上图可以看出，第二条 sql 查出来的字段顺序和最终结果集字段顺序明显不一样，导致数据错乱的问题")]),s._v(" "),t("p",[t("strong",[s._v("所以！！union 连接的每条 sql 指定的字段顺序最好一致！！")])]),s._v(" "),t("p",[t("strong",[s._v("所以！！"),t("strong",[s._v("union 连接的")]),s._v("每条 sql 指定的字段顺序最好一致！！")])]),s._v(" "),t("p",[t("strong",[t("strong",[s._v("所以！！"),t("strong",[s._v("union 连接的")]),s._v("每条 sql 指定的字段顺序最好一致！！")])])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" dept_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("union")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("dept_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("leader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("is_enable   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" leader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/mysql/Snipaste_2023-02-17_13-12-39.png",alt:""}})])])}),[],!1,null,null,null);t.default=n.exports}}]);