(window.webpackJsonp=window.webpackJsonp||[]).push([[501],{816:function(v,_,t){"use strict";t.r(_);var a=t(7),r=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"测试计划的好处"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#测试计划的好处"}},[v._v("#")]),v._v(" 测试计划的好处")]),v._v(" "),_("ul",[_("li",[v._v("知道确切的测试范围，采取怎么样的测试策略")]),v._v(" "),_("li",[v._v("预估具体的工作量和测试资源，每个人分工明确，不容易出现重复测试的情况")]),v._v(" "),_("li",[v._v("测试进度是可控的，实时知道目前测试完成情况")]),v._v(" "),_("li",[v._v("可以提前识别潜在风险，当需求发生变化时，我们需要做出响应")])]),v._v(" "),_("h1",{attrs:{id:"测试计划"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#测试计划"}},[v._v("#")]),v._v(" 测试计划")]),v._v(" "),_("h2",{attrs:{id:"测试范围"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#测试范围"}},[v._v("#")]),v._v(" 测试范围")]),v._v(" "),_("p",[_("strong",[v._v("包含：")]),v._v(" 被测对象，主要的测试内容")]),v._v(" "),_("p",[v._v("确定测试范围一般在测试需求分析完成后进行，所以确定测试范围的过程在一定程度上也是对测试需求分析的进一步检验，有助于在早期阶段发现潜在的测试遗漏；")]),v._v(" "),_("p",[v._v("由于测试时间和成本有限，必须进行针对性的测试，因此测试范围中要明确 测什么 和 不测什么 。")]),v._v(" "),_("h2",{attrs:{id:"测试策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#测试策略"}},[v._v("#")]),v._v(" 测试策略")]),v._v(" "),_("p",[v._v("测试策略就是要明确 先测什么后测什么 和 如何来测 ，明确测试的重点，以及各项测试的先后顺序；")]),v._v(" "),_("p",[v._v("**比如：**对 用户登录模块 来讲，“用户无法正常登录”和“用户无法重置密码”这两个潜在问题重要性并不高，所以应该按优先级来先测“用户正常登录”")]),v._v(" "),_("p",[v._v("测试策略还要说明，采用什么样的 测试类型 和 测试方法 ，不仅要给出为什么要选用这个测试类型，还要详细说明具体的实施方法。")]),v._v(" "),_("h3",{attrs:{id:"第一-功能测试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第一-功能测试"}},[v._v("#")]),v._v(" 第一：功能测试")]),v._v(" "),_("ul",[_("li",[v._v("对于功能测试，应该根据测试需求分析的思维导图来设计测试用例")]),v._v(" "),_("li",[v._v("另外，还要评估被测软件的可测性，如果有可测性的问题，需要提前考虑切实可行的变通方案，要求开发人员提供可测性的接口")])]),v._v(" "),_("h3",{attrs:{id:"第二-兼容性测试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第二-兼容性测试"}},[v._v("#")]),v._v(" 第二：兼容性测试")]),v._v(" "),_("ul",[_("li",[v._v("Web 测试需要确定覆盖的浏览器类型和版本，移动设备测试需要确定覆盖的设备类型和具体 iOS/Android 的版本")]),v._v(" "),_("li",[v._v("兼容性测试的实施，往往是在功能测试的后期，也就是说需要等功能基本都稳定了，才会开始兼容性测试")]),v._v(" "),_("li",[v._v("当前端引入新的前端框架或者组件库时，往往会在前期做兼容性评估，确保不会引入后期无法解决的兼容性问题")])]),v._v(" "),_("h3",{attrs:{id:"第三-性能测试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第三-性能测试"}},[v._v("#")]),v._v(" 第三：性能测试")]),v._v(" "),_("p",[v._v("前期，明确性能需求（ 并发用户数 、 响应时间 、 事务吞吐量 ），结合被测系统的特点，设计性能测试场景并确定性能测试框架")]),v._v(" "),_("p",[_("strong",[v._v("比如：")])]),v._v(" "),_("ul",[_("li",[v._v("是直接在API级别发起压力测试，还是必须模拟终端用户行为进行基于协议的压力测试；")]),v._v(" "),_("li",[v._v("是基于模块进行压力测试，还是发起全链路压测")])]),v._v(" "),_("p",[v._v("如果性能是背景数据敏感的场景，还需要确定背景数据量级与分布，并决定产生背景数据的技术方案，"),_("strong",[v._v("比如")]),v._v("是通过 API 并发调用来产生测试数据，还是直接在数据库上做批量 insert 和 update 操作，或者是两种方式的结合。")]),v._v(" "),_("p",[v._v("最后，无论采用哪种方式，都需要明确待开发的单用户脚本的数量，以便后续能够顺利组装压测测试场景。")]),v._v(" "),_("p",[_("strong",[v._v("关于性能测试的实施")]),v._v("，首先，需要根据你想要解决的问题，确定性能测试的类型，然后，根据具体的性能测下类型开展测试。")]),v._v(" "),_("h3",{attrs:{id:"性能测试实施相关"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#性能测试实施相关"}},[v._v("#")]),v._v(" "),_("strong",[v._v("性能测试实施相关")])]),v._v(" "),_("ol",[_("li",[v._v("性能测试的实施，往往先要根据业务场景来决定需要开发哪些单用户脚本，脚本的开发会涉及到很多性能测试脚本特有的概念，"),_("strong",[v._v("比如")]),v._v("思考时间、集合点、动态关联等等。")]),v._v(" "),_("li",[v._v("脚本开发完成后，你还要以脚本为单位组织测试场景（Scenario），场景定义简单来说就是百分之多少的用户在做登录、百分之多少的用户在做查询、每个用户的操作步骤之间需要等待多少时间、并发用户的增速是 5 秒一个，还是 5 秒 2 个等等。")]),v._v(" "),_("li",[v._v("最后，才是具体的测试场景执行。和自动化功能测试不同，性能测试执行完成后"),_("strong",[v._v("性能测试报告的解读")]),v._v("，是整个测试过程中最关键的点。")])]),v._v(" "),_("p",[_("strong",[v._v("还有很多测试类型")])]),v._v(" "),_("p",[_("strong",[v._v("比如：")]),v._v(" 接口测试、集成测试、安全测试、容量验证、安装测试、故障恢复测试")]),v._v(" "),_("h2",{attrs:{id:"测试资源"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#测试资源"}},[v._v("#")]),v._v(" 测试资源")]),v._v(" "),_("p",[_("strong",[v._v("包含：")]),v._v(" 测试人员和测试环境")]),v._v(" "),_("p",[v._v("测试资源需要明确 谁来测 和 在哪里测")]),v._v(" "),_("h2",{attrs:{id:"测试进度"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#测试进度"}},[v._v("#")]),v._v(" 测试进度")]),v._v(" "),_("p",[_("strong",[v._v("主要描述：")]),v._v(" 各类测试的开始时间，所需工作量，预计完成时间，并以此为依据来建议最终产品的上线发布时间")]),v._v(" "),_("p",[v._v("在传统瀑布模型中：测试进度完全依赖于开发完成并递交测试版本的时间。如果开发提交测试版本发生了延误，那么在不裁剪测试需求的情况下，产品整体的上线时间就同样会延期。")]),v._v(" "),_("p",[v._v("然而在敏捷模式中：测试活动贯穿于整个开发过程，很多测试工作会和开发工作同步进行，比如采用行为驱动开发（Behavior-Driven Development）模式，这样测试进度就不会完全依赖于开发递交可测试版本的时间。")]),v._v(" "),_("p",[v._v("行为驱动开发：就是平时我们经常说的 BDD，指的是可以通过自然语言书写非程序员可读的测试用例")]),v._v(" "),_("h2",{attrs:{id:"测试风险预估"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#测试风险预估"}},[v._v("#")]),v._v(" 测试风险预估")]),v._v(" "),_("p",[v._v("对于需求变更，如增加需求、删减需求、修改需求，一定要重新进行测试需求分析，确定变更后的测试范围和资源评估，并与项目经理和产品经理及时沟通因此引起的测试进度变化")]),v._v(" "),_("p",[_("strong",[v._v("测试过程中，可能会发生以下情况")])]),v._v(" "),_("ol",[_("li",[v._v("测试工作量评估不准确")]),v._v(" "),_("li",[v._v("需要增加额外的测试类型")]),v._v(" "),_("li",[v._v("修复某些严重缺陷，导致需要全量回归")]),v._v(" "),_("li",[v._v("送测延期")]),v._v(" "),_("li",[v._v("人员变动")])]),v._v(" "),_("p",[v._v("所以，在制定测试计划时，就要预估整个测试过程中可能存在的潜在风险，以及风险发生时的应对策略。")])])}),[],!1,null,null,null);_.default=r.exports}}]);