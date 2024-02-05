(window.webpackJsonp=window.webpackJsonp||[]).push([[799],{1113:function(e,t,r){"use strict";r.r(t);var v=r(7),a=Object(v.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"elasticsearch-快速入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-快速入门"}},[e._v("#")]),e._v(" Elasticsearch 快速入门")]),e._v(" "),t("blockquote",[t("p",[t("strong",[t("a",{attrs:{href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch"),t("OutboundLink")],1),e._v(" 是一个分布式、RESTful 风格的搜索和数据分析引擎")]),e._v("，能够解决不断涌现出的各种用例。 作为 Elastic Stack 的核心，它集中存储您的数据，帮助您发现意料之中以及意料之外的情况。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch"),t("OutboundLink")],1),e._v(" 基于搜索库 "),t("a",{attrs:{href:"https://github.com/apache/lucene-solr",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lucene"),t("OutboundLink")],1),e._v(" 开发。ElasticSearch 隐藏了 Lucene 的复杂性，提供了简单易用的 REST API / Java API 接口（另外还有其他语言的 API 接口）。")]),e._v(" "),t("p",[t("em",[e._v("以下简称 ES")]),e._v("。")])]),e._v(" "),t("h2",{attrs:{id:"elasticsearch-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-简介"}},[e._v("#")]),e._v(" Elasticsearch 简介")]),e._v(" "),t("h3",{attrs:{id:"什么是-elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-elasticsearch"}},[e._v("#")]),e._v(" 什么是 Elasticsearch")]),e._v(" "),t("p",[t("strong",[t("a",{attrs:{href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch"),t("OutboundLink")],1),e._v(" 是一个分布式、RESTful 风格的搜索和数据分析引擎")]),e._v("，能够解决不断涌现出的各种用例。 作为 Elastic Stack 的核心，它集中存储您的数据，帮助您发现意料之中以及意料之外的情况。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch"),t("OutboundLink")],1),e._v(" "),t("strong",[e._v("基于搜索库 "),t("a",{attrs:{href:"https://github.com/apache/lucene-solr",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lucene"),t("OutboundLink")],1),e._v(" 开发")]),e._v("。ElasticSearch 隐藏了 Lucene 的复杂性，提供了简单易用的 REST API / Java API 接口（另外还有其他语言的 API 接口）。")]),e._v(" "),t("p",[e._v("ElasticSearch 可以视为一个文档存储，它"),t("strong",[e._v("将复杂数据结构序列化为 JSON 存储")]),e._v("。")]),e._v(" "),t("p",[t("strong",[e._v("ElasticSearch 是近乎于实时的全文搜素")]),e._v("，这是指：")]),e._v(" "),t("ul",[t("li",[e._v("从写入数据到数据可以被搜索，存在较小的延迟（大概是 1s）")]),e._v(" "),t("li",[e._v("基于 ES 执行搜索和分析可以达到秒级")])]),e._v(" "),t("h3",{attrs:{id:"核心概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[e._v("#")]),e._v(" 核心概念")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("index -> type -> mapping -> document -> field\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h4",{attrs:{id:"cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cluster"}},[e._v("#")]),e._v(" Cluster")]),e._v(" "),t("p",[e._v("集群包含多个节点，每个节点属于哪个集群都是通过一个配置来决定的，对于中小型应用来说，刚开始一个集群就一个节点很正常。")]),e._v(" "),t("h4",{attrs:{id:"node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[e._v("#")]),e._v(" Node")]),e._v(" "),t("p",[e._v("Node 是集群中的一个节点，节点也有一个名称，默认是随机分配的。默认节点会去加入一个名称为 "),t("code",[e._v("elasticsearch")]),e._v(" 的集群。如果直接启动一堆节点，那么它们会自动组成一个 elasticsearch 集群，当然一个节点也可以组成 elasticsearch 集群。")]),e._v(" "),t("h4",{attrs:{id:"index"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" Index")]),e._v(" "),t("p",[t("strong",[e._v("可以认为是文档（document）的优化集合。")])]),e._v(" "),t("p",[e._v("ES 会为所有字段建立索引，经过处理后写入一个反向索引（Inverted Index）。查找数据的时候，直接查找该索引。")]),e._v(" "),t("p",[e._v("所以，ES 数据管理的顶层单位就叫做 Index（索引）。它是单个数据库的同义词。每个 Index （即数据库）的名字必须是小写。")]),e._v(" "),t("h4",{attrs:{id:"type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[e._v("#")]),e._v(" Type")]),e._v(" "),t("p",[e._v("每个索引里可以有一个或者多个类型（type）。"),t("code",[e._v("类型（type）")]),e._v(" 是 index 的一个逻辑分类。")]),e._v(" "),t("p",[e._v("不同的 Type 应该有相似的结构（schema），举例来说，"),t("code",[e._v("id")]),e._v("字段不能在这个组是字符串，在另一个组是数值。这是与关系型数据库的表的"),t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/guide/current/mapping.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("一个区别"),t("OutboundLink")],1),e._v("。性质完全不同的数据（比如"),t("code",[e._v("products")]),e._v("和"),t("code",[e._v("logs")]),e._v("）应该存成两个 Index，而不是一个 Index 里面的两个 Type（虽然可以做到）。")]),e._v(" "),t("blockquote",[t("p",[e._v("注意：根据"),t("a",{attrs:{href:"https://www.elastic.co/blog/index-type-parent-child-join-now-future-in-elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[e._v("规划"),t("OutboundLink")],1),e._v("，Elastic 6.x 版只允许每个 Index 包含一个 Type，7.x 版将会彻底移除 Type。")])]),e._v(" "),t("h4",{attrs:{id:"document"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#document"}},[e._v("#")]),e._v(" Document")]),e._v(" "),t("p",[e._v("Index 里面单条的记录称为 Document（文档）。许多条 Document 构成了一个 Index。")]),e._v(" "),t("p",[e._v("每个 "),t("strong",[t("code",[e._v("文档（document）")])]),e._v(" 都是字段（field）的集合。")]),e._v(" "),t("p",[e._v("Document 使用 JSON 格式表示，下面是一个例子。")]),e._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"user"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"张三"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"title"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"工程师"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"desc"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"数据库管理"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("同一个 Index 里面的 Document，不要求有相同的结构（scheme），但是最好保持相同，这样有利于提高搜索效率。")]),e._v(" "),t("h4",{attrs:{id:"field"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#field"}},[e._v("#")]),e._v(" Field")]),e._v(" "),t("p",[t("strong",[t("code",[e._v("字段（field）")])]),e._v(" 是包含数据的键值对。")]),e._v(" "),t("p",[e._v("默认情况下，Elasticsearch 对每个字段中的所有数据建立索引，并且每个索引字段都具有专用的优化数据结构。")]),e._v(" "),t("h4",{attrs:{id:"shard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shard"}},[e._v("#")]),e._v(" Shard")]),e._v(" "),t("p",[e._v("当单台机器不足以存储大量数据时，Elasticsearch 可以将一个索引中的数据切分为多个 "),t("strong",[t("code",[e._v("分片（shard）")])]),e._v(" 。 "),t("strong",[t("code",[e._v("分片（shard）")])]),e._v(" 分布在多台服务器上存储。有了 shard 就可以横向扩展，存储更多数据，让搜索和分析等操作分布到多台服务器上去执行，提升吞吐量和性能。每个 shard 都是一个 lucene index。")]),e._v(" "),t("h4",{attrs:{id:"replica"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replica"}},[e._v("#")]),e._v(" Replica")]),e._v(" "),t("p",[e._v("任何一个服务器随时可能故障或宕机，此时 shard 可能就会丢失，因此可以为每个 shard 创建多个 "),t("strong",[t("code",[e._v("副本（replica）")])]),e._v("。replica 可以在 shard 故障时提供备用服务，保证数据不丢失，多个 replica 还可以提升搜索操作的吞吐量和性能。primary shard（建立索引时一次设置，不能修改，默认 5 个），replica shard（随时修改数量，默认 1 个），默认每个索引 10 个 shard，5 个 primary shard，5 个 replica shard，最小的高可用配置，是 2 台服务器。")]),e._v(" "),t("h4",{attrs:{id:"es-核心概念-vs-db-核心概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es-核心概念-vs-db-核心概念"}},[e._v("#")]),e._v(" ES 核心概念 vs. DB 核心概念")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("ES")]),e._v(" "),t("th",[e._v("DB")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("index")]),e._v(" "),t("td",[e._v("数据库")])]),e._v(" "),t("tr",[t("td",[e._v("type")]),e._v(" "),t("td",[e._v("数据表")])]),e._v(" "),t("tr",[t("td",[e._v("docuemnt")]),e._v(" "),t("td",[e._v("一行数据")])])])]),e._v(" "),t("h2",{attrs:{id:"elasticsearch-基本原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-基本原理"}},[e._v("#")]),e._v(" ElasticSearch 基本原理")]),e._v(" "),t("h3",{attrs:{id:"es-写数据过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es-写数据过程"}},[e._v("#")]),e._v(" ES 写数据过程")]),e._v(" "),t("ul",[t("li",[e._v("客户端选择一个 node 发送请求过去，这个 node 就是 "),t("code",[e._v("coordinating node")]),e._v("（协调节点）。")]),e._v(" "),t("li",[t("code",[e._v("coordinating node")]),e._v(" 对 document 进行"),t("strong",[e._v("路由")]),e._v("，将请求转发给对应的 node（有 primary shard）。")]),e._v(" "),t("li",[e._v("实际的 node 上的 "),t("code",[e._v("primary shard")]),e._v(" 处理请求，然后将数据同步到 "),t("code",[e._v("replica node")]),e._v("。")]),e._v(" "),t("li",[t("code",[e._v("coordinating node")]),e._v(" 如果发现 "),t("code",[e._v("primary node")]),e._v(" 和所有 "),t("code",[e._v("replica node")]),e._v(" 都搞定之后，就返回响应结果给客户端。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20210712104055.png",alt:"img"}})]),e._v(" "),t("h3",{attrs:{id:"es-读数据过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es-读数据过程"}},[e._v("#")]),e._v(" ES 读数据过程")]),e._v(" "),t("p",[e._v("可以通过 "),t("code",[e._v("doc id")]),e._v(" 来查询，会根据 "),t("code",[e._v("doc id")]),e._v(" 进行 hash，判断出来当时把 "),t("code",[e._v("doc id")]),e._v(" 分配到了哪个 shard 上面去，从那个 shard 去查询。")]),e._v(" "),t("ul",[t("li",[e._v("客户端发送请求到"),t("strong",[e._v("任意")]),e._v("一个 node，成为 "),t("code",[e._v("coordinate node")]),e._v("。")]),e._v(" "),t("li",[t("code",[e._v("coordinate node")]),e._v(" 对 "),t("code",[e._v("doc id")]),e._v(" 进行哈希路由，将请求转发到对应的 node，此时会使用 "),t("code",[e._v("round-robin")]),e._v(" "),t("strong",[e._v("轮询算法")]),e._v("，在 "),t("code",[e._v("primary shard")]),e._v(" 以及其所有 replica 中随机选择一个，让读请求负载均衡。")]),e._v(" "),t("li",[e._v("接收请求的 node 返回 document 给 "),t("code",[e._v("coordinate node")]),e._v("。")]),e._v(" "),t("li",[t("code",[e._v("coordinate node")]),e._v(" 返回 document 给客户端。")])]),e._v(" "),t("h3",{attrs:{id:"es-搜索数据过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es-搜索数据过程"}},[e._v("#")]),e._v(" es 搜索数据过程")]),e._v(" "),t("p",[e._v("es 最强大的是做全文检索，就是比如你有三条数据：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("java真好玩儿啊\njava好难学啊\nj2ee特别牛\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("你根据 "),t("code",[e._v("java")]),e._v(" 关键词来搜索，将包含 "),t("code",[e._v("java")]),e._v(" 的 "),t("code",[e._v("document")]),e._v(" 给搜索出来。es 就会给你返回：java 真好玩儿啊，java 好难学啊。")]),e._v(" "),t("ul",[t("li",[e._v("客户端发送请求到一个 "),t("code",[e._v("coordinate node")]),e._v(" 。")]),e._v(" "),t("li",[e._v("协调节点将搜索请求转发到"),t("strong",[e._v("所有")]),e._v("的 shard 对应的 "),t("code",[e._v("primary shard")]),e._v(" 或 "),t("code",[e._v("replica shard")]),e._v(" ，都可以。")]),e._v(" "),t("li",[e._v("query phase：每个 shard 将自己的搜索结果（其实就是一些 "),t("code",[e._v("doc id")]),e._v(" ）返回给协调节点，由协调节点进行数据的合并、排序、分页等操作，产出最终结果。")]),e._v(" "),t("li",[e._v("fetch phase：接着由协调节点根据 "),t("code",[e._v("doc id")]),e._v(" 去各个节点上"),t("strong",[e._v("拉取实际")]),e._v("的 "),t("code",[e._v("document")]),e._v(" 数据，最终返回给客户端。")])]),e._v(" "),t("blockquote",[t("p",[e._v("写请求是写入 primary shard，然后同步给所有的 replica shard；读请求可以从 primary shard 或 replica shard 读取，采用的是随机轮询算法。")])]),e._v(" "),t("h3",{attrs:{id:"写数据底层原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写数据底层原理"}},[e._v("#")]),e._v(" 写数据底层原理")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/doocs/advanced-java/blob/master/docs/high-concurrency/images/es-write-detail.png",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://github.com/doocs/advanced-java/raw/master/docs/high-concurrency/images/es-write-detail.png",alt:"es-write-detail"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("先写入内存 buffer，在 buffer 里的时候数据是搜索不到的；同时将数据写入 translog 日志文件。")]),e._v(" "),t("p",[e._v("如果 buffer 快满了，或者到一定时间，就会将内存 buffer 数据 "),t("code",[e._v("refresh")]),e._v(" 到一个新的 "),t("code",[e._v("segment file")]),e._v(" 中，但是此时数据不是直接进入 "),t("code",[e._v("segment file")]),e._v(" 磁盘文件，而是先进入 "),t("code",[e._v("os cache")]),e._v(" 。这个过程就是 "),t("code",[e._v("refresh")]),e._v("。")]),e._v(" "),t("p",[e._v("每隔 1 秒钟，es 将 buffer 中的数据写入一个"),t("strong",[e._v("新的")]),e._v(" "),t("code",[e._v("segment file")]),e._v("，每秒钟会产生一个"),t("strong",[e._v("新的磁盘文件")]),e._v(" "),t("code",[e._v("segment file")]),e._v("，这个 "),t("code",[e._v("segment file")]),e._v(" 中就存储最近 1 秒内 buffer 中写入的数据。")]),e._v(" "),t("p",[e._v("但是如果 buffer 里面此时没有数据，那当然不会执行 refresh 操作，如果 buffer 里面有数据，默认 1 秒钟执行一次 refresh 操作，刷入一个新的 segment file 中。")]),e._v(" "),t("p",[e._v("操作系统里面，磁盘文件其实都有一个东西，叫做 "),t("code",[e._v("os cache")]),e._v("，即操作系统缓存，就是说数据写入磁盘文件之前，会先进入 "),t("code",[e._v("os cache")]),e._v("，先进入操作系统级别的一个内存缓存中去。只要 "),t("code",[e._v("buffer")]),e._v(" 中的数据被 refresh 操作刷入 "),t("code",[e._v("os cache")]),e._v("中，这个数据就可以被搜索到了。")]),e._v(" "),t("p",[e._v("为什么叫 es 是"),t("strong",[e._v("准实时")]),e._v("的？ "),t("code",[e._v("NRT")]),e._v("，全称 "),t("code",[e._v("near real-time")]),e._v("。默认是每隔 1 秒 refresh 一次的，所以 es 是准实时的，因为写入的数据 1 秒之后才能被看到。可以通过 es 的 "),t("code",[e._v("restful api")]),e._v(" 或者 "),t("code",[e._v("java api")]),e._v("，"),t("strong",[e._v("手动")]),e._v("执行一次 refresh 操作，就是手动将 buffer 中的数据刷入 "),t("code",[e._v("os cache")]),e._v("中，让数据立马就可以被搜索到。只要数据被输入 "),t("code",[e._v("os cache")]),e._v(" 中，buffer 就会被清空了，因为不需要保留 buffer 了，数据在 translog 里面已经持久化到磁盘去一份了。")]),e._v(" "),t("p",[e._v("重复上面的步骤，新的数据不断进入 buffer 和 translog，不断将 "),t("code",[e._v("buffer")]),e._v(" 数据写入一个又一个新的 "),t("code",[e._v("segment file")]),e._v(" 中去，每次 "),t("code",[e._v("refresh")]),e._v(" 完 buffer 清空，translog 保留。随着这个过程推进，translog 会变得越来越大。当 translog 达到一定长度的时候，就会触发 "),t("code",[e._v("commit")]),e._v(" 操作。")]),e._v(" "),t("p",[e._v("commit 操作发生第一步，就是将 buffer 中现有数据 "),t("code",[e._v("refresh")]),e._v(" 到 "),t("code",[e._v("os cache")]),e._v(" 中去，清空 buffer。然后，将一个 "),t("code",[e._v("commit point")]),e._v(" 写入磁盘文件，里面标识着这个 "),t("code",[e._v("commit point")]),e._v(" 对应的所有 "),t("code",[e._v("segment file")]),e._v("，同时强行将 "),t("code",[e._v("os cache")]),e._v(" 中目前所有的数据都 "),t("code",[e._v("fsync")]),e._v(" 到磁盘文件中去。最后"),t("strong",[e._v("清空")]),e._v(" 现有 translog 日志文件，重启一个 translog，此时 commit 操作完成。")]),e._v(" "),t("p",[e._v("这个 commit 操作叫做 "),t("code",[e._v("flush")]),e._v("。默认 30 分钟自动执行一次 "),t("code",[e._v("flush")]),e._v("，但如果 translog 过大，也会触发 "),t("code",[e._v("flush")]),e._v("。flush 操作就对应着 commit 的全过程，我们可以通过 es api，手动执行 flush 操作，手动将 os cache 中的数据 fsync 强刷到磁盘上去。")]),e._v(" "),t("p",[e._v("translog 日志文件的作用是什么？你执行 commit 操作之前，数据要么是停留在 buffer 中，要么是停留在 os cache 中，无论是 buffer 还是 os cache 都是内存，一旦这台机器死了，内存中的数据就全丢了。所以需要将数据对应的操作写入一个专门的日志文件 "),t("code",[e._v("translog")]),e._v(" 中，一旦此时机器宕机，再次重启的时候，es 会自动读取 translog 日志文件中的数据，恢复到内存 buffer 和 os cache 中去。")]),e._v(" "),t("p",[e._v("translog 其实也是先写入 os cache 的，默认每隔 5 秒刷一次到磁盘中去，所以默认情况下，可能有 5 秒的数据会仅仅停留在 buffer 或者 translog 文件的 os cache 中，如果此时机器挂了，会"),t("strong",[e._v("丢失")]),e._v(" 5 秒钟的数据。但是这样性能比较好，最多丢 5 秒的数据。也可以将 translog 设置成每次写操作必须是直接 "),t("code",[e._v("fsync")]),e._v(" 到磁盘，但是性能会差很多。")]),e._v(" "),t("p",[e._v("实际上你在这里，如果面试官没有问你 es 丢数据的问题，你可以在这里给面试官炫一把，你说，其实 es 第一是准实时的，数据写入 1 秒后可以搜索到；可能会丢失数据的。有 5 秒的数据，停留在 buffer、translog os cache、segment file os cache 中，而不在磁盘上，此时如果宕机，会导致 5 秒的"),t("strong",[e._v("数据丢失")]),e._v("。")]),e._v(" "),t("p",[t("strong",[e._v("总结一下")]),e._v("，数据先写入内存 buffer，然后每隔 1s，将数据 refresh 到 os cache，到了 os cache 数据就能被搜索到（所以我们才说 es 从写入到能被搜索到，中间有 1s 的延迟）。每隔 5s，将数据写入 translog 文件（这样如果机器宕机，内存数据全没，最多会有 5s 的数据丢失），translog 大到一定程度，或者默认每隔 30mins，会触发 commit 操作，将缓冲区的数据都 flush 到 segment file 磁盘文件中。")]),e._v(" "),t("blockquote",[t("p",[e._v("数据写入 segment file 之后，同时就建立好了倒排索引。")])]),e._v(" "),t("h3",{attrs:{id:"删除-更新数据底层原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除-更新数据底层原理"}},[e._v("#")]),e._v(" 删除/更新数据底层原理")]),e._v(" "),t("p",[e._v("如果是删除操作，commit 的时候会生成一个 "),t("code",[e._v(".del")]),e._v(" 文件，里面将某个 doc 标识为 "),t("code",[e._v("deleted")]),e._v(" 状态，那么搜索的时候根据 "),t("code",[e._v(".del")]),e._v(" 文件就知道这个 doc 是否被删除了。")]),e._v(" "),t("p",[e._v("如果是更新操作，就是将原来的 doc 标识为 "),t("code",[e._v("deleted")]),e._v(" 状态，然后新写入一条数据。")]),e._v(" "),t("p",[e._v("buffer 每 refresh 一次，就会产生一个 "),t("code",[e._v("segment file")]),e._v("，所以默认情况下是 1 秒钟一个 "),t("code",[e._v("segment file")]),e._v("，这样下来 "),t("code",[e._v("segment file")]),e._v(" 会越来越多，此时会定期执行 merge。每次 merge 的时候，会将多个 "),t("code",[e._v("segment file")]),e._v(" 合并成一个，同时这里会将标识为 "),t("code",[e._v("deleted")]),e._v(" 的 doc 给"),t("strong",[e._v("物理删除掉")]),e._v("，然后将新的 "),t("code",[e._v("segment file")]),e._v(" 写入磁盘，这里会写一个 "),t("code",[e._v("commit point")]),e._v("，标识所有新的 "),t("code",[e._v("segment file")]),e._v("，然后打开 "),t("code",[e._v("segment file")]),e._v(" 供搜索使用，同时删除旧的 "),t("code",[e._v("segment file")]),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"底层-lucene"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#底层-lucene"}},[e._v("#")]),e._v(" 底层 lucene")]),e._v(" "),t("p",[e._v("简单来说，lucene 就是一个 jar 包，里面包含了封装好的各种建立倒排索引的算法代码。我们用 Java 开发的时候，引入 lucene jar，然后基于 lucene 的 api 去开发就可以了。")]),e._v(" "),t("p",[e._v("通过 lucene，我们可以将已有的数据建立索引，lucene 会在本地磁盘上面，给我们组织索引的数据结构。")]),e._v(" "),t("h3",{attrs:{id:"倒排索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#倒排索引"}},[e._v("#")]),e._v(" 倒排索引")]),e._v(" "),t("p",[e._v("在搜索引擎中，每个文档都有一个对应的文档 ID，文档内容被表示为一系列关键词的集合。例如，文档 1 经过分词，提取了 20 个关键词，每个关键词都会记录它在文档中出现的次数和出现位置。")]),e._v(" "),t("p",[e._v("那么，倒排索引就是"),t("strong",[e._v("关键词到文档")]),e._v(" ID 的映射，每个关键词都对应着一系列的文件，这些文件中都出现了关键词。")]),e._v(" "),t("p",[e._v("举个栗子。")]),e._v(" "),t("p",[e._v("有以下文档：")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("DocId")]),e._v(" "),t("th",[e._v("Doc")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("1")]),e._v(" "),t("td",[e._v("谷歌地图之父跳槽 Facebook")])]),e._v(" "),t("tr",[t("td",[e._v("2")]),e._v(" "),t("td",[e._v("谷歌地图之父加盟 Facebook")])]),e._v(" "),t("tr",[t("td",[e._v("3")]),e._v(" "),t("td",[e._v("谷歌地图创始人拉斯离开谷歌加盟 Facebook")])]),e._v(" "),t("tr",[t("td",[e._v("4")]),e._v(" "),t("td",[e._v("谷歌地图之父跳槽 Facebook 与 Wave 项目取消有关")])]),e._v(" "),t("tr",[t("td",[e._v("5")]),e._v(" "),t("td",[e._v("谷歌地图之父拉斯加盟社交网站 Facebook")])])])]),e._v(" "),t("p",[e._v("对文档进行分词之后，得到以下"),t("strong",[e._v("倒排索引")]),e._v("。")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("WordId")]),e._v(" "),t("th",[e._v("Word")]),e._v(" "),t("th",[e._v("DocIds")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("1")]),e._v(" "),t("td",[e._v("谷歌")]),e._v(" "),t("td",[e._v("1,2,3,4,5")])]),e._v(" "),t("tr",[t("td",[e._v("2")]),e._v(" "),t("td",[e._v("地图")]),e._v(" "),t("td",[e._v("1,2,3,4,5")])]),e._v(" "),t("tr",[t("td",[e._v("3")]),e._v(" "),t("td",[e._v("之父")]),e._v(" "),t("td",[e._v("1,2,4,5")])]),e._v(" "),t("tr",[t("td",[e._v("4")]),e._v(" "),t("td",[e._v("跳槽")]),e._v(" "),t("td",[e._v("1,4")])]),e._v(" "),t("tr",[t("td",[e._v("5")]),e._v(" "),t("td",[e._v("Facebook")]),e._v(" "),t("td",[e._v("1,2,3,4,5")])]),e._v(" "),t("tr",[t("td",[e._v("6")]),e._v(" "),t("td",[e._v("加盟")]),e._v(" "),t("td",[e._v("2,3,5")])]),e._v(" "),t("tr",[t("td",[e._v("7")]),e._v(" "),t("td",[e._v("创始人")]),e._v(" "),t("td",[e._v("3")])]),e._v(" "),t("tr",[t("td",[e._v("8")]),e._v(" "),t("td",[e._v("拉斯")]),e._v(" "),t("td",[e._v("3,5")])]),e._v(" "),t("tr",[t("td",[e._v("9")]),e._v(" "),t("td",[e._v("离开")]),e._v(" "),t("td",[e._v("3")])]),e._v(" "),t("tr",[t("td",[e._v("10")]),e._v(" "),t("td",[e._v("与")]),e._v(" "),t("td",[e._v("4")])]),e._v(" "),t("tr",[t("td",[e._v("..")]),e._v(" "),t("td",[e._v("..")]),e._v(" "),t("td",[e._v("..")])])])]),e._v(" "),t("p",[e._v("另外，实用的倒排索引还可以记录更多的信息，比如文档频率信息，表示在文档集合中有多少个文档包含某个单词。")]),e._v(" "),t("p",[e._v("那么，有了倒排索引，搜索引擎可以很方便地响应用户的查询。比如用户输入查询 "),t("code",[e._v("Facebook")]),e._v("，搜索系统查找倒排索引，从中读出包含这个单词的文档，这些文档就是提供给用户的搜索结果。")]),e._v(" "),t("p",[e._v("要注意倒排索引的两个重要细节：")]),e._v(" "),t("ul",[t("li",[e._v("倒排索引中的所有词项对应一个或多个文档；")]),e._v(" "),t("li",[e._v("倒排索引中的词项"),t("strong",[e._v("根据字典顺序升序排列")])])]),e._v(" "),t("blockquote",[t("p",[e._v("上面只是一个简单的栗子，并没有严格按照字典顺序升序排列。")])]),e._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("官方")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.elastic.co/cn/products/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch 官网"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch Github"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch 官方文档"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("strong",[e._v("文章")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/rpm.html#rpm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Elasticsearch with RPM"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2017/08/elasticsearch.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.ruanyifeng.com/blog/2017/08/elasticsearch.html"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/doocs/advanced-java/blob/master/docs/high-concurrency/es-introduction.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("es-introduction"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/doocs/advanced-java/blob/master/docs/high-concurrency/es-write-query-search.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("es-write-query-search"),t("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);