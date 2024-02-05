(window.webpackJsonp=window.webpackJsonp||[]).push([[731],{1044:function(s,t,a){"use strict";a.r(t);var n=a(7),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("strong",[s._v("如果你想查看更多 Mysql 常用函数及操作语法格式可以在以下文章找找哦")])]),s._v(" "),t("ul",[t("li",[t("p",[t("RouterLink",{attrs:{to:"/08.数据库/03.关系型数据库/02.Mysql/59.Mysql常用操作语句汇总.html"}},[s._v("Mysql常用操作语句汇总")])],1)]),s._v(" "),t("li",[t("p",[t("RouterLink",{attrs:{to:"/08.数据库/03.关系型数据库/02.Mysql/01.Mysql常用函数汇总.html"}},[s._v("Mysql常用函数的汇总")])],1)])]),s._v(" "),t("h2",{attrs:{id:"作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[s._v("#")]),s._v(" 作用")]),s._v(" "),t("p",[s._v("按照指定的分隔符划分字符串，可指定分隔符出现的次数")]),s._v(" "),t("h2",{attrs:{id:"substring-index-的语法格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#substring-index-的语法格式"}},[s._v("#")]),s._v(" substring_index  的语法格式")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("SUBSTRING_INDEX(str, delim, count)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"语法格式说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法格式说明"}},[s._v("#")]),s._v(" 语法格式说明")]),s._v(" "),t("ul",[t("li",[s._v("**str：**需要操作的字符串")]),s._v(" "),t("li",[s._v("**delim：**分隔符")]),s._v(" "),t("li",[s._v("**count：**匹配 delim 出现的次数，可正数可负数")])]),s._v(" "),t("h2",{attrs:{id:"栗子一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栗子一"}},[s._v("#")]),s._v(" 栗子一")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" SUBSTRING_INDEX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'www.mysql.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# www")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" SUBSTRING_INDEX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'www.mysql.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# com")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" SUBSTRING_INDEX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'www.mysql.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# www.mysql")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" SUBSTRING_INDEX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'www.mysql.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql.com")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("如果是负数则从"),t("strong",[s._v("右边")]),s._v("开始寻找 delim，正数则是"),t("strong",[s._v("左边")])]),s._v(" "),t("li",[s._v("如果是1、-1，则返回第一个 delim 之前的字符串")]),s._v(" "),t("li",[s._v("如果>1、< -1，则还会返回前面匹配到的 delim")])]),s._v(" "),t("h2",{attrs:{id:"栗子二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栗子二"}},[s._v("#")]),s._v(" 栗子二")]),s._v(" "),t("p",[s._v("假设有三个 IP：127.0.0.1、192.128.0.15、255.255.255.255，要分别取每一个号段的值并返回")]),s._v(" "),t("h4",{attrs:{id:"sql-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-语句"}},[s._v("#")]),s._v(" sql 语句")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n　　SUBSTRING_INDEX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" part1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n　　SUBSTRING_INDEX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SUBSTRING_INDEX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" part2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n　　SUBSTRING_INDEX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SUBSTRING_INDEX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" part3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n　　SUBSTRING_INDEX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" part4  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" IPS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h4",{attrs:{id:"执行结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行结果"}},[s._v("#")]),s._v(" 执行结果")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------+-------+-------+-------+-------+\n| ip              | part1 | part2 | part3 | part4 |\n+-----------------+-------+-------+-------+-------+\n| 127.0.0.1       | 127   | 0     | 0     | 1     |\n| 192.128.0.15    | 192   | 128   | 0     | 15    |\n| 255.255.255.255 | 255   | 255   | 255   | 255   |\n+-----------------+-------+-------+-------+-------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("中间的号段需要重复调用 SUBSTRING_INDEX，因为第一次调用的时候还是会返回两个号段")]),s._v(" "),t("h2",{attrs:{id:"栗子三"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栗子三"}},[s._v("#")]),s._v(" 栗子三")]),s._v(" "),t("p",[s._v("可以说是一个面试题，解法有多种，那么如果用 SUBSTRING_INDEX 要如何编写呢？")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/mysql/Snipaste_2023-02-17_12-55-15.png",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"sql-语句-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-语句-2"}},[s._v("#")]),s._v(" sql 语句")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("YEAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    SUBSTRING_INDEX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" GROUP_CONCAT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" amount "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" m1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    SUBSTRING_INDEX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" SUBSTRING_INDEX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" GROUP_CONCAT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" amount "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" m2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    SUBSTRING_INDEX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" SUBSTRING_INDEX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" GROUP_CONCAT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" amount "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" m3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    SUBSTRING_INDEX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" GROUP_CONCAT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" amount "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" m4 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("\n    tests \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("YEAR")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h4",{attrs:{id:"执行结果-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行结果-2"}},[s._v("#")]),s._v(" 执行结果")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/mysql/Snipaste_2023-02-17_12-53-29.png",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);