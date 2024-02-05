(window.webpackJsonp=window.webpackJsonp||[]).push([[555],{871:function(a,t,r){"use strict";r.r(t);var e=r(7),_=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"大数据学习路线"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大数据学习路线"}},[a._v("#")]),a._v(" 大数据学习路线")]),a._v(" "),t("h2",{attrs:{id:"大数据简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大数据简介"}},[a._v("#")]),a._v(" 大数据简介")]),a._v(" "),t("h3",{attrs:{id:"移动计算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动计算"}},[a._v("#")]),a._v(" 移动计算")]),a._v(" "),t("p",[a._v("传统的软件计算处理模型，都是“输入 -> 计算 -> 输出”模型。")]),a._v(" "),t("p",[a._v("如何解决 PB 级数据进行计算的问题呢？")]),a._v(" "),t("p",[a._v("采用分布式集群的解决方案，用数千台甚至上万台计算机构建一个大数据计算处理集群，利用更多的网络带宽、内存空间、磁盘容量、CPU 核心数去进行计算处理。")]),a._v(" "),t("p",[a._v("大数据计算处理通常针对的是网站的存量数据，网站大数据系统要做的就是将这些统计规律和关联关系计算出来，并由此进一步改善网站的用户体验和运营决策。")]),a._v(" "),t("p",[a._v("将程序分发到数据所在的地方进行计算，也就是所谓的移动计算比移动数据更划算。")]),a._v(" "),t("h3",{attrs:{id:"大数据存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大数据存储"}},[a._v("#")]),a._v(" 大数据存储")]),a._v(" "),t("p",[a._v("大规模数据存储的核心问题：")]),a._v(" "),t("ul",[t("li",[a._v("数据存储容量")]),a._v(" "),t("li",[a._v("数据读写速度")]),a._v(" "),t("li",[a._v("数据可靠性")])]),a._v(" "),t("p",[a._v("解决方案：水平伸缩")]),a._v(" "),t("h2",{attrs:{id:"大数据处理流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大数据处理流程"}},[a._v("#")]),a._v(" 大数据处理流程")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20220217114216.png",alt:"img"}})]),a._v(" "),t("h3",{attrs:{id:"_1-1-数据采集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-数据采集"}},[a._v("#")]),a._v(" 1.1 数据采集")]),a._v(" "),t("p",[a._v("大数据处理的第一步是数据的收集。现在的中大型项目通常采用微服务架构进行分布式部署，所以数据的采集需要在多台服务器上进行，且采集过程不能影响正常业务的开展。基于这种需求，就衍生了多种日志收集工具，如 Flume 、Logstash、Kibana 等，它们都能通过简单的配置完成复杂的数据收集和数据聚合。")]),a._v(" "),t("h3",{attrs:{id:"_1-2-数据存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-数据存储"}},[a._v("#")]),a._v(" 1.2 数据存储")]),a._v(" "),t("p",[a._v("收集到数据后，下一个问题就是：数据该如何进行存储？通常大家最为熟知是 MySQL、Oracle 等传统的关系型数据库，它们的优点是能够快速存储结构化的数据，并支持随机访问。但大数据的数据结构通常是半结构化（如日志数据）、甚至是非结构化的（如视频、音频数据），为了解决海量半结构化和非结构化数据的存储，衍生了 Hadoop HDFS 、KFS、GFS 等分布式文件系统，它们都能够支持结构化、半结构和非结构化数据的存储，并可以通过增加机器进行横向扩展。")]),a._v(" "),t("p",[a._v("分布式文件系统完美地解决了海量数据存储的问题，但是一个优秀的数据存储系统需要同时考虑数据存储和访问两方面的问题，比如你希望能够对数据进行随机访问，这是传统的关系型数据库所擅长的，但却不是分布式文件系统所擅长的，那么有没有一种存储方案能够同时兼具分布式文件系统和关系型数据库的优点，基于这种需求，就产生了 HBase、MongoDB。")]),a._v(" "),t("h3",{attrs:{id:"_1-3-数据分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-数据分析"}},[a._v("#")]),a._v(" 1.3 数据分析")]),a._v(" "),t("p",[a._v("大数据处理最重要的环节就是数据分析，数据分析通常分为两种：批处理和流处理。")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("批处理")]),a._v("：对一段时间内海量的离线数据进行统一的处理，对应的处理框架有 Hadoop MapReduce、Spark、Flink 等；")]),a._v(" "),t("li",[t("strong",[a._v("流处理")]),a._v("：对运动中的数据进行处理，即在接收数据的同时就对其进行处理，对应的处理框架有 Storm、Spark Streaming、Flink Streaming 等。")])]),a._v(" "),t("p",[a._v("批处理和流处理各有其适用的场景，时间不敏感或者硬件资源有限，可以采用批处理；时间敏感和实时性要求高就可以采用流处理。随着服务器硬件的价格越来越低和大家对及时性的要求越来越高，流处理越来越普遍，如股票价格预测和电商运营数据分析等。")]),a._v(" "),t("p",[a._v("上面的框架都是需要通过编程来进行数据分析，那么如果你不是一个后台工程师，是不是就不能进行数据的分析了？当然不是，大数据是一个非常完善的生态圈，有需求就有解决方案。为了能够让熟悉 SQL 的人员也能够进行数据的分析，查询分析框架应运而生，常用的有 Hive 、Spark SQL 、Flink SQL、 Pig、Phoenix 等。这些框架都能够使用标准的 SQL 或者 类 SQL 语法灵活地进行数据的查询分析。这些 SQL 经过解析优化后转换为对应的作业程序来运行，如 Hive 本质上就是将 SQL 转换为 MapReduce 作业，Spark SQL 将 SQL 转换为一系列的 RDDs 和转换关系（transformations），Phoenix 将 SQL 查询转换为一个或多个 HBase Scan。")]),a._v(" "),t("h3",{attrs:{id:"_1-4-数据应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-数据应用"}},[a._v("#")]),a._v(" 1.4 数据应用")]),a._v(" "),t("p",[a._v("数据分析完成后，接下来就是数据应用的范畴，这取决于你实际的业务需求。比如你可以将数据进行可视化展现，或者将数据用于优化你的推荐算法，这种运用现在很普遍，比如短视频个性化推荐、电商商品推荐、头条新闻推荐等。当然你也可以将数据用于训练你的机器学习模型，这些都属于其他领域的范畴，都有着对应的框架和技术栈进行处理，这里就不一一赘述。")]),a._v(" "),t("h3",{attrs:{id:"_1-5-其他框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-其他框架"}},[a._v("#")]),a._v(" 1.5 其他框架")]),a._v(" "),t("p",[a._v("上面是一个标准的大数据处理流程所用到的技术框架。但是实际的大数据处理流程比上面复杂很多，针对大数据处理中的各种复杂问题分别衍生了各类框架：")]),a._v(" "),t("ul",[t("li",[a._v("单机的处理能力都是存在瓶颈的，所以大数据框架都是采用集群模式进行部署，为了更方便的进行集群的部署、监控和管理，衍生了 Ambari、Cloudera Manager 等集群管理工具；")]),a._v(" "),t("li",[a._v("想要保证集群高可用，需要用到 ZooKeeper ，ZooKeeper 是最常用的分布式协调服务，它能够解决大多数集群问题，包括首领选举、失败恢复、元数据存储及其一致性保证。同时针对集群资源管理的需求，又衍生了 Hadoop YARN ;")]),a._v(" "),t("li",[a._v("复杂大数据处理的另外一个显著的问题是，如何调度多个复杂的并且彼此之间存在依赖关系的作业？基于这种需求，产生了 Azkaban 和 Oozie 等工作流调度框架；")]),a._v(" "),t("li",[a._v("大数据流处理中使用的比较多的另外一个框架是 Kafka，它可以用于消峰，避免在秒杀等场景下并发数据对流处理程序造成冲击；")]),a._v(" "),t("li",[a._v("另一个常用的框架是 Sqoop ，主要是解决了数据迁移的问题，它能够通过简单的命令将关系型数据库中的数据导入到 HDFS 、Hive 或 HBase 中，或者从 HDFS 、Hive 导出到关系型数据库上。")])]),a._v(" "),t("h2",{attrs:{id:"大数据学习路线-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大数据学习路线-2"}},[a._v("#")]),a._v(" 大数据学习路线")]),a._v(" "),t("h3",{attrs:{id:"框架分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架分类"}},[a._v("#")]),a._v(" 框架分类")]),a._v(" "),t("p",[t("strong",[a._v("日志收集框架")]),a._v("：Flume 、Logstash、Kibana")]),a._v(" "),t("p",[t("strong",[a._v("分布式文件存储系统")]),a._v("：Hadoop HDFS")]),a._v(" "),t("p",[t("strong",[a._v("数据库系统")]),a._v("：Mongodb、HBase")]),a._v(" "),t("p",[t("strong",[a._v("分布式计算框架")]),a._v("：")]),a._v(" "),t("ul",[t("li",[a._v("批处理框架：Hadoop MapReduce")]),a._v(" "),t("li",[a._v("流处理框架：Storm")]),a._v(" "),t("li",[a._v("混合处理框架：Spark、Flink")])]),a._v(" "),t("p",[t("strong",[a._v("查询分析框架")]),a._v("：Hive 、Spark SQL 、Flink SQL、 Pig、Phoenix")]),a._v(" "),t("p",[t("strong",[a._v("集群资源管理器")]),a._v("：Hadoop YARN")]),a._v(" "),t("p",[t("strong",[a._v("分布式协调服务")]),a._v("：Zookeeper")]),a._v(" "),t("p",[t("strong",[a._v("数据迁移工具")]),a._v("：Sqoop")]),a._v(" "),t("p",[t("strong",[a._v("任务调度框架")]),a._v("：Azkaban、Oozie")]),a._v(" "),t("p",[t("strong",[a._v("集群部署和监控")]),a._v("：Ambari、Cloudera Manager")]),a._v(" "),t("p",[a._v("上面列出的都是比较主流的大数据框架，社区都很活跃，学习资源也比较丰富。建议从 Hadoop 开始入门学习，因为它是整个大数据生态圈的基石，其它框架都直接或者间接依赖于 Hadoop 。接着就可以学习计算框架，Spark 和 Flink 都是比较主流的混合处理框架，Spark 出现得较早，所以其应用也比较广泛。 Flink 是当下最火热的新一代的混合处理框架，其凭借众多优异的特性得到了众多公司的青睐。两者可以按照你个人喜好或者实际工作需要进行学习。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20200601160917.png",alt:"img"}})]),a._v(" "),t("h3",{attrs:{id:"学习资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#学习资料"}},[a._v("#")]),a._v(" 学习资料")]),a._v(" "),t("p",[a._v("大数据最权威和最全面的学习资料就是官方文档。热门的大数据框架社区都比较活跃、版本更新迭代也比较快，所以其出版物都明显滞后于其实际版本，基于这个原因采用书本学习不是一个最好的方案。比较庆幸的是，大数据框架的官方文档都写的比较好，内容完善，重点突出，同时都采用了大量配图进行辅助讲解。当然也有一些优秀的书籍历经时间的检验，至今依然很经典，这里列出部分个人阅读过的经典书籍：")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://book.douban.com/subject/27115351/",target:"_blank",rel:"noopener noreferrer"}},[a._v("《hadoop 权威指南 (第四版)》"),t("OutboundLink")],1),a._v(" 2017 年")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://item.jd.com/12270295.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("《Kafka 权威指南》"),t("OutboundLink")],1),a._v(" 2017 年")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://item.jd.com/11622772.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("《从 Paxos 到 Zookeeper 分布式一致性原理与实践》"),t("OutboundLink")],1),a._v(" 2015 年")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://book.douban.com/subject/26649141/",target:"_blank",rel:"noopener noreferrer"}},[a._v("《Spark 技术内幕 深入解析 Spark 内核架构设计与实现原理》"),t("OutboundLink")],1),a._v(" 2015 年")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://book.douban.com/subject/27035127/",target:"_blank",rel:"noopener noreferrer"}},[a._v("《Spark.The.Definitive.Guide》"),t("OutboundLink")],1),a._v(" 2018 年")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://book.douban.com/subject/10748460/",target:"_blank",rel:"noopener noreferrer"}},[a._v("《HBase 权威指南》"),t("OutboundLink")],1),a._v(" 2012 年")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://book.douban.com/subject/25791255/",target:"_blank",rel:"noopener noreferrer"}},[a._v("《Hive 编程指南》"),t("OutboundLink")],1),a._v(" 2013 年")])]),a._v(" "),t("h3",{attrs:{id:"视频学习资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视频学习资料"}},[a._v("#")]),a._v(" 视频学习资料")]),a._v(" "),t("p",[a._v("上面我推荐的都是书籍学习资料，很少推荐视频学习资料，这里说明一下原因：因为书籍历经时间的考验，能够再版的或者豆瓣等平台评价高的证明都是被大众所认可的，从概率的角度上来说，其必然更加优秀，不容易浪费大家的学习时间和精力，所以我个人更倾向于官方文档或者书本的学习方式，而不是视频。因为视频学习资料，缺少一个公共的评价平台和完善的评价机制，所以其质量良莠不齐。但是视频任然有其不可替代的好处，学习起来更直观、印象也更深刻，所以对于习惯视频学习的小伙伴，这里我各推荐一个免费的和付费的视频学习资源，大家按需选择：")]),a._v(" "),t("ul",[t("li",[a._v("免费学习资源：尚硅谷大数据学习路线 —— "),t("a",{attrs:{href:"http://www.atguigu.com/bigdata_video.shtml#bigdata",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载链接"),t("OutboundLink")],1),a._v(" \\ "),t("a",{attrs:{href:"https://space.bilibili.com/302417610/",target:"_blank",rel:"noopener noreferrer"}},[a._v("在线观看链接"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("付费学习资源："),t("a",{attrs:{href:"https://www.imooc.com/t/2781843",target:"_blank",rel:"noopener noreferrer"}},[a._v("慕课网 Michael PK 的系列课程"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/heibaiying/BigData-Notes/blob/master/notes/%E5%A4%A7%E6%95%B0%E6%8D%AE%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("大数据学习路线"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=_.exports}}]);