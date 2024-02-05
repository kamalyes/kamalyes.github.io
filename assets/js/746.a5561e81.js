(window.webpackJsonp=window.webpackJsonp||[]).push([[746],{1060:function(s,t,a){"use strict";a.r(t);var r=a(7),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("strong",[s._v("如果你想查看更多 Mysql 常用函数及操作语法格式可以在以下文章找找哦")])]),s._v(" "),t("ul",[t("li",[t("p",[t("RouterLink",{attrs:{to:"/08.数据库/03.关系型数据库/02.Mysql/59.Mysql常用操作语句汇总.html"}},[s._v("Mysql常用操作语句汇总")])],1)]),s._v(" "),t("li",[t("p",[t("RouterLink",{attrs:{to:"/08.数据库/03.关系型数据库/02.Mysql/01.Mysql常用函数汇总.html"}},[s._v("Mysql常用函数的汇总")])],1)])]),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" "),t("strong",[s._v("前言")])]),s._v(" "),t("ul",[t("li",[s._v("group by 关键字可以根据一个或多个字段对查询结果进行分组")]),s._v(" "),t("li",[s._v("group by 一般都会 "),t("strong",[s._v("结合Mysql聚合函数")]),s._v(" 来使用")]),s._v(" "),t("li",[s._v("如果需要指定条件来过滤分组后的结果集，需要结合 having 关键字；"),t("strong",[s._v("原因：")]),s._v(" where不能与聚合函数联合使用 "),t("strong",[s._v("并且")]),s._v(" where 是在 group by 之前执行的")])]),s._v(" "),t("h2",{attrs:{id:"group-by-的语法格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#group-by-的语法格式"}},[s._v("#")]),s._v(" group by 的语法格式")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("字段名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("字段名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("字段名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"group-by-单字段分组的栗子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#group-by-单字段分组的栗子"}},[s._v("#")]),s._v(" group by 单字段分组的栗子")]),s._v(" "),t("p",[s._v("对sex单个字段进行分组查询")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" yyTest "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" sex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"知识点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[s._v("#")]),s._v(" 知识点")]),s._v(" "),t("p",[s._v("分组之后，只会返回组内第一条数据")]),s._v(" "),t("h2",{attrs:{id:"group-by-多字段分组的栗子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#group-by-多字段分组的栗子"}},[s._v("#")]),s._v(" group by 多字段分组的栗子")]),s._v(" "),t("p",[s._v("先按照age进行分组，然后再在每个组内按department分组")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" yyTest "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("department"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"知识点-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#知识点-2"}},[s._v("#")]),s._v(" 知识点")]),s._v(" "),t("ul",[t("li",[s._v("多个字段分组查询时，先按照第一个字段分组，如果第一个字段"),t("strong",[s._v("有相同值")]),s._v("，则"),t("strong",[s._v("把分组结果再按第二个字段进行分组")]),s._v("，以此类推")]),s._v(" "),t("li",[s._v("如果第一个字段"),t("strong",[s._v("每个值都是唯一的")]),s._v("，则不会按照第二个字段再进行分组了")])]),s._v(" "),t("h2",{attrs:{id:"group-by-group-concat-的栗子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#group-by-group-concat-的栗子"}},[s._v("#")]),s._v(" group by + group_concat()的栗子")]),s._v(" "),t("p",[s._v("group_concat()可以将分组后每个组内的值都显示出来")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" department"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("group_concat"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"部门员工名字"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" yyTest "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" department"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("可以看到，按department部门分组 ，然后查看每个部门都有哪些员工的名字；还是很便捷的")]),s._v(" "),t("h2",{attrs:{id:"group-by-聚合函数的栗子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#group-by-聚合函数的栗子"}},[s._v("#")]),s._v(" group by +聚合函数的栗子")]),s._v(" "),t("h4",{attrs:{id:"有什么聚合函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有什么聚合函数"}},[s._v("#")]),s._v(" 有什么聚合函数？")]),s._v(" "),t("ul",[t("li",[s._v("count()：统计记录的条数")]),s._v(" "),t("li",[s._v("sum()：字段值的总和")]),s._v(" "),t("li",[s._v("max()：字段值的最大值")]),s._v(" "),t("li",[s._v("min()：字段值的最小值")]),s._v(" "),t("li",[s._v("avg()：字段值的平均值")])]),s._v(" "),t("h4",{attrs:{id:"具体的栗子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体的栗子"}},[s._v("#")]),s._v(" 具体的栗子")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# count统计条数\nselect count(*) from yyTest group by department;\n\n# sum总和\nselect sum(age) from yyTest group by department;\n\n# max最大值\nselect max(age) from yyTest group by department;\n\n# min最小值\nselect min(age) from yyTest group by department;\n\n# 平均值\nselect avg(age) from yyTest group by department;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h2",{attrs:{id:"group-by-with-rollup的栗子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#group-by-with-rollup的栗子"}},[s._v("#")]),s._v(" group by + with rollup的栗子")]),s._v(" "),t("p",[s._v("with rollup用来在所有记录的最后加上一条记录，显示上面所有记录每个字段的总和（不懂的直接看栗子）")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" GROUP_CONCAT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" yyTest "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" department "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with rollup")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" yyTest "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" department "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with rollup")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" yyTest "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" department "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with rollup")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);