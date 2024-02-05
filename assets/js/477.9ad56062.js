(window.webpackJsonp=window.webpackJsonp||[]).push([[477],{793:function(s,a,e){"use strict";e.r(a);var n=e(7),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一、引言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、引言"}},[s._v("#")]),s._v(" 一、引言")]),s._v(" "),a("p",[s._v("压测过程中，我们需要监控服务器、数据库的各项性能指标。"),a("br"),s._v("\n使用 JMeter 进行压测，压测结束后，可以通过 HTML 报告可以查阅压测结果。但是这种方式存在比较致命的缺点：只能在压测流程结束后，才能查看指标数据。无法观测执行过程中的异常波动，不具备实时性。"),a("br"),s._v("\n可以在 JMeter 脚本中增加 Basic Graphs 等插件，通过树 + 图 + 表等方式查看压测过程中指标，但是这种方式通常在调试脚本的时候使用，正式压测时不推荐。因为 JMeter 使用 Java 实现，并不擅长图形绘制，这样的组件在压测过程中执行极其耗损性能，影响压测执行及压测结果的准确性。"),a("br"),s._v("\n因此，需要搭建监控系统，实时的监控整个压测过程。")]),s._v(" "),a("h2",{attrs:{id:"二、监控系统组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、监控系统组成"}},[s._v("#")]),s._v(" 二、监控系统组成")]),s._v(" "),a("p",[s._v("1.InfluxDB"),a("br"),s._v("\nInfluxDB 是一款用 Go 语言编写的开源分布式时序、事件和指标数据库，无需外部依赖。该数据库现在主要用于存储涉及大量的时间戳数据，如 DevOps 监控数据，APP metrics, loT 传感器数据和实时分析数据。"),a("br"),s._v("\n2.Prometheus"),a("br"),s._v("\nPrometheus 是一个开源的系统监控和警报工具包，在 Prometheus + Grafana 的体系架构下，Prometheus 相当于一个注册中心。"),a("br"),s._v("\n3.Grafana"),a("br"),s._v("\n一个开源软件，拥有丰富的指标仪表盘和图形编辑器，适用 Graphite, Elasticsearch, OpenTSDB, Prometheus，InfluxDB。简单点说就是一套开源 WEB 可视化平台。")]),s._v(" "),a("h2",{attrs:{id:"三、监控系统实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、监控系统实现原理"}},[s._v("#")]),s._v(" 三、监控系统实现原理")]),s._v(" "),a("p",[s._v("JMeter 引入 Backend Listener 将在压测过程中实时采集并发送统计指标数据发送到 Influxdb 数据库，Grafana 数据源连接到 Influxdb，并实时读取 InfluxDB 数据库中的数据，通过配置的可视化看板展示测试指标数据。"),a("br"),s._v("\n● 采集 -- 通过 JMeter 中配置 Backend Listener 去实时采集数据"),a("br"),s._v("\n● 存储 -- 在 Prometheus/InfluxDB 中进行相关配置，存储采集来的数据"),a("br"),s._v("\n● 展示 -- 在 Grafana 中进行相关配置，读取 InfluxDB 数据库中的数据，配置相应的 dashboard 进行展示 JMeter 采集到的数据")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/testing/8833ee05-b30f-443e-af7e-ecded4c438d0.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"四、监控系统搭建方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、监控系统搭建方式"}},[s._v("#")]),s._v(" 四、监控系统搭建方式")]),s._v(" "),a("p",[s._v("支持在不同的运行环境搭建监控系统:"),a("br"),s._v("\n● windows 环境搭建 JMeter + Influxdb/prometheus + Grafana 监控系统"),a("br"),s._v("\n● 基于 docker-compose 搭建 JMeter + Influxdb/prometheus + Grafana 监控系统"),a("br"),s._v("\nwindows 上搭建监控系统，比较简单，适合小流量压测执行。"),a("br"),s._v("\n使用场景更高的是对服务端的监控。因此这个分章节，主要介绍 Linux 环境下监控系统的搭建。")]),s._v(" "),a("p",[s._v("那么监控系统为什么使用 Docke-compose 搭建呢？原因如下："),a("br"),s._v("\n● 简化管理：虽然不像微服务架构动辄几十服务，监控系统涉及服务要是单独管理还是比较麻烦的，手动启停维护工作量较大。"),a("br"),s._v("\n● 解决服务依赖性问题：监控系统服务存在依赖关系，需要相互配合才能实现监控系统的功能。"),a("br"),s._v("\n● 可移植性：只需要编写一份 docker-compse.yml，及提供相应服务的配置文件，可以快速移植到任何需要监控的服务器中。")]),s._v(" "),a("h2",{attrs:{id:"五、基于-docker-compose-搭建监控系统的具体实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、基于-docker-compose-搭建监控系统的具体实现"}},[s._v("#")]),s._v(" 五、基于 docker-compose 搭建监控系统的具体实现")]),s._v(" "),a("ol",[a("li",[s._v("docker-compse.yml 编写 主要配置项说明： ①.JMeter 为了解耦，没有在监控系统中配置 JMeter 相关内容，只配置监控系统最小化安装。 JMeter 分布式压测使用预制的 docker Master/Slave image，灵活控制 slave 的个数和主从的端口号。 ②.Grafana / prometheus 从 Grafana 和 prometheus 官网拿到 docker-compose.yml，作为配置文件 docker-compose.yml 的节点内容，因此版本号是 latest。 当然也可以使用 Grafana / prometheus 自有 docker image 的版本号，不过尽量不要使用过低版本号，避免版本兼容问题。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("官网链接如下：\n● Grafana：https://grafana.com/docs/grafana/latest/installation/docker/\n● prometheus：https://prometheus.io/docs/guides/cadvisor/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#prometheus-configuration")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("③.Influxdb / Prometheus"),a("br"),s._v("\n存储节点，都配置了 docker 数据卷，用于监控数据的持久化存储。"),a("br"),s._v("\n当我们每次对服务做升级时，或者做了性能优化时，都可以再次进行压测，对比历史压测数据，查看优化的效果。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("version: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\nservices:\n    grafana:\n        image: grafana/grafana:latest\n        container_name: jk_grafana\n        hostname: grafana\n        restart: always\n        ports:\n            - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v(":3000\n        env_file:\n            - ./grafana/config.monitoring\n    prometheus:\n        image: prom/prometheus:latest\n        container_name: jk_prometheus\n        hostname: prometheus\n        restart: always\n        volumes:\n            - ./prometheus:/etc/prometheus\n            - ./prometheus/prometheus.yml:/etc/prometheus/prometheus.yml:ro\n        command:\n            - "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config.file")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/prometheus/prometheus.yml\n        ports:\n            - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9090")]),s._v(":9090\n\n    influxdb:\n        image: influxdb:1.8.10\n        container_name: jk_influxdb\n        hostname: influxdb\n        restart: always\n        volumes:\n            - ./influxdb/db:/var/lib/influxdb\n            - ./influxdb/config/influxdb.generated.conf:/etc/influxdb/influxdb.generated.conf\n        ports:\n            - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8083")]),s._v(":8083\n            - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8086")]),s._v(":8086\n            - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8090")]),s._v(":8090\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("p",[s._v("2.文件目录结构"),a("br"),s._v("\n准备好监控系统的 docker-compse.yml 后，各个服务还有单独的配置文件。系统的目录结构如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├── docker-compose.yml\n├── grafana\n│   ├── config.monitoring\n│   └── dashboard\n│       ├── alerting.json\n│       ├── ping_dashboard.json\n│       └── variable.json\n├── prometheus\n│   └── prometheus.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("3.配置文件")]),s._v(" "),a("p",[s._v("各个服务还有单独的配置文件，具体如下："),a("br"),s._v("\n①. Grafana")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("grafana:\n        env_file:\n            - ./grafana/config.monitoring\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" config.monitoring\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GF_SECURITY_ADMIN_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("admin\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GF_USERS_ALLOW_SIGN_UP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("②. prometheus")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("prometheus:\n        command:\n            - "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config.file")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/prometheus/prometheus.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" prometheus.yml\n\nglobal:\n  scrape_interval: 10s\n  evaluation_interval: 15s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("4.启动容器"),a("br"),s._v("\n进入 docker-compose.yml 目录下，执行命令启动容器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost jkxt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pwd")]),s._v("\n/root/handan3/jkxt\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost jkxt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose up -d")]),s._v("\nCreating jk_redis "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nCreating jk_cadvisor "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nCreating jk_prometheus "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nCreating jk_influxdb "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost jkxt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker ps")]),s._v("\nCONTAINER ID   IMAGE                    COMMAND                  CREATED         STATUS         PORTS                                                                                                                             NAMES\n280c447c1e97   prom/prometheus:latest   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/prometheus --c…"')]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" minutes ago   Up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" minutes   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:9090-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9090")]),s._v("/tcp, :::9090-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9090")]),s._v("/tcp                                                                                         jk_prometheus\na00db4de47da   google/cadvisor:latest   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/bin/cadvisor -…"')]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" minutes ago   Up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" minutes   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:8081-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v("/tcp, :::8081-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v("/tcp                                                                               jk_cadvisor\n5c04c5ebc022   redis:latest             "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-entrypoint.s…"')]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" minutes ago   Up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" minutes   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:6380-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/tcp, :::6380-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/tcp                                                                                         jk_redis\n9edb14c81e3c   grafana/grafana:latest   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/run.sh"')]),s._v("                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" minutes ago   Up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" minutes   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:3000-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v("/tcp, :::3000-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v("/tcp                                                                                         jk_grafana\nc582e8e25dee   influxdb:1.8.10          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/entrypoint.sh infl…"')]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" minutes ago   Up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" minutes   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:8083-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8083")]),s._v("/tcp, :::8083-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8083")]),s._v("/tcp, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:8086-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8086")]),s._v("/tcp, :::8086-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8086")]),s._v("/tcp, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:8090-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8090")]),s._v("/tcp, :::8090-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8090")]),s._v("/tcp   jk_influxdb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("备注：如果有 running 状态的服务，需要先 docker-compose down 正在运行服务， 不然 docker-compose up 时会报错端口已被占用。")]),s._v(" "),a("p",[s._v("5.配置监控系统")]),s._v(" "),a("p",[s._v("5.1 JMeter 添加 Backend Listener"),a("br"),s._v("\n①.JMeter 先安装插件 jmeter-prometheus-plugin-0.6.0.jar"),a("br"),s._v(" "),a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/testing/498247b0-febd-4a62-8401-7fc65fbd6170.png",alt:""}})]),s._v(" "),a("p",[s._v("②.配置 Backend Listener"),a("br"),s._v("\nLinux 上要配置上具体的服务器 ip\n"),a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/testing/e65b7443-31f8-4197-ba4a-db17e475a748.png",alt:""}})]),s._v(" "),a("p",[s._v("5.2 JMeter 关联 Influxdb"),a("br"),s._v("\n由于 JMeter 需要将数据写入 Influxdb 中，需要先创建好数据库，如下步骤：")]),s._v(" "),a("p",[s._v("①.进入 Influxdb 容器中")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost jkxt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose exec influxdb bash")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("②.输入 influxdb 进入 influxdb 命令行模式")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("root@influxdb:/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# influx")]),s._v("\nConnected to http://localhost:8086 version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(".10\nInfluxDB shell version: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(".10\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show databases"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nname: databases\nname\n----\n_internal\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" create database jmeterDB\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("③.创建一个数据库命名为：jmeterDB（一定要同 JMeter Backend Listener 中配置的一致）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" create database jmeterDB\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show databases\nname: databases\nname\n----\n_internal\njmeterDB\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/testing/872193fb-a57d-4a3e-adc2-0adfcc706cca.png",alt:""}})]),s._v(" "),a("p",[s._v("④.启动并进入 master 容器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" jmeter-cljyc-master-1 /bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("⑤.执行压测脚本")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("jmeter "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" ./jmx/cljzyyconeLinux.jmx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" ./jtl/cljyc.jtl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" ./report "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-j")]),s._v(" /log/jmeter-master.log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dserver.rmi.ssl.disable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dclient.rmi.localport")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Djava.rmi.server.hostname")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.19")]),s._v(".1.136 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dserver_port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1099")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dserver.rmi.ssl.disable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-JthreadNum")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-JrampTime")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-JstepTime")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Jduration")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("⑥.Influxdb 中查看是否数据存入")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("show databases\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("use jmeterDB\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("show measurements\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("select * from jmeter limit "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/testing/0f729514-60c4-438e-b412-355454a3f9d4.png",alt:""}})]),s._v(" "),a("p",[s._v("到这，说明 JMeter 和 Iinfluxdb 已关联成功。")]),s._v(" "),a("p",[s._v("5.3 Influxdb/Prometheus 关联 Grafana"),a("br"),s._v("\n这部分在网上可以找到相关资料，比较简单，就不做详细描述。"),a("br"),s._v("\n以 Influxdb 关联 Grafana 为例，简要描述过程如下："),a("br"),s._v("\n①.打开浏览器"),a("br"),s._v("\n● Linux 服务器输入 ip:3000，如："),a("a",{attrs:{href:"http://10.19.1.136:3000/?orgId=1",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://10.19.1.136:3000/?orgId=1"),a("OutboundLink")],1),a("br"),s._v("\n②.点击入口添加数据库，数据源选择 InfluxDB"),a("br"),s._v("\n③.设置 连接的数据库：jmeterDB，以及 Grafana 的账号和密码。"),a("br"),s._v("\n④.到 Grafana 官网，选择合适的 DashBoard。"),a("br"),s._v("\n⑤.在 Grafana 中 import 指定 DashBoard。")]),s._v(" "),a("p",[s._v("6.运行监控脚本查看效果")]),s._v(" "),a("p",[s._v("在 JMeter 中执行脚本，查看效果"),a("br"),s._v(" "),a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/testing/3af7e02f-3587-4641-a81d-13edd34d2d5d.png",alt:""}})]),s._v(" "),a("p",[s._v("到这里，JMeter 的 Summary Report 的数据就可以在 Grafana Dashboard 上展示出来")])])}),[],!1,null,null,null);a.default=t.exports}}]);