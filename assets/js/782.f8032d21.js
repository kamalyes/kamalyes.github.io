(window.webpackJsonp=window.webpackJsonp||[]).push([[782],{1098:function(e,r,o){"use strict";o.r(r);var n=o(7),t=Object(n.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"mongodb-复制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-复制"}},[e._v("#")]),e._v(" MongoDB 复制")]),e._v(" "),r("h2",{attrs:{id:"副本和可用性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#副本和可用性"}},[e._v("#")]),e._v(" 副本和可用性")]),e._v(" "),r("p",[e._v("副本可以"),r("strong",[e._v("提供冗余并提高数据可用性")]),e._v("。在不同数据库服务器上使用多个数据副本，可以提供一定程度的容错能力，以防止单个数据库服务器宕机时，数据丢失。")]),e._v(" "),r("p",[e._v("在某些情况下，副本还可以"),r("strong",[e._v("提供更大的读取吞吐量")]),e._v("。因为客户端可以将读取操作发送到不同的服务器。在不同数据中心中维护数据副本可以提高数据本地性和分布式应用程序的可用性。您还可以维护其他副本以用于专用目的：例如灾难恢复，报告或备份。")]),e._v(" "),r("h2",{attrs:{id:"mongodb-副本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-副本"}},[e._v("#")]),e._v(" MongoDB 副本")]),e._v(" "),r("p",[e._v("MongoDB 中的副本集是一组维护相同数据集的 mongod 进程。一个副本集包含多个数据承载节点和一个仲裁器节点（可选）。在数据承载节点中，只有一个成员被视为主要节点，而其他节点则被视为次要节点。")]),e._v(" "),r("p",[r("strong",[e._v("主节点负责接收所有写操作")]),e._v("。副本集只能有一个主副本，能够以 "),r("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/write-concern/#writeconcern.%22majority%22",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v('{ w: "majority" }')]),r("OutboundLink")],1),e._v(" 来确认集群中节点的写操作成功情况；尽管在某些情况下，另一个 MongoDB 实例可能会暂时认为自己也是主要的。主节点在其操作日志（即 "),r("a",{attrs:{href:"https://docs.mongodb.com/manual/core/replica-set-oplog/",target:"_blank",rel:"noopener noreferrer"}},[e._v("oplog"),r("OutboundLink")],1),e._v("）中记录了对其数据集的所有更改。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20200920165054.svg",alt:"img"}})]),e._v(" "),r("p",[r("strong",[e._v("从节点复制主节点的操作日志，并将操作应用于其数据集")]),e._v("，以便同步主节点的数据。如果主节点不可用，则符合条件的从节点将选举新的主节点。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20200920165055.svg",alt:"img"}})]),e._v(" "),r("p",[e._v("在某些情况下（例如，有一个主节点和一个从节点，但由于成本限制，禁止添加另一个从节点），您可以选择将 mongod 实例作为仲裁节点添加到副本集。仲裁节点参加选举但不保存数据（即不提供数据冗余）。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20200920165053.svg",alt:"img"}})]),e._v(" "),r("p",[e._v("仲裁节点将永远是仲裁节点。在选举期间，主节点可能会降级成为次节点，而次节点可能会升级成为主节点。")]),e._v(" "),r("h2",{attrs:{id:"异步复制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#异步复制"}},[e._v("#")]),e._v(" 异步复制")]),e._v(" "),r("h3",{attrs:{id:"慢操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#慢操作"}},[e._v("#")]),e._v(" 慢操作")]),e._v(" "),r("p",[e._v("从节点复制主节点的操作日志，并将操作异步应用于其数据集。通过从节点同步主节点的数据集，即使一个或多个成员失败，副本集（MongoDB 集群）也可以继续运行。")]),e._v(" "),r("p",[e._v("从 4.2 版本开始，副本集的从节点记录慢操作（操作时间比设置的阈值长）的日志条目。这些慢操作在 "),r("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/log-messages/#REPL",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("REPL")]),r("OutboundLink")],1),e._v(" 组件下的 "),r("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/program/mongod/#cmdoption-mongod-logpath",target:"_blank",rel:"noopener noreferrer"}},[e._v("诊断日志"),r("OutboundLink")],1),e._v(" 中记录了日志消息，并使用了文本 "),r("code",[e._v("op: <oplog entry>")]),e._v(" 花费了 "),r("code",[e._v("<num>ms")]),e._v("。这些慢操作日志条目仅取决于慢操作阈值，而不取决于日志级别（在系统级别或组件级别），配置级别或运行缓慢的采样率。探查器不会捕获缓慢的操作日志条目。")]),e._v(" "),r("h3",{attrs:{id:"复制延迟和流控"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#复制延迟和流控"}},[e._v("#")]),e._v(" 复制延迟和流控")]),e._v(" "),r("p",[e._v("复制延迟（"),r("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/glossary/#term-replication-lag",target:"_blank",rel:"noopener noreferrer"}},[e._v("Replication lag"),r("OutboundLink")],1),e._v("）是指将主节点上的写操作复制到从节点上所花费的时间。较短的延迟时间是可以接受的，但是随着复制延迟的增加，可能会出现严重的问题：比如在主节点上的缓存压力。")]),e._v(" "),r("p",[e._v("从 MongoDB 4.2 开始，管理员可以限制主节点的写入速率，使得大多数延迟时间保持在可配置的最大值 "),r("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/parameters/#param.flowControlTargetLagSeconds",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("flowControlTargetLagSeconds")]),r("OutboundLink")],1),e._v(" 以下。")]),e._v(" "),r("p",[e._v("默认情况下，流控是开启的。")]),e._v(" "),r("p",[e._v("启用流控后，随着延迟时间越来越接近 "),r("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/parameters/#param.flowControlTargetLagSeconds",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("flowControlTargetLagSeconds")]),r("OutboundLink")],1),e._v("，主对象上的写操作必须先获得令牌，然后才能进行锁定并执行写操作。通过限制每秒发出的令牌数量，流控机制尝试将延迟保持在目标以下。")]),e._v(" "),r("h2",{attrs:{id:"故障转移"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#故障转移"}},[e._v("#")]),e._v(" 故障转移")]),e._v(" "),r("p",[e._v("当主节点与集群中的其他成员通信的时间超过配置的 "),r("code",[e._v("electionTimeoutMillis")]),e._v("（默认为 10 秒）时，符合选举要求的从节点将要求选举，并提名自己为新的主节点。集群尝试完成选举新主节点并恢复正常工作。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20200920175429.svg",alt:"img"}})]),e._v(" "),r("p",[e._v("选举完成前，副本集无法处理写入操作。如果将副本集配置为：在主节点处于脱机状态时，在次节点上运行，则副本集可以继续提供读取查询。")]),e._v(" "),r("p",[e._v("假设"),r("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/replica-configuration/#rsconf.settings",target:"_blank",rel:"noopener noreferrer"}},[e._v("副本配置"),r("OutboundLink")],1),e._v("采用默认配置，则集群选择新节点的时间通常不应超过 12 秒，这包括：将主节点标记为不可用并完成选举所需的时间。可以通过修改 "),r("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/replica-configuration/#rsconf.settings.electionTimeoutMillis",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("settings.electionTimeoutMillis")]),r("OutboundLink")],1),e._v(" 配置选项来调整此时间。网络延迟等因素可能会延长完成选举所需的时间，进而影响集群在没有主节点的情况下可以运行的时间。这些因素取决于集群实际的情况。")]),e._v(" "),r("p",[e._v("将默认为 10 秒的 "),r("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/replica-configuration/#rsconf.settings.electionTimeoutMillis",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("electionTimeoutMillis")]),r("OutboundLink")],1),e._v(" 选项数值缩小，可以更快地检测到主要故障。但是，由于网络延迟等因素，集群可能会更频繁地进行选举，即使该主节点实际上处于健康状态。这可能导致 "),r("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/write-concern/#wc-w",target:"_blank",rel:"noopener noreferrer"}},[e._v("w : 1"),r("OutboundLink")],1),e._v(" 写操作的回滚次数增加。")]),e._v(" "),r("p",[e._v("应用程序的连接逻辑应包括对自动故障转移和后续选举的容错处理。从 MongoDB 3.6 开始，MongoDB 驱动程序可以检测到主节点的失联，并可以自动重试一次某些写入操作。")]),e._v(" "),r("p",[e._v("从 MongoDB4.4 开始，MongoDB 提供镜像读取：将可选举的从节点的最近访问的数据，预热为缓存。预热从节点的缓存可以帮助在选举后更快地恢复。")]),e._v(" "),r("h2",{attrs:{id:"读操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#读操作"}},[e._v("#")]),e._v(" 读操作")]),e._v(" "),r("h3",{attrs:{id:"读优先"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#读优先"}},[e._v("#")]),e._v(" 读优先")]),e._v(" "),r("p",[e._v("默认情况下，客户端从主节点读取数据；但是，客户端可以指定读取首选项，以将读取操作发送到从节点。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20200920204024.svg",alt:"img"}})]),e._v(" "),r("p",[e._v("异步复制到从节点意味着向从节点读取数据可能会返回与主节点不一致的数据。")]),e._v(" "),r("p",[e._v("包含读取操作的多文档事务必须使用读取主节点优先。给定事务中的所有操作必须路由到同一成员。")]),e._v(" "),r("h3",{attrs:{id:"数据可见性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据可见性"}},[e._v("#")]),e._v(" 数据可见性")]),e._v(" "),r("p",[e._v("根据读取的关注点，客户端可以在持久化写入前查看写入结果：")]),e._v(" "),r("ul",[r("li",[e._v("不管写的 "),r("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/write-concern/",target:"_blank",rel:"noopener noreferrer"}},[e._v("write concern"),r("OutboundLink")],1),e._v(" 如何设置，其他使用 "),r("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/read-concern-local/#readconcern.%22local%22",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v('"local"')]),r("OutboundLink")],1),e._v(" 或 "),r("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/read-concern-available/#readconcern.%22available%22",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v('"available"')]),r("OutboundLink")],1),e._v(" 的读配置的客户端都可以向发布客户端确认写操作之前看到写操作的结果。")]),e._v(" "),r("li",[e._v("使用 "),r("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/read-concern-local/#readconcern.%22local%22",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v('"local"')]),r("OutboundLink")],1),e._v(" 或 "),r("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/read-concern-available/#readconcern.%22available%22",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v('"available"')]),r("OutboundLink")],1),e._v(" 读取配置的客户端可以读取数据，这些数据随后可能会在副本集故障转移期间回滚。")])]),e._v(" "),r("p",[e._v("对于多文档事务中的操作，当事务提交时，在事务中进行的所有数据更改都将保存，并在事务外部可见。也就是说，事务在回滚其他事务时将不会提交其某些更改。在提交事务前，事务外部看不到在事务中进行的数据更改。")]),e._v(" "),r("p",[e._v("但是，当事务写入多个分片时，并非所有外部读操作都需要等待已提交事务的结果在所有分片上可见。例如，如果提交了一个事务，并且在分片 A 上可以看到写 1，但是在分片 B 上还看不到写 2，则在 "),r("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/read-concern-local/#readconcern.%22local%22",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v('"local"')]),r("OutboundLink")],1),e._v(" 读配置级别，外部读取可以读取写 1 的结果而看不到写 2。")]),e._v(" "),r("h3",{attrs:{id:"镜像读取"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#镜像读取"}},[e._v("#")]),e._v(" 镜像读取")]),e._v(" "),r("p",[e._v("从 MongoDB 4.4 开始，MongoDB 提供镜像读取以预热可选从节点（即优先级大于 0 的成员）的缓存。使用镜像读取（默认情况下已启用），主节点可以镜像它接收到的一部分操作，并将其发送给可选择的从节点的子集。子集的大小是可配置的。")]),e._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("官方")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.mongodb.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MongoDB 官网"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/mongodb/mongo",target:"_blank",rel:"noopener noreferrer"}},[e._v("MongoDB Github"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://university.mongodb.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MongoDB 官方免费教程"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[r("strong",[e._v("教程")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.runoob.com/mongodb/mongodb-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MongoDB 教程"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://time.geekbang.org/course/intro/100040001",target:"_blank",rel:"noopener noreferrer"}},[e._v("MongoDB 高手课"),r("OutboundLink")],1)])])])])])}),[],!1,null,null,null);r.default=t.exports}}]);