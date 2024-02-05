(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{538:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"java-容器之-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-容器之-set"}},[s._v("#")]),s._v(" Java 容器之 Set")]),s._v(" "),a("h2",{attrs:{id:"set-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-简介"}},[s._v("#")]),s._v(" Set 简介")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/java/javacore/container/Set-diagrams.png",width:"400"}})]),s._v(" "),a("p",[s._v("Set 家族成员简介：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Set")]),s._v(" 继承了 "),a("code",[s._v("Collection")]),s._v(" 的接口。实际上 "),a("code",[s._v("Set")]),s._v(" 就是 "),a("code",[s._v("Collection")]),s._v("，只是行为略有不同："),a("code",[s._v("Set")]),s._v(" 集合不允许有重复元素。")]),s._v(" "),a("li",[a("code",[s._v("SortedSet")]),s._v(" 继承了 "),a("code",[s._v("Set")]),s._v(" 的接口。"),a("code",[s._v("SortedSet")]),s._v(" 中的内容是排序的唯一值，排序的方法是通过比较器(Comparator)。")]),s._v(" "),a("li",[a("code",[s._v("NavigableSet")]),s._v(" 继承了 "),a("code",[s._v("SortedSet")]),s._v(' 的接口。它提供了丰富的查找方法：如"获取大于/等于某值的元素"、“获取小于/等于某值的元素”等等。')]),s._v(" "),a("li",[a("code",[s._v("AbstractSet")]),s._v(" 是一个抽象类，它继承于 "),a("code",[s._v("AbstractCollection")]),s._v("，"),a("code",[s._v("AbstractCollection")]),s._v(" 实现了 Set 中的绝大部分方法，为实现 "),a("code",[s._v("Set")]),s._v(" 的实例类提供了便利。")]),s._v(" "),a("li",[a("code",[s._v("HashSet")]),s._v(" 类依赖于 "),a("code",[s._v("HashMap")]),s._v("，它实际上是通过 "),a("code",[s._v("HashMap")]),s._v(" 实现的。"),a("code",[s._v("HashSet")]),s._v(" 中的元素是无序的、散列的。")]),s._v(" "),a("li",[a("code",[s._v("TreeSet")]),s._v(" 类依赖于 "),a("code",[s._v("TreeMap")]),s._v("，它实际上是通过 "),a("code",[s._v("TreeMap")]),s._v(" 实现的。"),a("code",[s._v("TreeSet")]),s._v(" 中的元素是有序的，它是按自然排序或者用户指定比较器排序的 Set。")]),s._v(" "),a("li",[a("code",[s._v("LinkedHashSet")]),s._v(" 是按插入顺序排序的 Set。")]),s._v(" "),a("li",[a("code",[s._v("EnumSet")]),s._v(" 是只能存放 Emum 枚举类型的 Set。")])]),s._v(" "),a("h3",{attrs:{id:"set-接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-接口"}},[s._v("#")]),s._v(" Set 接口")]),s._v(" "),a("p",[a("code",[s._v("Set")]),s._v(" 继承了 "),a("code",[s._v("Collection")]),s._v(" 的接口。实际上，"),a("code",[s._v("Set")]),s._v(" 就是 "),a("code",[s._v("Collection")]),s._v("，二者提供的方法完全相同。")]),s._v(" "),a("p",[a("code",[s._v("Set")]),s._v(" 接口定义如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Set")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Collection")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"sortedset-接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sortedset-接口"}},[s._v("#")]),s._v(" SortedSet 接口")]),s._v(" "),a("p",[s._v("继承了 "),a("code",[s._v("Set")]),s._v(" 的接口。"),a("code",[s._v("SortedSet")]),s._v(" 中的内容是排序的唯一值，排序的方法是通过比较器(Comparator)。")]),s._v(" "),a("p",[a("code",[s._v("SortedSet")]),s._v(" 接口定义如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SortedSet")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Set")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("SortedSet")]),s._v(" 接口新扩展的方法：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("comparator")]),s._v(" - 返回 Comparator")]),s._v(" "),a("li",[a("code",[s._v("subSet")]),s._v(" - 返回指定区间的子集")]),s._v(" "),a("li",[a("code",[s._v("headSet")]),s._v(" - 返回小于指定元素的子集")]),s._v(" "),a("li",[a("code",[s._v("tailSet")]),s._v(" - 返回大于指定元素的子集")]),s._v(" "),a("li",[a("code",[s._v("first")]),s._v(" - 返回第一个元素")]),s._v(" "),a("li",[a("code",[s._v("last")]),s._v(" - 返回最后一个元素")]),s._v(" "),a("li",[s._v("spliterator")])]),s._v(" "),a("h3",{attrs:{id:"navigableset-接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navigableset-接口"}},[s._v("#")]),s._v(" NavigableSet 接口")]),s._v(" "),a("p",[a("code",[s._v("NavigableSet")]),s._v(" 继承了 "),a("code",[s._v("SortedSet")]),s._v("。它提供了丰富的查找方法。")]),s._v(" "),a("p",[a("code",[s._v("NavigableSet")]),s._v(" 接口定义如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NavigableSet")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SortedSet")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("NavigableSet")]),s._v(" 接口新扩展的方法：")]),s._v(" "),a("ul",[a("li",[s._v("lower - 返回小于指定值的元素中最接近的元素")]),s._v(" "),a("li",[s._v("higher - 返回大于指定值的元素中最接近的元素")]),s._v(" "),a("li",[s._v("floor - 返回小于或等于指定值的元素中最接近的元素")]),s._v(" "),a("li",[s._v("ceiling - 返回大于或等于指定值的元素中最接近的元素")]),s._v(" "),a("li",[s._v("pollFirst - 检索并移除第一个（最小的）元素")]),s._v(" "),a("li",[s._v("pollLast - 检索并移除最后一个（最大的）元素")]),s._v(" "),a("li",[s._v("descendingSet - 返回反序排列的 Set")]),s._v(" "),a("li",[s._v("descendingIterator - 返回反序排列的 Set 的迭代器")]),s._v(" "),a("li",[s._v("subSet - 返回指定区间的子集")]),s._v(" "),a("li",[s._v("headSet - 返回小于指定元素的子集")]),s._v(" "),a("li",[s._v("tailSet - 返回大于指定元素的子集")])]),s._v(" "),a("h3",{attrs:{id:"abstractset-抽象类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstractset-抽象类"}},[s._v("#")]),s._v(" AbstractSet 抽象类")]),s._v(" "),a("p",[a("code",[s._v("AbstractSet")]),s._v(" 类提供 "),a("code",[s._v("Set")]),s._v(" 接口的核心实现，以最大限度地减少实现 "),a("code",[s._v("Set")]),s._v(" 接口所需的工作。")]),s._v(" "),a("p",[a("code",[s._v("AbstractSet")]),s._v(" 抽象类定义如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AbstractSet")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AbstractCollection")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Set")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("事实上，主要的实现已经在 "),a("code",[s._v("AbstractCollection")]),s._v(" 中完成。")]),s._v(" "),a("h2",{attrs:{id:"hashset-类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hashset-类"}},[s._v("#")]),s._v(" HashSet 类")]),s._v(" "),a("p",[a("code",[s._v("HashSet")]),s._v(" 类依赖于 "),a("code",[s._v("HashMap")]),s._v("，它实际上是通过 "),a("code",[s._v("HashMap")]),s._v(" 实现的。"),a("code",[s._v("HashSet")]),s._v(" 中的元素是无序的、散列的。")]),s._v(" "),a("p",[a("code",[s._v("HashSet")]),s._v(" 类定义如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashSet")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AbstractSet")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Set")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cloneable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("Serializable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"hashset-要点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hashset-要点"}},[s._v("#")]),s._v(" HashSet 要点")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("HashSet")]),s._v(" 通过继承 "),a("code",[s._v("AbstractSet")]),s._v(" 实现了 "),a("code",[s._v("Set")]),s._v(" 接口中的骨干方法。")]),s._v(" "),a("li",[a("code",[s._v("HashSet")]),s._v(" 实现了 "),a("code",[s._v("Cloneable")]),s._v("，所以支持克隆。")]),s._v(" "),a("li",[a("code",[s._v("HashSet")]),s._v(" 实现了 "),a("code",[s._v("Serializable")]),s._v("，所以支持序列化。")]),s._v(" "),a("li",[a("code",[s._v("HashSet")]),s._v(" 中存储的元素是无序的。")]),s._v(" "),a("li",[a("code",[s._v("HashSet")]),s._v(" 允许 null 值的元素。")]),s._v(" "),a("li",[a("code",[s._v("HashSet")]),s._v(" 不是线程安全的。")])]),s._v(" "),a("h3",{attrs:{id:"hashset-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hashset-原理"}},[s._v("#")]),s._v(" HashSet 原理")]),s._v(" "),a("p",[a("strong",[a("code",[s._v("HashSet")]),s._v(" 是基于 "),a("code",[s._v("HashMap")]),s._v(" 实现的。")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// HashSet 的核心，通过维护一个 HashMap 实体来实现 HashSet 方法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transient")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// PRESENT 是用于关联 map 中当前操作元素的一个虚拟值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PRESENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("HashSet")]),s._v(" 中维护了一个 "),a("code",[s._v("HashMap")]),s._v(" 对象 map，"),a("code",[s._v("HashSet")]),s._v(" 的重要方法，如 "),a("code",[s._v("add")]),s._v("、"),a("code",[s._v("remove")]),s._v("、"),a("code",[s._v("iterator")]),s._v("、"),a("code",[s._v("clear")]),s._v("、"),a("code",[s._v("size")]),s._v(" 等都是围绕 map 实现的。\n"),a("ul",[a("li",[a("code",[s._v("HashSet")]),s._v(" 类中通过定义 "),a("code",[s._v("writeObject()")]),s._v(" 和 "),a("code",[s._v("readObject()")]),s._v(" 方法确定了其序列化和反序列化的机制。")])])]),s._v(" "),a("li",[s._v("PRESENT 是用于关联 map 中当前操作元素的一个虚拟值。")])]),s._v(" "),a("h2",{attrs:{id:"treeset-类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#treeset-类"}},[s._v("#")]),s._v(" TreeSet 类")]),s._v(" "),a("p",[a("code",[s._v("TreeSet")]),s._v(" 类依赖于 "),a("code",[s._v("TreeMap")]),s._v("，它实际上是通过 "),a("code",[s._v("TreeMap")]),s._v(" 实现的。"),a("code",[s._v("TreeSet")]),s._v(" 中的元素是有序的，它是按自然排序或者用户指定比较器排序的 Set。")]),s._v(" "),a("p",[a("code",[s._v("TreeSet")]),s._v(" 类定义如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeSet")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AbstractSet")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NavigableSet")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cloneable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("Serializable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"treeset-要点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#treeset-要点"}},[s._v("#")]),s._v(" TreeSet 要点")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("TreeSet")]),s._v(" 通过继承 "),a("code",[s._v("AbstractSet")]),s._v(" 实现了 "),a("code",[s._v("NavigableSet")]),s._v(" 接口中的骨干方法。")]),s._v(" "),a("li",[a("code",[s._v("TreeSet")]),s._v(" 实现了 "),a("code",[s._v("Cloneable")]),s._v("，所以支持克隆。")]),s._v(" "),a("li",[a("code",[s._v("TreeSet")]),s._v(" 实现了 "),a("code",[s._v("Serializable")]),s._v("，所以支持序列化。")]),s._v(" "),a("li",[a("code",[s._v("TreeSet")]),s._v(" 中存储的元素是有序的。排序规则是自然顺序或比较器（"),a("code",[s._v("Comparator")]),s._v("）中提供的顺序规则。")]),s._v(" "),a("li",[a("code",[s._v("TreeSet")]),s._v(" 不是线程安全的。")])]),s._v(" "),a("h3",{attrs:{id:"treeset-源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#treeset-源码"}},[s._v("#")]),s._v(" TreeSet 源码")]),s._v(" "),a("p",[a("strong",[s._v("TreeSet 是基于 TreeMap 实现的。")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// TreeSet 的核心，通过维护一个 NavigableMap 实体来实现 TreeSet 方法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transient")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NavigableMap")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// PRESENT 是用于关联 map 中当前操作元素的一个虚拟值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PRESENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("TreeSet")]),s._v(" 中维护了一个 "),a("code",[s._v("NavigableMap")]),s._v(" 对象 map（实际上是一个 TreeMap 实例），"),a("code",[s._v("TreeSet")]),s._v(" 的重要方法，如 "),a("code",[s._v("add")]),s._v("、"),a("code",[s._v("remove")]),s._v("、"),a("code",[s._v("iterator")]),s._v("、"),a("code",[s._v("clear")]),s._v("、"),a("code",[s._v("size")]),s._v(" 等都是围绕 map 实现的。")]),s._v(" "),a("li",[a("code",[s._v("PRESENT")]),s._v(" 是用于关联 "),a("code",[s._v("map")]),s._v(" 中当前操作元素的一个虚拟值。"),a("code",[s._v("TreeSet")]),s._v(" 中的元素都被当成 "),a("code",[s._v("TreeMap")]),s._v(" 的 key 存储，而 value 都填的是 "),a("code",[s._v("PRESENT")]),s._v("。")])]),s._v(" "),a("h2",{attrs:{id:"linkedhashset-类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linkedhashset-类"}},[s._v("#")]),s._v(" LinkedHashSet 类")]),s._v(" "),a("p",[a("code",[s._v("LinkedHashSet")]),s._v(" 是按插入顺序排序的 Set。")]),s._v(" "),a("p",[a("code",[s._v("LinkedHashSet")]),s._v(" 类定义如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedHashSet")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashSet")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Set")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cloneable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("Serializable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"linkedhashset-要点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linkedhashset-要点"}},[s._v("#")]),s._v(" LinkedHashSet 要点")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("LinkedHashSet")]),s._v(" 通过继承 "),a("code",[s._v("HashSet")]),s._v(" 实现了 "),a("code",[s._v("Set")]),s._v(" 接口中的骨干方法。")]),s._v(" "),a("li",[a("code",[s._v("LinkedHashSet")]),s._v(" 实现了 "),a("code",[s._v("Cloneable")]),s._v("，所以支持克隆。")]),s._v(" "),a("li",[a("code",[s._v("LinkedHashSet")]),s._v(" 实现了 "),a("code",[s._v("Serializable")]),s._v("，所以支持序列化。")]),s._v(" "),a("li",[a("code",[s._v("LinkedHashSet")]),s._v(" 中存储的元素是按照插入顺序保存的。")]),s._v(" "),a("li",[a("code",[s._v("LinkedHashSet")]),s._v(" 不是线程安全的。")])]),s._v(" "),a("h3",{attrs:{id:"linkedhashset-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linkedhashset-原理"}},[s._v("#")]),s._v(" LinkedHashSet 原理")]),s._v(" "),a("p",[a("code",[s._v("LinkedHashSet")]),s._v(" 有三个构造方法，无一例外，都是调用父类 "),a("code",[s._v("HashSet")]),s._v(" 的构造方法。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedHashSet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" initialCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" loadFactor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("initialCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" loadFactor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedHashSet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" initialCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("initialCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".75f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedHashSet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".75f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("需要强调的是："),a("strong",[s._v("LinkedHashSet 构造方法实际上调用的是父类 HashSet 的非 public 构造方法。")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashSet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" initialCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" loadFactor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" dummy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    map "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedHashMap")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("initialCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" loadFactor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("不同于 "),a("code",[s._v("HashSet")]),s._v(" "),a("code",[s._v("public")]),s._v(" 构造方法中初始化的 "),a("code",[s._v("HashMap")]),s._v(" 实例，这个构造方法中，初始化了 "),a("code",[s._v("LinkedHashMap")]),s._v(" 实例。")]),s._v(" "),a("p",[s._v("也就是说，实际上，"),a("code",[s._v("LinkedHashSet")]),s._v(" 维护了一个双链表。由双链表的特性可以知道，它是按照元素的插入顺序保存的。所以，这就是 "),a("code",[s._v("LinkedHashSet")]),s._v(" 中存储的元素是按照插入顺序保存的原理。")]),s._v(" "),a("h2",{attrs:{id:"enumset-类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enumset-类"}},[s._v("#")]),s._v(" EnumSet 类")]),s._v(" "),a("p",[a("code",[s._v("EnumSet")]),s._v(" 类定义如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EnumSet")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Enum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AbstractSet")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cloneable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("Serializable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"enumset-要点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enumset-要点"}},[s._v("#")]),s._v(" EnumSet 要点")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("EnumSet")]),s._v(" 继承了 "),a("code",[s._v("AbstractSet")]),s._v("，所以有 "),a("code",[s._v("Set")]),s._v(" 接口中的骨干方法。")]),s._v(" "),a("li",[a("code",[s._v("EnumSet")]),s._v(" 实现了 "),a("code",[s._v("Cloneable")]),s._v("，所以支持克隆。")]),s._v(" "),a("li",[a("code",[s._v("EnumSet")]),s._v(" 实现了 "),a("code",[s._v("Serializable")]),s._v("，所以支持序列化。")]),s._v(" "),a("li",[a("code",[s._v("EnumSet")]),s._v(" 通过 "),a("code",[s._v("<E extends Enum<E>>")]),s._v(" 限定了存储元素必须是枚举值。")]),s._v(" "),a("li",[a("code",[s._v("EnumSet")]),s._v(" 没有构造方法，只能通过类中的 "),a("code",[s._v("static")]),s._v(" 方法来创建 "),a("code",[s._v("EnumSet")]),s._v(" 对象。")]),s._v(" "),a("li",[a("code",[s._v("EnumSet")]),s._v(" 是有序的。以枚举值在 "),a("code",[s._v("EnumSet")]),s._v(" 类中的定义顺序来决定集合元素的顺序。")]),s._v(" "),a("li",[a("code",[s._v("EnumSet")]),s._v(" 不是线程安全的。")])]),s._v(" "),a("h2",{attrs:{id:"要点总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#要点总结"}},[s._v("#")]),s._v(" 要点总结")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20200221190717.png",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://item.jd.com/10058164.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Java 编程思想（Thinking in java）"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);