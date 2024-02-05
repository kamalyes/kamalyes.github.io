(window.webpackJsonp=window.webpackJsonp||[]).push([[738],{1053:function(s,t,a){"use strict";a.r(t);var e=a(7),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("strong",[s._v("如果你想查看更多 Mysql 常用函数及操作语法格式可以在以下文章找找哦")])]),s._v(" "),t("ul",[t("li",[t("p",[t("RouterLink",{attrs:{to:"/08.数据库/03.关系型数据库/02.Mysql/59.Mysql常用操作语句汇总.html"}},[s._v("Mysql常用操作语句汇总")])],1)]),s._v(" "),t("li",[t("p",[t("RouterLink",{attrs:{to:"/08.数据库/03.关系型数据库/02.Mysql/01.Mysql常用函数汇总.html"}},[s._v("Mysql常用函数的汇总")])],1)])]),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" "),t("strong",[s._v("前言")])]),s._v(" "),t("ul",[t("li",[s._v("我们使用select进行数据查询时是会返回所有匹配的记录,如果表中某些 "),t("strong",[s._v("字段没有做唯一性约束")]),s._v(" ,那么这些字段的值就可能存在重复值")]),s._v(" "),t("li",[s._v("有时候我们想看看这个字段到底有哪几种值,这个时候需要去重方便查看,distinct关键字能发挥作用了")])]),s._v(" "),t("h3",{attrs:{id:"distinct特别注意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#distinct特别注意"}},[s._v("#")]),s._v(" distinct特别注意")]),s._v(" "),t("p",[s._v("当使用distinct的时候,只会返回指定的字段,其他字段都不会返回,所以查询语句就变成去重查询语句")]),s._v(" "),t("p",[t("strong",[s._v("常见使用场景：")])]),s._v(" "),t("ul",[t("li",[s._v("查看去重字段有哪几种值 "),t("strong",[s._v("【返回值】")])]),s._v(" "),t("li",[s._v("查看去重字段有多少个值 "),t("strong",[s._v("【返回数量】")])])]),s._v(" "),t("h2",{attrs:{id:"distinct的语法格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#distinct的语法格式"}},[s._v("#")]),s._v(" distinct的语法格式")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("字段名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("字段名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("表名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"知识点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[s._v("#")]),s._v(" 知识点")]),s._v(" "),t("ul",[t("li",[s._v("distinct只能在select语句中使用")]),s._v(" "),t("li",[s._v("distinct必须在所有字段前面")]),s._v(" "),t("li",[s._v("如果有多个字段需要去重,则会对多个字段进行组合去重, "),t("strong",[s._v("即所有字段的数据重复才会被去重")])])]),s._v(" "),t("h2",{attrs:{id:"实战栗子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实战栗子"}},[s._v("#")]),s._v(" 实战栗子")]),s._v(" "),t("h3",{attrs:{id:"栗子一-对单个字段去重"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栗子一-对单个字段去重"}},[s._v("#")]),s._v(" 栗子一：对单个字段去重")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("distinct")]),s._v(" age "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" testing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"栗子二-对多个字段去重"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栗子二-对多个字段去重"}},[s._v("#")]),s._v(" 栗子二：对多个字段去重")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("distinct")]),s._v(" sex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("age "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" testing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"栗子三-查看去重字段有多少种值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栗子三-查看去重字段有多少种值"}},[s._v("#")]),s._v(" 栗子三：查看去重字段有多少种值")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" select count(distinct age) from testing; \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"错误写法的栗子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误写法的栗子"}},[s._v("#")]),s._v(" 错误写法的栗子")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("distinct")]),s._v(" age "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" testing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("distinct")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("distinct")]),s._v(" username "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" testing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);