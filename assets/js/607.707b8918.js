(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{923:function(t,a,v){"use strict";v.r(a);var r=v(7),_=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"微服务基本原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务基本原理"}},[t._v("#")]),t._v(" 微服务基本原理")]),t._v(" "),a("h2",{attrs:{id:"微服务简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务简介"}},[t._v("#")]),t._v(" 微服务简介")]),t._v(" "),a("h3",{attrs:{id:"什么是微服务架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是微服务架构"}},[t._v("#")]),t._v(" 什么是微服务架构")]),t._v(" "),a("p",[t._v("互联网应用架构大致的演进方向为：单体架构 -> 服务化架构 -> 微服务架构。")]),t._v(" "),a("p",[t._v("微服务架构的特点：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("服务拆分粒度更细")]),t._v("：根据业务拆分。")]),t._v(" "),a("li",[a("strong",[t._v("独立部署")]),t._v("：每个服务部署在物理上隔离，互不影响。")]),t._v(" "),a("li",[a("strong",[t._v("独立维护")]),t._v("：根据组织架构拆分，分团队维护。")]),t._v(" "),a("li",[a("strong",[t._v("服务治理")]),t._v("：服务数量变多，需要有统一的服务治理平台。")])]),t._v(" "),a("h3",{attrs:{id:"如何权衡微服务的利弊"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何权衡微服务的利弊"}},[t._v("#")]),t._v(" 如何权衡微服务的利弊")]),t._v(" "),a("p",[t._v("优点")]),t._v(" "),a("ul",[a("li",[t._v("强模块化边界")]),t._v(" "),a("li",[t._v("可独立部署")]),t._v(" "),a("li",[t._v("技术多样性")])]),t._v(" "),a("p",[t._v("缺点")]),t._v(" "),a("ul",[a("li",[t._v("分布式复杂度")]),t._v(" "),a("li",[t._v("最终一致性")]),t._v(" "),a("li",[t._v("运维复杂度")]),t._v(" "),a("li",[t._v("测试复杂度")])]),t._v(" "),a("h3",{attrs:{id:"康威定律"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#康威定律"}},[t._v("#")]),t._v(" 康威定律")]),t._v(" "),a("ul",[a("li",[t._v("第一定律：组织沟通方式会通过系统设计表达出来")]),t._v(" "),a("li",[t._v("第二定律：时间再多一件事情也不可能做的完美，但总有时间做完一件事情")]),t._v(" "),a("li",[t._v("第三定律：线型系统和线型组织架构间有潜在的异质同态特性")]),t._v(" "),a("li",[t._v("第四定律：大的系统组织总是比小系统更倾向于分解")])]),t._v(" "),a("h3",{attrs:{id:"如何拆分微服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何拆分微服务"}},[t._v("#")]),t._v(" 如何拆分微服务")]),t._v(" "),a("p",[t._v("应用微服务化架构前，要思考几个问题：")]),t._v(" "),a("p",[t._v("什么时候进行服务化拆分？如何拆分服务？")]),t._v(" "),a("p",[t._v("当应用复杂度、开发团队膨胀到难以维护时，就该考虑服务化拆分了。")]),t._v(" "),a("p",[t._v("拆分服务的思考维度：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("业务维度")]),t._v("：业务和数据关系密切的应该放在一起。")]),t._v(" "),a("li",[a("strong",[t._v("功能维度")]),t._v("：公共功能聚合为一个服务。")]),t._v(" "),a("li",[a("strong",[t._v("组织架构")]),t._v("：根据实际组织架构，天然分为不同的团队，每个团队独立维护若干微服务。")])]),t._v(" "),a("p",[t._v("拆分服务的前置条件：")]),t._v(" "),a("p",[t._v("应用微服务架构要先解决以下问题：")]),t._v(" "),a("ul",[a("li",[t._v("服务如何定")]),t._v(" "),a("li",[t._v("服务如何发布和订阅")]),t._v(" "),a("li",[t._v("服务如何监控")]),t._v(" "),a("li",[t._v("服务如何治理")]),t._v(" "),a("li",[t._v("故障如何定位")])]),t._v(" "),a("h2",{attrs:{id:"微服务技术架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务技术架构"}},[t._v("#")]),t._v(" 微服务技术架构")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20200716195006.png",alt:"img"}})]),t._v(" "),a("p",[a("strong",[t._v("第一层：接入层")])]),t._v(" "),a("p",[t._v("外部设备访问的统一接入层。")]),t._v(" "),a("p",[a("strong",[t._v("第二层：聚合服务层")])]),t._v(" "),a("p",[t._v("对下层的基础服务做一些聚合，剪裁的工作，适配上层不同设备的数据输出。")]),t._v(" "),a("p",[a("strong",[t._v("第三层：基础服务层")])]),t._v(" "),a("p",[t._v("比较细粒度的微服务层，提供基础的核心服务，公共服务。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20200716195117.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"服务注册发现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务注册发现"}},[t._v("#")]),t._v(" 服务注册发现")]),t._v(" "),a("p",[t._v("在微服务架构下，主要有三种角色：")]),t._v(" "),a("ul",[a("li",[t._v("服务提供者（RPC Server / Provider）")]),t._v(" "),a("li",[t._v("服务消费者（RPC Client / Consumer）")]),t._v(" "),a("li",[t._v("服务注册中心（Registry）")])]),t._v(" "),a("p",[t._v("注册中心的实现依赖以下机制：")]),t._v(" "),a("ul",[a("li",[t._v("注册中心 API")]),t._v(" "),a("li",[t._v("集群部署：如果注册中心是单点，无法保障高可用。")]),t._v(" "),a("li",[t._v("元数据存储：例如 ZooKeeper 将数据以层次化的目录结构存储。")]),t._v(" "),a("li",[t._v("服务健康检查：使用长连接或心跳探测方式检查服务健康状态。")]),t._v(" "),a("li",[t._v("服务状态变更通知：可以基于订阅者模式实现，例如 ZooKeeper 的 Watch 机制。")]),t._v(" "),a("li",[t._v("白名单机制")])]),t._v(" "),a("p",[t._v("注册中心的服务注册和发现都是基于 API 的。一般需要支持以下功能：")]),t._v(" "),a("ul",[a("li",[t._v("服务注册")]),t._v(" "),a("li",[t._v("服务注销")]),t._v(" "),a("li",[t._v("接口续约（心跳）")]),t._v(" "),a("li",[t._v("服务订阅")]),t._v(" "),a("li",[t._v("可用服务同步")]),t._v(" "),a("li",[t._v("服务查询")]),t._v(" "),a("li",[t._v("服务修改")])]),t._v(" "),a("h3",{attrs:{id:"注册中心的工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册中心的工作流程"}},[t._v("#")]),t._v(" 注册中心的工作流程")]),t._v(" "),a("p",[t._v("一般来讲，注册中心的工作流程是：")]),t._v(" "),a("ul",[a("li",[t._v("服务提供者在启动时，根据服务发布文件中配置的发布信息向注册中心注册自己的服务。")]),t._v(" "),a("li",[t._v("服务消费者在启动时，根据消费者配置文件中配置的服务信息向注册中心订阅自己所需要的服务。")]),t._v(" "),a("li",[t._v("注册中心返回服务提供者地址列表给服务消费者。")]),t._v(" "),a("li",[t._v("当服务提供者发生变化，比如有节点新增或者销毁，注册中心将变更通知给服务消费者。")])]),t._v(" "),a("h3",{attrs:{id:"注册中心实现模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册中心实现模式"}},[t._v("#")]),t._v(" 注册中心实现模式")]),t._v(" "),a("h4",{attrs:{id:"应用内注册和发现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用内注册和发现"}},[t._v("#")]),t._v(" 应用内注册和发现")]),t._v(" "),a("p",[t._v("采用应用内注册与发现的方式，最典型的案例要属 Netflix 开源的 Eureka，官方架构图如下。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20200720194412.png",alt:"img"}})]),t._v(" "),a("p",[t._v("对着这张图，我来介绍下 Eureka 的架构，它主要由三个重要的组件组成：")]),t._v(" "),a("ul",[a("li",[t._v("Eureka Server：注册中心的服务端，实现了服务信息注册、存储以及查询等功能。")]),t._v(" "),a("li",[t._v("服务端的 Eureka Client：集成在服务端的注册中心 SDK，服务提供者通过调用 SDK，实现服务注册、反注册等功能。")]),t._v(" "),a("li",[t._v("客户端的 Eureka Client：集成在客户端的注册中心 SDK，服务消费者通过调用 SDK，实现服务订阅、服务更新等功能。")])]),t._v(" "),a("h4",{attrs:{id:"应用外注册和发现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用外注册和发现"}},[t._v("#")]),t._v(" 应用外注册和发现")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20200720194519.png",alt:"img"}})]),t._v(" "),a("p",[t._v("通过这张架构图，可以看出来使用 Consul 实现应用外服务注册和发现主要依靠三个重要的组件：")]),t._v(" "),a("ul",[a("li",[t._v("Consul：注册中心的服务端，实现服务注册信息的存储，并提供注册和发现服务。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/gliderlabs/registrator",target:"_blank",rel:"noopener noreferrer"}},[t._v("Registrator"),a("OutboundLink")],1),t._v("：一个开源的第三方服务管理器项目，它通过监听服务部署的 Docker 实例是否存活，来负责服务提供者的注册和销毁。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/hashicorp/consul-template",target:"_blank",rel:"noopener noreferrer"}},[t._v("Consul Template"),a("OutboundLink")],1),t._v("：定时从注册中心服务端获取最新的服务提供者节点列表并刷新 LB 配置（比如 Nginx 的 upstream），这样服务消费者就通过访问 Nginx 就可以获取最新的服务提供者信息。")])]),t._v(" "),a("h4",{attrs:{id:"注册中心选型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册中心选型"}},[t._v("#")]),t._v(" 注册中心选型")]),t._v(" "),a("h5",{attrs:{id:"高可用性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高可用性"}},[t._v("#")]),t._v(" 高可用性")]),t._v(" "),a("p",[t._v("集群部署，通过部署多个实例组成集群来保证高可用性。")]),t._v(" "),a("p",[t._v("多 IDC 部署，即部署在不止一个机房。")]),t._v(" "),a("h5",{attrs:{id:"数据一致性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据一致性"}},[t._v("#")]),t._v(" 数据一致性")]),t._v(" "),a("p",[t._v("根据 CAP 理论，三者不能同时满足：")]),t._v(" "),a("ul",[a("li",[t._v("CP 型注册中心，牺牲可用性来保证数据强一致性，最典型的例子就是 ZooKeeper，etcd，Consul 了。ZooKeeper 集群内只有一个 Leader，而且在 Leader 无法使用的时候通过 Paxos 算法选举出一个新的 Leader。这个 Leader 的目的就是保证写信息的时候只向这个 Leader 写入，Leader 会同步信息到 Followers，这个过程就可以保证数据的强一致性。但如果多个 ZooKeeper 之间网络出现问题，造成出现多个 Leader，发生脑裂的话，注册中心就不可用了。而 etcd 和 Consul 集群内都是通过 raft 协议来保证强一致性，如果出现脑裂的话， 注册中心也不可用。")]),t._v(" "),a("li",[t._v("AP 型注册中心，牺牲一致性来保证可用性，最典型的例子就是 Eureka 了。对比下 Zookeeper，Eureka 不用选举一个 Leader，每个 Eureka 服务器单独保存服务注册地址，因此有可能出现数据信息不一致的情况。但是当网络出现问题的时候，每台服务器都可以完成独立的服务。")])]),t._v(" "),a("h3",{attrs:{id:"服务注册发现的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务注册发现的问题"}},[t._v("#")]),t._v(" 服务注册发现的问题")]),t._v(" "),a("h4",{attrs:{id:"多注册中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多注册中心"}},[t._v("#")]),t._v(" 多注册中心")]),t._v(" "),a("p",[t._v("对于服务消费者来说，要能够同时从多个注册中心订阅服务；对于服务提供者来说，要能够同时向多个注册中心注册服务。")]),t._v(" "),a("h4",{attrs:{id:"并行订阅服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并行订阅服务"}},[t._v("#")]),t._v(" 并行订阅服务")]),t._v(" "),a("p",[t._v("可以每订阅一个服务就单独用一个线程来处理，这样的话即使遇到个别服务节点连接超时，其他服务节点的初始化连接也不受影响，最慢也就是这个服务节点的初始化连接耗费的时间，最终所有服务节点的初始化连接耗时控制在了 30 秒以内。")]),t._v(" "),a("h4",{attrs:{id:"批量注销服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#批量注销服务"}},[t._v("#")]),t._v(" 批量注销服务")]),t._v(" "),a("p",[t._v("需要定时去清理注册中心中的“僵尸节点”，如果支持批量注销服务，就可以一次调用就把该节点上提供的所有服务同时注销掉。")]),t._v(" "),a("h4",{attrs:{id:"服务变更信息同步更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务变更信息同步更新"}},[t._v("#")]),t._v(" 服务变更信息同步更新")]),t._v(" "),a("p",[t._v("为了减少服务消费者从注册中心中拉取的服务可用节点信息的数据量，这个时候可以通过增量更新的方式，注册中心只返回变化的那部分节点信息，尤其在只有少数节点信息变更时，此举可以大大减少服务消费者从注册中心拉取的数据量，从而最大程度避免产生网络风暴。")]),t._v(" "),a("h3",{attrs:{id:"识别服务节点是否存活"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#识别服务节点是否存活"}},[t._v("#")]),t._v(" 识别服务节点是否存活")]),t._v(" "),a("h4",{attrs:{id:"心跳开关保护机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#心跳开关保护机制"}},[t._v("#")]),t._v(" 心跳开关保护机制")]),t._v(" "),a("p",[t._v("在网络频繁抖动的情况下，注册中心中可用的节点会不断变化，这时候服务消费者会频繁收到服务提供者节点变更的信息，于是就不断地请求注册中心来拉取最新的可用服务节点信息。当有成百上千个服务消费者，同时请求注册中心获取最新的服务提供者的节点信息时，可能会把注册中心的带宽给占满，尤其是注册中心是百兆网卡的情况下。")]),t._v(" "),a("p",[t._v("所以针对这种情况，"),a("strong",[t._v("需要一种保护机制，即使在网络频繁抖动的时候，服务消费者也不至于同时去请求注册中心获取最新的服务节点信息")]),t._v("。")]),t._v(" "),a("p",[t._v("我曾经就遇到过这种情况，一个可行的解决方案就是给注册中心设置一个开关，当开关打开时，即使网络频繁抖动，注册中心也不会通知所有的服务消费者有服务节点信息变更，比如只给 10% 的服务消费者返回变更，这样的话就能将注册中心的请求量减少到原来的 1/10。")]),t._v(" "),a("p",[t._v("当然打开这个开关也是有一定代价的，它会导致服务消费者感知最新的服务节点信息延迟，原先可能在 10s 内就能感知到服务提供者节点信息的变更，现在可能会延迟到几分钟，所以在网络正常的情况下，开关并不适合打开；可以作为一个紧急措施，在网络频繁抖动的时候，才打开这个开关。")]),t._v(" "),a("h4",{attrs:{id:"服务节点摘除保护机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务节点摘除保护机制"}},[t._v("#")]),t._v(" 服务节点摘除保护机制")]),t._v(" "),a("p",[t._v("服务提供者在进程启动时，会注册服务到注册中心，并每隔一段时间，汇报心跳给注册中心，以标识自己的存活状态。如果隔了一段固定时间后，服务提供者仍然没有汇报心跳给注册中心，注册中心就会认为该节点已经处于“dead”状态，于是从服务的可用节点信息中移除出去。")]),t._v(" "),a("p",[t._v("如果遇到网络问题，大批服务提供者节点汇报给注册中心的心跳信息都可能会传达失败，注册中心就会把它们都从可用节点列表中移除出去，造成剩下的可用节点难以承受所有的调用，引起“雪崩”。但是这种情况下，可能大部分服务提供者节点是可用的，仅仅因为网络原因无法汇报心跳给注册中心就被“无情”的摘除了。")]),t._v(" "),a("p",[a("strong",[t._v("这个时候就需要根据实际业务的情况，设定一个阈值比例，即使遇到刚才说的这种情况，注册中心也不能摘除超过这个阈值比例的节点")]),t._v("。")]),t._v(" "),a("p",[t._v("这个阈值比例可以根据实际业务的冗余度来确定，我通常会把这个比例设定在 20%，就是说注册中心不能摘除超过 20% 的节点。因为大部分情况下，节点的变化不会这么频繁，只有在网络抖动或者业务明确要下线大批量节点的情况下才有可能发生。而业务明确要下线大批量节点的情况是可以预知的，这种情况下可以关闭阈值保护；而正常情况下，应该打开阈值保护，以防止网络抖动时，大批量可用的服务节点被摘除。")]),t._v(" "),a("h2",{attrs:{id:"服务通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务通信"}},[t._v("#")]),t._v(" 服务通信")]),t._v(" "),a("p",[t._v("通过注册中心，服务消费者和服务提供者就可以感知彼此，但是，要实现交互还必须解决通信问题：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("通信协议")]),t._v("。即服务提供者和服务消费者之间以什么样的 "),a("strong",[t._v("协议")]),t._v(" 进行网络通信，说白了，是要解决客户端和服务端如何建立连接、管理连接以及服务端如何处理请求的问题。是采用四层 TCP、UDP 协议，还是采用七层 HTTP 协议，还是采用其他协议？例如：Dubbo 基于 TCP 通信；而 Spring Cloud 基于 HTTP REST 通信。TCP 通信方式，传输效率更高；但是 HTTP 方式天然可以提供对外服务。")]),t._v(" "),a("li",[a("strong",[t._v("传输方式")]),t._v("。即服务提供者和服务消费者之间的数据传输采用哪种方式。是同步还是异步？是在单连接上传输，还是多路复用。")]),t._v(" "),a("li",[a("strong",[t._v("序列化和反序列化")]),t._v("。它主要解决客户端和服务端采用哪种数据编解码的问题。常见的序列化方式包括：XML、JSON；二进制类如："),a("a",{attrs:{href:"https://github.com/apache/thrift",target:"_blank",rel:"noopener noreferrer"}},[t._v("thrift"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf",target:"_blank",rel:"noopener noreferrer"}},[t._v("protobuf"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"http://hessian.caucho.com/doc/hessian-overview.xtp",target:"_blank",rel:"noopener noreferrer"}},[t._v("hessian"),a("OutboundLink")],1),t._v("、JDK。")])]),t._v(" "),a("h3",{attrs:{id:"序列化方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#序列化方式"}},[t._v("#")]),t._v(" 序列化方式")]),t._v(" "),a("p",[t._v("序列化方式的选型，一般基于以下考虑：")]),t._v(" "),a("ul",[a("li",[t._v("支持数据结构类型的丰富度")]),t._v(" "),a("li",[t._v("跨语言支持")]),t._v(" "),a("li",[t._v("性能")])]),t._v(" "),a("blockquote",[a("p",[t._v("👉 参考："),a("a",{attrs:{href:"https://yuyanqing.cn/pages/2b2f0f/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 序列化"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"通信协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通信协议"}},[t._v("#")]),t._v(" 通信协议")]),t._v(" "),a("p",[t._v("微服务框架对比：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("RPC")]),t._v(" "),a("th",[t._v("REST")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("耦合性")]),t._v(" "),a("td",[t._v("强耦合")]),t._v(" "),a("td",[t._v("松散耦合")])]),t._v(" "),a("tr",[a("td",[t._v("协议")]),t._v(" "),a("td",[t._v("Tcp")]),t._v(" "),a("td",[t._v("Http、Http2")])]),t._v(" "),a("tr",[a("td",[t._v("序列化")]),t._v(" "),a("td",[t._v("二进制（Thrift、Protobuf、Hessian、Avro、JDK 等）")]),t._v(" "),a("td",[t._v("Xml、Json")])]),t._v(" "),a("tr",[a("td",[t._v("性能")]),t._v(" "),a("td",[t._v("高")]),t._v(" "),a("td",[t._v("低")])]),t._v(" "),a("tr",[a("td",[t._v("客户端")]),t._v(" "),a("td",[t._v("对编程语言有限制")]),t._v(" "),a("td",[t._v("跨语言支持更好（支持 Http 即可）")])]),t._v(" "),a("tr",[a("td",[t._v("代表技术")]),t._v(" "),a("td",[t._v("Dubbo、Motan、Tars、gRpc、Thrift")]),t._v(" "),a("td",[t._v("Spring Cloud")])])])]),t._v(" "),a("h2",{attrs:{id:"服务监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务监控"}},[t._v("#")]),t._v(" 服务监控")]),t._v(" "),a("p",[t._v("当服务消费者与服务提供者之间建立了通信，作为管理者需要通过监控手段来观察服务是否正常，调用是否成功。服务监控是很复杂的，在微服务架构下，一次用户调用会因为服务化拆分后，变成多个不同服务之间的相互调用，这也就需要对拆分后的每个服务都监控起来。")]),t._v(" "),a("h3",{attrs:{id:"监控对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控对象"}},[t._v("#")]),t._v(" 监控对象")]),t._v(" "),a("p",[t._v("服务监控一定是通过观察数据来量化分析，所以首先要明确需要监控什么。")]),t._v(" "),a("p",[t._v("一般来说，服务监控数据有以下分类：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("业务监控")]),t._v("：核心指标、登录、登出、下单、支付等。")]),t._v(" "),a("li",[a("strong",[t._v("应用监控")]),t._v("：访问接口、访问服务、SQL、内存使用率、响应时间、TPS、QPS 等。")]),t._v(" "),a("li",[a("strong",[t._v("系统监控")]),t._v("：CPU、内存、网络、磁盘等。")]),t._v(" "),a("li",[a("strong",[t._v("基础监控")]),t._v("：网络流量、丢包数、错包数、连接数等。")]),t._v(" "),a("li",[a("strong",[t._v("客户端监控")]),t._v("：性能、返回码、地域、运营商、版本、系统等。")])]),t._v(" "),a("h3",{attrs:{id:"系统监控原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统监控原理"}},[t._v("#")]),t._v(" 系统监控原理")]),t._v(" "),a("p",[t._v("一旦明确了要监控的对象，接下就是考虑如何监控。")]),t._v(" "),a("p",[a("strong",[t._v("监控系统主要包括四个环节：数据采集、数据传输、数据处理和数据展示")])]),t._v(" "),a("h4",{attrs:{id:"数据采集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据采集"}},[t._v("#")]),t._v(" 数据采集")]),t._v(" "),a("p",[t._v("通常有两种数据收集方式：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("服务主动上报")]),t._v("：这种处理方式通过在业务代码或者服务框架里加入数据收集代码逻辑，在每一次服务调用完成后，主动上报服务的调用信息。这种方式在链路跟踪中较为常见，主流的技术方案有：Zipkin。")]),t._v(" "),a("li",[a("strong",[t._v("代理收集")]),t._v("：这种处理方式通过服务调用后把调用的详细信息记录到本地日志文件中，然后再通过代理去解析本地日志文件，然后再上报服务的调用信息。主流的技术方案有：ELK、Flume。")])]),t._v(" "),a("h4",{attrs:{id:"数据传输"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据传输"}},[t._v("#")]),t._v(" 数据传输")]),t._v(" "),a("p",[t._v("数据传输最常用的方式有两种：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("UDP 传输")]),t._v("：这种处理方式是数据处理单元提供服务器的请求地址，数据采集后通过 UDP 协议与服务器建立连接，然后把数据发送过去。")]),t._v(" "),a("li",[a("strong",[t._v("Kafka 传输")]),t._v("：这种处理方式是数据采集后发送到指定的 Topic，然后数据处理单元再订阅对应的 Topic，就可以从 Kafka 消息队列中读取到对应的数据。由于 Kafka 有非常高的吞吐能力，所以很适合作为大数据量的缓冲池。")])]),t._v(" "),a("h4",{attrs:{id:"数据处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据处理"}},[t._v("#")]),t._v(" 数据处理")]),t._v(" "),a("p",[t._v("数据处理是对收集来的原始数据进行聚合并存储。数据聚合通常有两个维度：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("接口维度聚合")]),t._v("：这个维度是把实时收到的数据按照接口名维度实时聚合在一起，这样就可以得到每个接口的每秒请求量、平均耗时、成功率等信息。")]),t._v(" "),a("li",[a("strong",[t._v("机器维度聚合")]),t._v("：这个维度是把实时收到的数据按照调用的节点维度聚合在一起，这样就可以从单机维度去查看每个接口的实时请求量、平均耗时等信息。")])]),t._v(" "),a("p",[t._v("聚合后的数据需要持久化到数据库中存储，所选用的数据库一般分为两种：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("全文检索数据库")]),t._v("：比如 Elasticsearch，以倒排索引的数据结构存储，需要查询的时候，根据索引来查询。")]),t._v(" "),a("li",[a("strong",[t._v("时序数据库")]),t._v("：比如 OpenTSDB，以时序序列数据的方式存储，查询的时候按照时序如 1min、5min 等维度来查询。")])]),t._v(" "),a("h4",{attrs:{id:"数据展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据展示"}},[t._v("#")]),t._v(" 数据展示")]),t._v(" "),a("p",[t._v("数据展示是把处理后的数据以 Dashboard 的方式展示给用户。数据展示有多种方式，比如曲线图、饼状图、格子图展示等。")]),t._v(" "),a("h3",{attrs:{id:"监控技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控技术"}},[t._v("#")]),t._v(" 监控技术")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20200716204432.png",alt:"img"}})]),t._v(" "),a("ul",[a("li",[t._v("ELK 的技术栈比较成熟，应用范围也比较广，除了可用作监控系统外，还可以用作日志查询和分析。")]),t._v(" "),a("li",[t._v("Graphite 是基于时间序列数据库存储的监控系统，并且提供了功能强大的各种聚合函数比如 sum、average、top5 等可用于监控分析，而且对外提供了 API 也可以接入其他图形化监控系统如 Grafana。")]),t._v(" "),a("li",[t._v("TICK 的核心在于其时间序列数据库 InfluxDB 的存储功能强大，且支持类似 SQL 语言的复杂数据处理操作。")]),t._v(" "),a("li",[t._v("Prometheus 的独特之处在于它采用了拉数据的方式，对业务影响较小，同时也采用了时间序列数据库存储，而且支持独有的 PromQL 查询语言，功能强大而且简洁。")])]),t._v(" "),a("h2",{attrs:{id:"服务治理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务治理"}},[t._v("#")]),t._v(" 服务治理")]),t._v(" "),a("p",[t._v("微服务治理平台就是"),a("strong",[t._v("与服务打交道的统一入口")]),t._v("，无论是开发人员还是运维人员，都能通过这个平台对服务进行各种操作，比如开发人员可以通过这个平台对服务进行降级操作，运维人员可以通过这个平台对服务进行上下线操作，而不需要关心这个操作背后的具体实现。")]),t._v(" "),a("p",[t._v("微服务治理平台关键之处就在于它能够封装对微服务架构内的各个基础设施组件的调用，从而对外提供统一的服务操作 API，而且还提供了可视化的界面，以方便开发人员和运维人员操作。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20200716203729.png",alt:"img"}})]),t._v(" "),a("p",[t._v("服务治理的常用手段有：")]),t._v(" "),a("ul",[a("li",[t._v("节点管理\n"),a("ul",[a("li",[t._v("注册中心主动摘除机制")]),t._v(" "),a("li",[t._v("服务消费者摘除机制")])])]),t._v(" "),a("li",[t._v("负载均衡\n"),a("ul",[a("li",[t._v("轮询")]),t._v(" "),a("li",[t._v("随机")]),t._v(" "),a("li",[t._v("最近最少连接")]),t._v(" "),a("li",[t._v("一致性 Hash")])])]),t._v(" "),a("li",[t._v("服务路由\n"),a("ul",[a("li",[t._v("业务存在灰度发布的需求")]),t._v(" "),a("li",[t._v("多机房就近访问的需求")])])]),t._v(" "),a("li",[t._v("服务容错\n"),a("ul",[a("li",[t._v("FailOver：失败自动切换")]),t._v(" "),a("li",[t._v("FailBack：失败通知")]),t._v(" "),a("li",[t._v("FailCache：失败缓存")]),t._v(" "),a("li",[t._v("FailFast：快速失败")])])])]),t._v(" "),a("h2",{attrs:{id:"api-网关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-网关"}},[t._v("#")]),t._v(" API 网关")]),t._v(" "),a("p",[t._v("API 网关是一个服务器，是系统的唯一入口。从面向对象设计的角度看，它与外观模式类似。API 网关封装了系统内部架构，为每个客户端提供一个定制的 API。它可能还具有其它职责，如身份验证、监控、负载均衡、缓存、请求分片与管理、静态响应处理。\nAPI 网关方式的核心要点是，所有的客户端和消费端都通过统一的网关接入微服务，在网关层处理所有的非业务功能。通常，网关也是提供 REST/HTTP 的访问 API。服务端通过 API-GW 注册和管理服务。")]),t._v(" "),a("h3",{attrs:{id:"zuul"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zuul"}},[t._v("#")]),t._v(" Zuul")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20200716201640.png",alt:"img"}})]),t._v(" "),a("p",[t._v("在 zuul 中， 整个请求的过程是这样的，首先将请求给 zuulservlet 处理，zuulservlet 中有一个 zuulRunner 对象，该对象中初始化了 RequestContext：作为存储整个请求的一些数据，并被所有的 zuulfilter 共享。zuulRunner 中还有 FilterProcessor，FilterProcessor 作为执行所有的 zuulfilter 的管理器。FilterProcessor 从 filterloader 中获取 zuulfilter，而 zuulfilter 是被 filterFileManager 所加载，并支持 groovy 热加载，采用了轮询的方式热加载。有了这些 filter 之后，zuulservelet 首先执行的 Pre 类型的过滤器，再执行 route 类型的过滤器，最后执行的是 post 类型的过滤器，如果在执行这些过滤器有错误的时候则会执行 error 类型的过滤器。执行完这些过滤器，最终将请求的结果返回给客户端。")]),t._v(" "),a("h2",{attrs:{id:"负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[t._v("#")]),t._v(" 负载均衡")]),t._v(" "),a("blockquote",[a("p",[t._v("参考："),a("a",{attrs:{href:"https://yuyanqing.cn/pages/98a1c1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("负载均衡基本原理"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"服务路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务路由"}},[t._v("#")]),t._v(" 服务路由")]),t._v(" "),a("p",[a("strong",[t._v("服务路由就是服务消费者在发起服务调用时，必须根据特定的规则来选择服务节点，从而满足某些特定的需求")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"服务路由的应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务路由的应用场景"}},[t._v("#")]),t._v(" 服务路由的应用场景")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("分组调用")]),t._v("。一般来讲，为了保证服务的高可用性，实现异地多活的需求，一个服务往往不止部署在一个数据中心，而且出于节省成本等考虑，有些业务可能不仅在私有机房部署，还会采用公有云部署，甚至采用多家公有云部署。服务节点也会按照不同的数据中心分成不同的分组，这时对于服务消费者来说，选择哪一个分组调用，就必须有相应的路由规则。")]),t._v(" "),a("li",[a("strong",[t._v("灰度发布")]),t._v("。在服务上线发布的过程中，一般需要先在一小部分规模的服务节点上先发布服务，然后验证功能是否正常。如果正常的话就继续扩大发布范围；如果不正常的话，就需要排查问题，解决问题后继续发布。这个过程就叫作灰度发布，也叫金丝雀部署。")]),t._v(" "),a("li",[a("strong",[t._v("流量切换")]),t._v("。在业务线上运行过程中，经常会遇到一些不可抗力因素导致业务故障，比如某个机房的光缆被挖断，或者发生着火等事故导致整个机房的服务都不可用。这个时候就需要按照某个指令，能够把原来调用这个机房服务的流量切换到其他正常的机房。")]),t._v(" "),a("li",[a("strong",[t._v("读写分离")]),t._v("。对于大多数互联网业务来说都是读多写少，所以在进行服务部署的时候，可以把读写分开部署，所有写接口可以部署在一起，而读接口部署在另外的节点上。")])]),t._v(" "),a("h3",{attrs:{id:"服务路由的规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务路由的规则"}},[t._v("#")]),t._v(" 服务路由的规则")]),t._v(" "),a("p",[t._v("服务路由主要有两种规则：一种是条件路由，一种是脚本路由。")]),t._v(" "),a("h4",{attrs:{id:"条件路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件路由"}},[t._v("#")]),t._v(" 条件路由")]),t._v(" "),a("p",[t._v("条件路由是基于条件表达式的路由规则。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('condition://0.0.0.0/dubbo.test.interfaces.TestService?category=routers&dynamic=true&priority=2&enabled=true&rule=" + URL.encode(" host = 10.20.153.10=> host = 10.20.153.11")\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这里面 "),a("code",[t._v("condition://")]),t._v(" 代表了这是一段用条件表达式编写的路由规则，具体的规则是")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("host = 10.20.153.10 => host = 10.20.153.11\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("分隔符“=>”前面是服务消费者的匹配条件，后面是服务提供者的过滤条件。当服务消费者节点满足匹配条件时，就对该服务消费者执行后面的过滤规则。那么上面这段表达式表达的意义就是 IP 为“10.20.153.10”的服务消费者都调用 IP 为“10.20.153.11”的服务提供者节点。")]),t._v(" "),a("p",[t._v("如果服务消费者的匹配条件为空，就表示对所有的服务消费者应用，就像下面的表达式一样。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("=> host ！= 10.20.153.11\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如果服务提供者的过滤条件为空，就表示禁止服务消费者访问，就像下面的表达式一样。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("host = 10.20.153.10=>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("下面我举一些 Dubbo 框架中的条件路由，来给你讲解下条件路由的具体应用场景。")]),t._v(" "),a("ul",[a("li",[t._v("排除某个服务节点")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("=> host != 172.22.3.91\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("一旦这条路由规则被应用到线上，所有的服务消费者都不会访问 IP 为 172.22.3.91 的服务节点，这种路由规则一般应用在线上流量排除预发布机以及摘除某个故障节点的场景。")]),t._v(" "),a("ul",[a("li",[t._v("白名单和黑名单功能")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("host != 10.20.153.10,10.20.153.11 =>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这条路由规则意思是除了 IP 为 10.20.153.10 和 10.20.153.11 的服务消费者可以发起服务调用以外，其他服务消费者都不可以，主要用于白名单访问逻辑，比如某个后台服务只允许特定的几台机器才可以访问，这样的话可以机器控制访问权限。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("host = 10.20.153.10,10.20.153.11 =>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("同理，这条路由规则意思是除了 IP 为 10.20.153.10 和 10.20.153.11 的服务消费者不能发起服务调用以外，其他服务消费者都可以，也就是实现了黑名单功能，比如线上经常会遇到某些调用方不管是出于有意还是无意的不合理调用，影响了服务的稳定性，这时候可以通过黑名单功能暂时予以封杀。")]),t._v(" "),a("ul",[a("li",[t._v("机房隔离")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("host = 172.22.3.* => host = 172.22.3.*\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这条路由规则意思是 IP 网段为 172.22.3.* 的服务消费者，才可以访问同网段的服务节点，这种规则一般应用于服务部署在多个 IDC，理论上同一个 IDC 内的调用性能要比跨 IDC 调用性能要好，应用这个规则是为了实现同 IDC 就近访问。")]),t._v(" "),a("ul",[a("li",[t._v("读写分离")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("method = find*,list*,get*,is* => host =172.22.3.94,172.22.3.95\nmethod != find*,list*,get*,is* => host = 172.22.3.97,172.22.3.98\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("这条路由规则意思是 find*、get*、is* 等读方法调用 IP 为 172.22.3.94 和 172.22.3.95 的节点，除此以外的写方法调用 IP 为 172.22.3.97 和 172.22.3.98 的节点。对于大部分互联网业务来说，往往读请求要远远大于写请求，而写请求的重要性往往要远远高于读请求，所以需要把读写请求进行分离，以避免读请求异常影响到写请求，这时候就可以应用这种规则。")]),t._v(" "),a("h4",{attrs:{id:"脚本路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本路由"}},[t._v("#")]),t._v(" 脚本路由")]),t._v(" "),a("p",[t._v("脚本路由是基于脚本语言的路由规则，常用的脚本语言比如 JavaScript、Groovy、JRuby 等。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('"script://0.0.0.0/com.foo.BarService?category=routers&dynamic=false&rule=" + URL.encode("（function route(invokers) { ... } (invokers)）")\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这里面“script://”就代表了这是一段脚本语言编写的路由规则，具体规则定义在脚本语言的 route 方法实现里，比如下面这段用 JavaScript 编写的 route() 方法表达的意思是，只有 IP 为 10.20.153.10 的服务消费者可以发起服务调用。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('function route(invokers){\n  var result = new java.util.ArrayList(invokers.size());\n  for(i =0; i < invokers.size(); i ++){\n    if("10.20.153.10".equals(invokers.get(i).getUrl().getHost())){\n       result.add(invokers.get(i));\n    }\n  }\n  return result;\n } (invokers)）;\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"服务路由的获取方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务路由的获取方式"}},[t._v("#")]),t._v(" 服务路由的获取方式")]),t._v(" "),a("p",[t._v("服务路由的获取方式主要有三种：")]),t._v(" "),a("ul",[a("li",[t._v("本地配置")])]),t._v(" "),a("p",[t._v("顾名思义就是路由规则存储在服务消费者本地上。服务消费者发起调用时，从本地固定位置读取路由规则，然后按照路由规则选取一个服务节点发起调用。")]),t._v(" "),a("ul",[a("li",[t._v("配置中心管理")])]),t._v(" "),a("p",[t._v("这种方式下，所有的服务消费者都从配置中心获取路由规则，由配置中心来统一管理。")]),t._v(" "),a("ul",[a("li",[t._v("动态下发")])]),t._v(" "),a("p",[t._v("这种方式下，一般是运维人员或者开发人员，通过服务治理平台修改路由规则，服务治理平台调用配置中心接口，把修改后的路由规则持久化到配置中心。因为服务消费者订阅了路由规则的变更，于是就会从配置中心获取最新的路由规则，按照最新的路由规则来执行。")]),t._v(" "),a("h3",{attrs:{id:"内部服务调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内部服务调用"}},[t._v("#")]),t._v(" 内部服务调用")]),t._v(" "),a("p",[t._v("基础服务之间的调用：结合服务注册中心以及专属的具有负载均衡功能的客户端，如 Eureka+（restTemplate+Ribbon）或者 Eureka+Feign\n聚合服务调用：结合服务注册中心以及专属的具有负载均衡功能的客户端，如 Eureka+（restTemplate+Ribbon）或者 Eureka+Feign")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20200716202409.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"外部服务调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外部服务调用"}},[t._v("#")]),t._v(" 外部服务调用")]),t._v(" "),a("p",[t._v("基于 Netflix 的 zuul，做了简单了解，SpringCloud 与 zuul 集成的方式。这里先对核心流程做个简单了解，后续会有深入的应用、分析。")]),t._v(" "),a("p",[t._v("Spring Cloud 很好的集成了 zuul，并且可以通过注解的形式来进行请求的反向路由以及 API 网关功能\nSpring Cloud 集成 zuul，对与 url 映射的处理方式与 SpringMVC 对 url 的请求方式类似，都是通过 RequestMapping 来进行请求绑定的。核心类：ZuulHandlerMapping\nzuul 的核心是 ZuulServlet，一个请求核心流程：HttpServletRequest –>ZuulHandlerMapping –>ZuulController –> ZuulServlet –> ZuulFilter –> HttpServletResponse")]),t._v(" "),a("h2",{attrs:{id:"配置中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置中心"}},[t._v("#")]),t._v(" 配置中心")]),t._v(" "),a("p",[t._v("配置中心的思路就是把服务的各种配置，如代码里配置的各种参数、服务降级的开关甚至依赖的资源等都在一个地方统一进行管理。服务启动时，可以自动从配置中心中拉取所需的配置，并且如果有配置变更的情况，同样可以自动从配置中心拉取最新的配置信息，服务无须重新发布。")]),t._v(" "),a("p",[t._v("配置中心一般包含下面几个功能：")]),t._v(" "),a("ul",[a("li",[t._v("配置注册功能")]),t._v(" "),a("li",[t._v("配置反注册功能")]),t._v(" "),a("li",[t._v("配置查看功能")]),t._v(" "),a("li",[t._v("配置变更订阅功能")])]),t._v(" "),a("h3",{attrs:{id:"apollo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apollo"}},[t._v("#")]),t._v(" Apollo")]),t._v(" "),a("p",[t._v("携程开源的分布式配置中心，支持 Java 和.Net 语言，客户端和配置中心通过 HTTP 长连接实现实时推送，并且有统一的管理界面来实现配置管理。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/ELH62gpbFmGdnIjxDT7AOQyZgl2KQnz68zZFSDpHfa80ppne7gbP4ROOLJSuZT7E2uEdf1OTR9zthLNFkIZSLQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"spring-cloud-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-git"}},[t._v("#")]),t._v(" Spring Cloud Git")]),t._v(" "),a("p",[t._v("Spring Cloud 中使用的配置中心组件，只支持 Java 语言，配置存储在 git 中，变更配置也需要通过 git 操作，如果配置中心有配置变更，需要手动刷新。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20200716202911.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"链路追踪"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链路追踪"}},[t._v("#")]),t._v(" 链路追踪")]),t._v(" "),a("h3",{attrs:{id:"链路追踪的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链路追踪的作用"}},[t._v("#")]),t._v(" 链路追踪的作用")]),t._v(" "),a("ul",[a("li",[t._v("优化系统瓶颈")]),t._v(" "),a("li",[t._v("优化链路调用")]),t._v(" "),a("li",[t._v("生成网络拓扑")]),t._v(" "),a("li",[t._v("透明传输数据")])]),t._v(" "),a("h3",{attrs:{id:"链路追踪的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链路追踪的原理"}},[t._v("#")]),t._v(" 链路追踪的原理")]),t._v(" "),a("p",[t._v("理解链路追踪必须先了解以下概念：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("traceId")]),t._v("，用于标识某一次具体的请求 ID。当用户的请求进入系统后，会在 RPC 调用网络的第一层生成一个全局唯一的 traceId，并且会随着每一层的 RPC 调用，不断往后传递，这样的话通过 traceId 就可以把一次用户请求在系统中调用的路径串联起来。")]),t._v(" "),a("li",[a("strong",[t._v("spanId")]),t._v("，用于标识一次 RPC 调用在分布式请求中的位置。当用户的请求进入系统后，处在 RPC 调用网络的第一层 A 时 spanId 初始值是 0，进入下一层 RPC 调用 B 的时候 spanId 是 0.1，继续进入下一层 RPC 调用 C 时 spanId 是 0.1.1，而与 B 处在同一层的 RPC 调用 E 的 spanId 是 0.2，这样的话通过 spanId 就可以定位某一次 RPC 请求在系统调用中所处的位置，以及它的上下游依赖分别是谁。")]),t._v(" "),a("li",[a("strong",[t._v("annotation")]),t._v("，用于业务自定义埋点数据，可以是业务感兴趣的想上传到后端的数据，比如一次请求的用户 UID。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20200716204658.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"链路追踪的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链路追踪的实现"}},[t._v("#")]),t._v(" 链路追踪的实现")]),t._v(" "),a("p",[t._v("一个服务追踪系统一般可以分为三层：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("数据采集")]),t._v("层，负责数据埋点并上报。")]),t._v(" "),a("li",[a("strong",[t._v("数据处理")]),t._v("层，负责数据的存储与计算。")]),t._v(" "),a("li",[a("strong",[t._v("数据展示")]),t._v("层，负责数据的图形化展示。")])]),t._v(" "),a("h4",{attrs:{id:"数据采集层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据采集层"}},[t._v("#")]),t._v(" 数据采集层")]),t._v(" "),a("p",[t._v("一次 RPC 请求可以分为四个阶段。")]),t._v(" "),a("ul",[a("li",[t._v("CS（Client Send）阶段 : 客户端发起请求，并生成调用的上下文。")]),t._v(" "),a("li",[t._v("SR（Server Recieve）阶段 : 服务端接收请求，并生成上下文。")]),t._v(" "),a("li",[t._v("SS（Server Send）阶段 : 服务端返回请求，这个阶段会将服务端上下文数据上报，下面这张图可以说明上报的数据有：traceId=123456，spanId=0.1，appKey=B，method=B.method，start=103，duration=38。")]),t._v(" "),a("li",[t._v("CR（Client Recieve）阶段 : 客户端接收返回结果，这个阶段会将客户端上下文数据上报，上报的数据有：traceid=123456，spanId=0.1，appKey=A，method=B.method，start=103，duration=38。")])]),t._v(" "),a("h4",{attrs:{id:"数据处理层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据处理层"}},[t._v("#")]),t._v(" 数据处理层")]),t._v(" "),a("p",[t._v("数据处理层的作用就是把数据采集层上报的数据按需计算，然后落地存储供查询使用。")]),t._v(" "),a("ul",[a("li",[t._v("实时数据处理")])]),t._v(" "),a("p",[t._v("针对实时数据处理，一般采用 Storm 或者 Spark Streaming 来对链路数据进行实时聚合加工，存储一般使用 OLTP 数据仓库，比如 HBase，使用 traceId 作为 RowKey，能天然地把一整条调用链聚合在一起，提高查询效率。")]),t._v(" "),a("ul",[a("li",[t._v("离线数据处理")])]),t._v(" "),a("p",[t._v("针对离线数据处理，一般通过运行 MapReduce 或者 Spark 批处理程序来对链路数据进行离线计算，存储一般使用 Hive。")]),t._v(" "),a("h4",{attrs:{id:"数据展示层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据展示层"}},[t._v("#")]),t._v(" 数据展示层")]),t._v(" "),a("p",[t._v("数据展示层的作用就是将处理后的链路信息以图形化的方式展示给用户。")]),t._v(" "),a("p",[t._v("实际项目中主要用到两种图形展示，一种是调用链路图，一种是调用拓扑图。")]),t._v(" "),a("h3",{attrs:{id:"链路追踪方案对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链路追踪方案对比"}},[t._v("#")]),t._v(" 链路追踪方案对比")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20200716205052.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"限流熔断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限流熔断"}},[t._v("#")]),t._v(" 限流熔断")]),t._v(" "),a("p",[t._v("一般而言，集群故障的产生原因不外乎有两种：")]),t._v(" "),a("p",[t._v("一种是代码 bug 所导致，比如说某一段 Java 代码不断地分配大对象，但没有及时回收导致 JVM OOM 退出；")]),t._v(" "),a("p",[t._v("另一种是突发的流量冲击，超出了系统的最大承载能力，比如“双 11”这种购物活动，电商系统会在零点一瞬间涌入大量流量，超出系统的最大承载能力，一下子就把整个系统给压垮了。")]),t._v(" "),a("p",[t._v("应付集群故障的思路，主要有两种："),a("strong",[t._v("限流")]),t._v("和"),a("strong",[t._v("降级")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"限流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限流"}},[t._v("#")]),t._v(" 限流")]),t._v(" "),a("p",[t._v("限流就是限制流量。通常情况下，系统能够承载的流量根据集群规模的大小是固定的，可以称之为系统的最大容量。当真实流量超过了系统的最大容量后，就会导致系统响应变慢，服务调用出现大量超时，反映给用户的感觉就是卡顿、无响应。所以，应该根据系统的最大容量，给系统设置一个阈值，超过这个阈值的请求会被自动抛弃，这样的话可以最大限度地保证系统提供的服务正常。")]),t._v(" "),a("p",[t._v("除此之外，通常一个微服务系统会同时提供多个服务，每个服务在同一时刻的请求量也是不同的，很可能出现的一种情况就是，系统中某个服务的请求量突增，占用了系统中大部分资源，导致其他服务没有资源可用。因此，还要针对系统中每个服务的请求量也设置一个阈值，超过这个阈值的请求也要被自动抛弃，这样的话不至于因为一个服务影响了其他所有服务。")]),t._v(" "),a("p",[t._v("在实际项目中，可以用两个指标来衡量服务的请求量，一个是 QPS 即每秒请求量，一个是工作线程数。不过 QPS 因为不同服务的响应快慢不同，所以系统能够承载的 QPS 相差很大，因此一般选择工作线程数来作为限流的指标，给系统设置一个总的最大工作线程数以及单个服务的最大工作线程数，这样的话无论是系统的总请求量过大导致整体工作线程数量达到最大工作线程数，还是某个服务的请求量超过单个服务的最大工作线程数，都会被限流，以起到保护整个系统的作用。")]),t._v(" "),a("h3",{attrs:{id:"降级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#降级"}},[t._v("#")]),t._v(" 降级")]),t._v(" "),a("p",[t._v("什么是降级呢？在我看来，降级就是通过停止系统中的某些功能，来保证系统整体的可用性。降级可以说是一种被动防御的措施，为什么这么说呢？因为它一般是系统已经出现故障后所采取的一种止损措施。")]),t._v(" "),a("p",[t._v("那么降级一般是如何实现的呢？根据我的实践来看， 一种可行的方案是通过开关来实现。")]),t._v(" "),a("p",[t._v("具体来讲，就是在系统运行的内存中开辟一块区域，专门用于存储开关的状态，也就是开启还是关闭。并且需要监听某个端口，通过这个端口可以向系统下发命令，来改变内存中开关的状态。当开关开启时，业务的某一段逻辑就不再执行，而正常情况下，开关是关闭的状态。")]),t._v(" "),a("p",[t._v("开关一般用在两种地方，一种是新增的业务逻辑，因为新增的业务逻辑相对来说不成熟，往往具备一定的风险，所以需要加开关来控制新业务逻辑是否执行；另一种是依赖的服务或资源，因为依赖的服务或者资源不总是可靠的，所以最好是有开关能够控制是否对依赖服务或资源发起调用，来保证即使依赖出现问题，也能通过降级来避免影响。")]),t._v(" "),a("p",[t._v("在实际业务应用的时候，降级要按照对业务的影响程度进行分级，一般分为三级：一级降级是对业务影响最小的降级，在故障的情况下，首先执行一级降级，所以一级降级也可以设置成自动降级，不需要人为干预；二级降级是对业务有一定影响的降级，在故障的情况下，如果一级降级起不到多大作用的时候，可以人为采取措施，执行二级降级；三级降级是对业务有较大影响的降级，这种降级要么是对商业收入有重大影响，要么是对用户体验有重大影响，所以操作起来要非常谨慎，不在最后时刻一般不予采用。")]),t._v(" "),a("h2",{attrs:{id:"devops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devops"}},[t._v("#")]),t._v(" DEVOPS")]),t._v(" "),a("h3",{attrs:{id:"容器和容器平台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器和容器平台"}},[t._v("#")]),t._v(" 容器和容器平台")]),t._v(" "),a("p",[t._v("Mesos、Marathon、Kubernetes")]),t._v(" "),a("h2",{attrs:{id:"rpc-选型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpc-选型"}},[t._v("#")]),t._v(" RPC 选型")]),t._v(" "),a("h3",{attrs:{id:"限定语言-rpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限定语言-rpc"}},[t._v("#")]),t._v(" 限定语言 RPC")]),t._v(" "),a("p",[t._v("跟语言平台绑定的开源 RPC 框架主要有下面几种。")]),t._v(" "),a("ul",[a("li",[t._v("Dubbo：国内最早开源的 RPC 框架，由阿里巴巴公司开发并于 2011 年末对外开源，仅支持 Java 语言。")]),t._v(" "),a("li",[t._v("Motan：微博内部使用的 RPC 框架，于 2016 年对外开源，仅支持 Java 语言。")]),t._v(" "),a("li",[t._v("Tars：腾讯内部使用的 RPC 框架，于 2017 年对外开源，仅支持 C++ 语言。")]),t._v(" "),a("li",[t._v("Spring Cloud：国外 Pivotal 公司 2014 年对外开源的 RPC 框架，仅支持 Java 语言，最近几年生态发展得比较好，是比较火的 RPC 框架。")])]),t._v(" "),a("p",[t._v("所以很明显，如果你的业务场景仅仅局限于一种语言的话，可以选择跟语言绑定的 RPC 框架中的一种；如果涉及多个语言平台之间的相互调用，就应该选择跨语言平台的 RPC 框架。")]),t._v(" "),a("p",[t._v("仔细分析，可以看出 Spring Cloud 不仅提供了基本的 RPC 框架功能，还提供了服务注册组件、配置中心组件、负载均衡组件、断路器组件、分布式消息追踪组件等一系列组件，也难怪被技术圈的人称之为“Spring Cloud 全家桶”。如果你不想自己实现以上这些功能，那么 Spring Cloud 基本可以满足你的全部需求。而 Dubbo、Motan 基本上只提供了最基础的 RPC 框架的功能，其他微服务组件都需要自己去实现。不过由于 Spring Cloud 的 RPC 通信采用了 HTTP 协议，相比 Dubbo 和 Motan 所采用的私有协议来说，在高并发的通信场景下，性能相对要差一些，所以对性能有苛刻要求的情况下，可以考虑 Dubbo 和 Motan。")]),t._v(" "),a("h3",{attrs:{id:"跨语言-rpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨语言-rpc"}},[t._v("#")]),t._v(" 跨语言 RPC")]),t._v(" "),a("p",[t._v("而跨语言平台的开源 RPC 框架主要有以下几种。")]),t._v(" "),a("ul",[a("li",[t._v("gRPC：Google 于 2015 年对外开源的跨语言 RPC 框架，支持常用的 C++、Java、Python、Go、Ruby、PHP、Android Java、Objective-C 等多种语言。")]),t._v(" "),a("li",[t._v("Thrift：最初是由 Facebook 开发的内部系统跨语言的 RPC 框架，2007 年贡献给了 Apache 基金，成为 Apache 开源项目之一，支持常用的 C++、Java、PHP、Python、Ruby、Erlang 等多种语言。")])]),t._v(" "),a("p",[t._v("从成熟度上来讲，Thrift 因为诞生的时间要早于 gRPC，所以使用的范围要高于 gRPC，在 HBase、Hadoop、Scribe、Cassandra 等许多开源组件中都得到了广泛地应用。而且 Thrift 支持多达 25 种语言，这要比 gRPC 支持的语言更多，所以如果遇到 gRPC 不支持的语言场景下，选择 Thrift 更合适。")]),t._v(" "),a("p",[t._v("但 gRPC 作为后起之秀，因为采用了 HTTP/2 作为通信协议、ProtoBuf 作为数据序列化格式，在移动端设备的应用以及对传输带宽比较敏感的场景下具有很大的优势，而且开发文档丰富，根据 ProtoBuf 文件生成的代码要比 Thrift 更简洁一些，从使用难易程度上更占优势，所以如果使用的语言平台 gRPC 支持的话，建议还是采用 gRPC 比较好。")]),t._v(" "),a("h2",{attrs:{id:"service-mesh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-mesh"}},[t._v("#")]),t._v(" Service Mesh")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/snap/20200721154106.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"service-mesh-的实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-mesh-的实现原理"}},[t._v("#")]),t._v(" Service Mesh 的实现原理")]),t._v(" "),a("p",[t._v("Service Mesh 实现的关键就在于两点：")]),t._v(" "),a("p",[t._v("一个是上面提到的轻量级的网络代理也叫 SideCar，它的作用就是转发服务之间的调用；")]),t._v(" "),a("p",[t._v("一个是基于 SideCar 的服务治理也被叫作 Control Plane，它的作用是向 SideCar 发送各种指令，以完成各种服务治理功能。下面我就来详细讲解这两点是如何实现的。")]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://time.geekbang.org/column/intro/100014401",target:"_blank",rel:"noopener noreferrer"}},[t._v("从 0 开始学微服务"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://time.geekbang.org/column/intro/100046201",target:"_blank",rel:"noopener noreferrer"}},[t._v("RPC 实战与核心原理"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://time.geekbang.org/course/intro/100003901",target:"_blank",rel:"noopener noreferrer"}},[t._v("微服务架构核心 20 讲"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/savorboard/p/api-gateway.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("谈谈微服务中的 API 网关（API Gateway）"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=_.exports}}]);