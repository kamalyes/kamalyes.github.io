(window.webpackJsonp=window.webpackJsonp||[]).push([[673],{985:function(e,v,t){"use strict";t.r(v);var r=t(7),_=Object(r.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图"}},[e._v("#")]),e._v(" 图")]),e._v(" "),v("p",[e._v("在计算机科学中，一个图就是一些"),v("em",[e._v("顶点")]),e._v("的集合，这些顶点通过一系列"),v("em",[e._v("边")]),e._v("结对（连接）。顶点用圆圈表示，边就是这些圆圈之间的连线。顶点之间通过边连接。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/data-structure/graph/graph.png",alt:"img"}})]),e._v(" "),v("h2",{attrs:{id:"什么是图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是图"}},[e._v("#")]),e._v(" 什么是图")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("阶（Order）")]),e._v(" - 图 G 中点集 V 的大小称作图 G 的阶。")]),e._v(" "),v("li",[v("strong",[e._v("子图（Sub-Graph）")]),e._v(" - 当图 G'=(V',E')其中 V‘包含于 V，E’包含于 E，则 G'称作图 G=(V,E)的子图。每个图都是本身的子图。")]),e._v(" "),v("li",[e._v("生成子图（Spanning Sub-Graph） - 指满足条件 V(G') = V(G)的 G 的子图 G'。")]),e._v(" "),v("li",[e._v("导出子图（Induced Subgraph） - 以图 G 的顶点集 V 的"),v("a",{attrs:{href:"https://baike.baidu.com/item/%E9%9D%9E%E7%A9%BA%E5%AD%90%E9%9B%86/10180460",target:"_blank",rel:"noopener noreferrer"}},[e._v("非空子集"),v("OutboundLink")],1),e._v("V1 为顶点集，以两端点均在 V1 中的全体边为边集的 G 的子图，称为 V1 导出的导出子图；以图 G 的边集 E 的非空子集 E1 为边集，以 E1 中边关联的顶点的全体为顶点集的 G 的子图，称为 E1 导出的导出子图。")]),e._v(" "),v("li",[v("strong",[e._v("有向图")]),e._v(" - 如果给图的每条边规定一个方向，那么得到的图称为有向图。")]),e._v(" "),v("li",[v("strong",[e._v("无向图")]),e._v(" - 边没有方向的图称为无向图。")]),e._v(" "),v("li",[v("strong",[e._v("度（Degree）")]),e._v(" - 一个顶点的度是指与该顶点相关联的边的条数，顶点 v 的度记作 d(v)。")]),e._v(" "),v("li",[v("strong",[e._v("入度（In-degree）"),v("strong",[e._v("和")]),e._v("出度（Out-degree）")]),e._v(" - 对于有向图来说，一个顶点的度可细分为入度和出度。一个顶点的入度是指与其关联的各边之中，以其为终点的边数；出度则是相对的概念，指以该顶点为起点的边数。")]),e._v(" "),v("li",[v("strong",[e._v("自环（Loop）")]),e._v(" - 若一条边的两个顶点为同一顶点，则此边称作自环。")]),e._v(" "),v("li",[e._v("路径（Path） - 从 u 到 v 的一条路径是指一个序列 v0,e1,v1,e2,v2,...ek,vk，其中 ei 的顶点为 vi 及 vi - 1，k 称作路径的长度。如果它的起止顶点相同，该路径是“闭”的，反之，则称为“开”的。一条路径称为一简单路径(simple path)，如果路径中除起始与终止"),v("a",{attrs:{href:"https://baike.baidu.com/item/%E9%A1%B6%E7%82%B9",target:"_blank",rel:"noopener noreferrer"}},[e._v("顶点"),v("OutboundLink")],1),e._v("可以重合外，所有顶点两两不等。")]),e._v(" "),v("li",[v("strong",[e._v("行迹（Trace）")]),e._v(" - 如果路径 P(u,v)中的边各不相同，则该路径称为 u 到 v 的一条行迹。闭的行迹称作回路（Circuit）。")]),e._v(" "),v("li",[v("strong",[e._v("轨迹（Track）")]),e._v(" - 如果路径 P(u,v)中的顶点各不相同，则该路径称为 u 到 v 的一条轨迹。闭的轨迹称作圈（Cycle）。")]),e._v(" "),v("li",[v("strong",[e._v("桥（Bridge）")]),e._v(" - 若去掉一条边，便会使得整个图不连通，该边称为"),v("a",{attrs:{href:"https://baike.baidu.com/item/%E6%A1%A5",target:"_blank",rel:"noopener noreferrer"}},[e._v("桥"),v("OutboundLink")],1),e._v("。")])]),e._v(" "),v("p",[e._v("如果图的边没有方向性，则被成为无向图。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20220314093554.jpg",alt:"img"}})]),e._v(" "),v("h2",{attrs:{id:"图的基本操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图的基本操作"}},[e._v("#")]),e._v(" 图的基本操作")]),e._v(" "),v("ul",[v("li",[e._v("创建一个图结构 - CreateGraph(G)")]),e._v(" "),v("li",[e._v("检索给定顶点 - LocateVex(G,elem)")]),e._v(" "),v("li",[e._v("获取图中某个顶点 - GetVex(G,v)")]),e._v(" "),v("li",[e._v("为图中顶点赋值 - PutVex(G,v,value)")]),e._v(" "),v("li",[e._v("返回第一个邻接点 - FirstAdjVex(G,v)")]),e._v(" "),v("li",[e._v("返回下一个邻接点 - NextAdjVex(G,v,w)")]),e._v(" "),v("li",[e._v("插入一个顶点 - InsertVex(G,v)")]),e._v(" "),v("li",[e._v("删除一个顶点 - DeleteVex(G,v)")]),e._v(" "),v("li",[e._v("插入一条边 - InsertEdge(G,v,w)")]),e._v(" "),v("li",[e._v("删除一条边 - DeleteEdge(G,v,w)")]),e._v(" "),v("li",[e._v("遍历图 - Traverse(G,v)")])]),e._v(" "),v("h2",{attrs:{id:"参考资料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://time.geekbang.org/column/intro/100017301",target:"_blank",rel:"noopener noreferrer"}},[e._v("数据结构与算法之美"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=_.exports}}]);