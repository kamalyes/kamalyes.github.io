(window.webpackJsonp=window.webpackJsonp||[]).push([[847],{1161:function(r,e,n){"use strict";n.r(e);var o=n(7),t=Object(o.a)({},(function(){var r=this,e=r._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"spring-environment-抽象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-environment-抽象"}},[r._v("#")]),r._v(" Spring Environment 抽象")]),r._v(" "),e("h2",{attrs:{id:"理解-spring-environment-抽象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#理解-spring-environment-抽象"}},[r._v("#")]),r._v(" 理解 Spring Environment 抽象")]),r._v(" "),e("p",[r._v("统一的 Spring 配置属性管理")]),r._v(" "),e("p",[r._v("Spring Framework 3.1 开始引入 Environment 抽象，它统一 Spring 配置属性的存储，包括占位符处理和类型转换，不仅完整地替换 PropertyPlaceholderConfigurer，而且还支持更丰富的配置属性源（PropertySource）")]),r._v(" "),e("p",[r._v("条件化 Spring Bean 装配管理")]),r._v(" "),e("p",[r._v("通过 Environment Profiles 信息，帮助 Spring 容器提供条件化地装配 Bean")]),r._v(" "),e("h2",{attrs:{id:"spring-environment-接口使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-environment-接口使用场景"}},[r._v("#")]),r._v(" Spring Environment 接口使用场景")]),r._v(" "),e("ul",[e("li",[r._v("⽤于属性占位符处理")]),r._v(" "),e("li",[r._v("用于转换 Spring 配置属性类型")]),r._v(" "),e("li",[r._v("用于存储 Spring 配置属性源（PropertySource）")]),r._v(" "),e("li",[r._v("用于 Profiles 状态的维护")])]),r._v(" "),e("h2",{attrs:{id:"environment-占位符处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment-占位符处理"}},[r._v("#")]),r._v(" Environment 占位符处理")]),r._v(" "),e("p",[r._v("Spring 3.1 前占位符处理")]),r._v(" "),e("ul",[e("li",[r._v("组件：org.springframework.beans.factory.config.PropertyPlaceholderConfigurer")]),r._v(" "),e("li",[r._v("接口：org.springframework.util.StringValueResolver")])]),r._v(" "),e("p",[r._v("Spring 3.1 + 占位符处理")]),r._v(" "),e("ul",[e("li",[r._v("组件：org.springframework.context.support.PropertySourcesPlaceholderConfigurer")]),r._v(" "),e("li",[r._v("接口：org.springframework.beans.factory.config.EmbeddedValueResolver")])]),r._v(" "),e("h2",{attrs:{id:"理解条件配置-spring-profiles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#理解条件配置-spring-profiles"}},[r._v("#")]),r._v(" 理解条件配置 Spring Profiles")]),r._v(" "),e("p",[r._v("Spring 3.1 条件配置")]),r._v(" "),e("ul",[e("li",[r._v("API：org.springframework.core.env.ConfigurableEnvironment")]),r._v(" "),e("li",[r._v("修改：addActiveProfile(String)、setActiveProfiles(String...) 和 setDefaultProfiles(String...)")]),r._v(" "),e("li",[r._v("获取：getActiveProfiles() 和 getDefaultProfiles()")]),r._v(" "),e("li",[r._v("匹配：#acceptsProfiles(String...) 和 acceptsProfiles(Profiles)")]),r._v(" "),e("li",[r._v("注解：@org.springframework.context.annotation.Profile")])]),r._v(" "),e("h2",{attrs:{id:"spring-4-重构-profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-4-重构-profile"}},[r._v("#")]),r._v(" Spring 4 重构 @Profile")]),r._v(" "),e("p",[r._v("基于 Spring 4 org.springframework.context.annotation.Condition 接口实现")]),r._v(" "),e("p",[r._v("org.springframework.context.annotation.ProfileCondition")]),r._v(" "),e("h2",{attrs:{id:"依赖注入-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入-environment"}},[r._v("#")]),r._v(" 依赖注入 Environment")]),r._v(" "),e("p",[r._v("直接依赖注入")]),r._v(" "),e("ul",[e("li",[r._v("通过 EnvironmentAware 接口回调")]),r._v(" "),e("li",[r._v("通过 @Autowired 注入 Environment")])]),r._v(" "),e("p",[r._v("间接依赖注入")]),r._v(" "),e("ul",[e("li",[r._v("通过 ApplicationContextAware 接口回调")]),r._v(" "),e("li",[r._v("通过 @Autowired 注入 ApplicationContext")])]),r._v(" "),e("h2",{attrs:{id:"依赖查找-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖查找-environment"}},[r._v("#")]),r._v(" 依赖查找 Environment")]),r._v(" "),e("p",[r._v("直接依赖查找")]),r._v(" "),e("ul",[e("li",[r._v("通过 org.springframework.context.ConfigurableApplicationContext#ENVIRONMENT_BEAN_NAME")])]),r._v(" "),e("p",[r._v("间接依赖查找")]),r._v(" "),e("ul",[e("li",[r._v("通过 org.springframework.context.ConfigurableApplicationContext#getEnvironment")])]),r._v(" "),e("h2",{attrs:{id:"依赖注入-value"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入-value"}},[r._v("#")]),r._v(" 依赖注入 @Value")]),r._v(" "),e("p",[r._v("通过注入 @Value")]),r._v(" "),e("p",[r._v("实现 - org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor")]),r._v(" "),e("h2",{attrs:{id:"spring-类型转换在-environment-中的运用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-类型转换在-environment-中的运用"}},[r._v("#")]),r._v(" Spring 类型转换在 Environment 中的运用")]),r._v(" "),e("p",[r._v("Environment 底层实现")]),r._v(" "),e("ul",[e("li",[r._v("底层实现 - org.springframework.core.env.PropertySourcesPropertyResolver")]),r._v(" "),e("li",[r._v("核心方法 - convertValueIfNecessary(Object,Class)")]),r._v(" "),e("li",[r._v("底层服务 - org.springframework.core.convert.ConversionService")]),r._v(" "),e("li",[r._v("默认实现 - org.springframework.core.convert.support.DefaultConversionService")])]),r._v(" "),e("h2",{attrs:{id:"spring-类型转换在-value-中的运用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-类型转换在-value-中的运用"}},[r._v("#")]),r._v(" Spring 类型转换在 @Value 中的运用")]),r._v(" "),e("p",[r._v("@Value 底层实现")]),r._v(" "),e("ul",[e("li",[r._v("底层实现 - org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor\n"),e("ul",[e("li",[r._v("org.springframework.beans.factory.support.DefaultListableBeanFactory#doResolveDependency")])])]),r._v(" "),e("li",[r._v("底层服务 - org.springframework.beans.TypeConverter\n"),e("ul",[e("li",[r._v("默认实现 - org.springframework.beans.TypeConverterDelegate\n"),e("ul",[e("li",[r._v("java.beans.PropertyEditor")]),r._v(" "),e("li",[r._v("org.springframework.core.convert.ConversionService")])])])])])]),r._v(" "),e("h2",{attrs:{id:"spring-配置属性源-propertysource"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-配置属性源-propertysource"}},[r._v("#")]),r._v(" Spring 配置属性源 PropertySource")]),r._v(" "),e("ul",[e("li",[r._v("API\n"),e("ul",[e("li",[r._v("单配置属性源 - org.springframework.core.env.PropertySource")]),r._v(" "),e("li",[r._v("多配置属性源 - org.springframework.core.env.PropertySources")])])]),r._v(" "),e("li",[r._v("注解\n"),e("ul",[e("li",[r._v("单配置属性源 - @org.springframework.context.annotation.PropertySource")]),r._v(" "),e("li",[r._v("多配置属性源 - @org.springframework.context.annotation.PropertySources")])])]),r._v(" "),e("li",[r._v("关联\n"),e("ul",[e("li",[r._v("存储对象 - org.springframework.core.env.MutablePropertySources")]),r._v(" "),e("li",[r._v("关联方法 - org.springframework.core.env.ConfigurableEnvironment#getPropertySources()")])])])]),r._v(" "),e("h2",{attrs:{id:"spring-內建的配置属性源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-內建的配置属性源"}},[r._v("#")]),r._v(" Spring 內建的配置属性源")]),r._v(" "),e("p",[r._v("內建 PropertySource")]),r._v(" "),e("table",[e("thead",[e("tr",[e("th",[r._v("PropertySource 类型")]),r._v(" "),e("th",[r._v("说明")])])]),r._v(" "),e("tbody",[e("tr",[e("td",[r._v("org.springframework.core.env.CommandLinePropertySource")]),r._v(" "),e("td",[r._v("命令行配置属性源")])]),r._v(" "),e("tr",[e("td",[r._v("org.springframework.jndi.JndiPropertySource")]),r._v(" "),e("td",[r._v("JDNI 配置属性源")])]),r._v(" "),e("tr",[e("td",[r._v("org.springframework.core.env.PropertiesPropertySource")]),r._v(" "),e("td",[r._v("Properties 配置属性源")])]),r._v(" "),e("tr",[e("td",[r._v("org.springframework.web.context.support.ServletConfigPropertySource")]),r._v(" "),e("td",[r._v("Servlet 配置属性源")])]),r._v(" "),e("tr",[e("td",[r._v("org.springframework.web.context.support.ServletContextPropertySource")]),r._v(" "),e("td",[r._v("ServletContext 配置属性源")])]),r._v(" "),e("tr",[e("td",[r._v("org.springframework.core.env.SystemEnvironmentPropertySource")]),r._v(" "),e("td",[r._v("环境变量配置属性源")])])])]),r._v(" "),e("h2",{attrs:{id:"基于注解扩展-spring-配置属性源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于注解扩展-spring-配置属性源"}},[r._v("#")]),r._v(" 基于注解扩展 Spring 配置属性源")]),r._v(" "),e("p",[r._v("@org.springframework.context.annotation.PropertySource 实现原理")]),r._v(" "),e("ul",[e("li",[r._v("入口 - org.springframework.context.annotation.ConfigurationClassParser#doProcessConfigurationClass\n"),e("ul",[e("li",[r._v("org.springframework.context.annotation.ConfigurationClassParser#processPropertySource")])])]),r._v(" "),e("li",[r._v("4.3 新增语义\n"),e("ul",[e("li",[r._v("配置属性字符编码 - encoding")]),r._v(" "),e("li",[r._v("org.springframework.core.io.support.PropertySourceFactory")])])]),r._v(" "),e("li",[r._v("适配对象 - org.springframework.core.env.CompositePropertySource")])]),r._v(" "),e("h2",{attrs:{id:"基于-api-扩展-spring-配置属性源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于-api-扩展-spring-配置属性源"}},[r._v("#")]),r._v(" 基于 API 扩展 Spring 配置属性源")]),r._v(" "),e("ul",[e("li",[r._v("Spring 应用上下文启动前装配 PropertySource")]),r._v(" "),e("li",[r._v("Spring 应用上下文启动后装配 PropertySource")])]),r._v(" "),e("h2",{attrs:{id:"问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[r._v("#")]),r._v(" 问题")]),r._v(" "),e("p",[r._v("简单介绍 Spring Environment 接口？")]),r._v(" "),e("ul",[e("li",[r._v("核心接口 - org.springframework.core.env.Environment")]),r._v(" "),e("li",[r._v("父接口 - org.springframework.core.env.PropertyResolver")]),r._v(" "),e("li",[r._v("可配置接口 - org.springframework.core.env.ConfigurableEnvironment")]),r._v(" "),e("li",[r._v("职责：\n"),e("ul",[e("li",[r._v("管理 Spring 配置属性源")]),r._v(" "),e("li",[r._v("管理 Profiles")])])])]),r._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[r._v("#")]),r._v(" 参考资料")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans",target:"_blank",rel:"noopener noreferrer"}},[r._v("Spring 官方文档之 Core Technologies"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://time.geekbang.org/course/intro/265",target:"_blank",rel:"noopener noreferrer"}},[r._v("《小马哥讲 Spring 核心编程思想》"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=t.exports}}]);