(window.webpackJsonp=window.webpackJsonp||[]).push([[496],{812:function(v,_,t){"use strict";t.r(_);var a=t(7),s=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"测试基础-干货-有些-bug-跨年才有机会见"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#测试基础-干货-有些-bug-跨年才有机会见"}},[v._v("#")]),v._v(" 测试基础 干货！有些 bug，跨年才有机会见")]),v._v(" "),_("h2",{attrs:{id:"常见时间-case-与防护分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常见时间-case-与防护分析"}},[v._v("#")]),v._v(" 常见时间 case 与防护分析")]),v._v(" "),_("p",[v._v("话不多说，上干货！笔者经过长年累月的积累，针对常见的时间 case 已在本文中总结出六大类。")]),v._v(" "),_("h2",{attrs:{id:"第一类-时间转换类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第一类-时间转换类"}},[v._v("#")]),v._v(" 第一类：时间转换类")]),v._v(" "),_("p",[v._v("**模拟场景：**张三在北京时间 5 月 20 日零点使用 A 国跨境电商 APP，预备参加 520 情人节零点当天开启的限时优惠活动，下单礼物送给自己的女朋友，一顿操作下单成功预备获取返利时，发现订单截图中，下单时间并不是 5 月 20 日零点而是 5 月 19 日，男子难道穿越时空了？")]),v._v(" "),_("p",[v._v("**原因：**他当然没有穿越，这是一个典型的、比较容易发生在前端的计算显示错误。该跨境电商 app 的服务端接口计算、存储用的是 A 国地区时区的时间，前端展示未转换成男子所在地区时区时间展示导致。")]),v._v(" "),_("p",[_("strong",[v._v("防护手法：")])]),v._v(" "),_("ul",[_("li",[v._v("1、开发设计阶段常见防护思路：时间戳转换成年月日时间格式展示的时候前后端时区要保持一致，我们常用的时区是东八区（UTC+8），根据需要转换对应时区；年月日时分秒格式字符串转换成 time 格式用的方法如果是 time.Parse 默认用的是 UTC，跟北京时间相差八小时，所以一般使用 ParseInLocation 指定时区转换。")]),v._v(" "),_("li",[v._v("2、测试阶段固防思路：客户端/WEB 需要切换时区进行测试，判断最终时间实现逻辑是否符合产品需求。")])]),v._v(" "),_("h2",{attrs:{id:"第二类-夏令时类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第二类-夏令时类"}},[v._v("#")]),v._v(" 第二类：夏令时类")]),v._v(" "),_("p",[v._v("**模拟场景：**张三在某网站上输入自己出生年月想测算自己年龄星座运势等信息，发现输入1986年7月8日后计算的年龄永远大一小时，星座运势无法准确计算，张三兴奋不已，难道他是经历了未知时间虫洞的天选之子？")]),v._v(" "),_("p",[v._v("**原因：**张三真的想多了。这是计算错误，中国曾在 1986~1991 这 6 年间实施过夏令时，具体做法是每年从四月中旬第一个星期日的凌晨 2 时整（北京时间），将时钟拨快一小时，即将表针由 2 时拨至 3 时，夏令时开始；到九月中旬第一个星期日的凌晨 2 时整（北京夏令时间），再将时钟拨慢一小时，即将表针由 2 时拨至 1 时，夏令时结束。这样会导致夏令时开始日实际只有 23 小时，而夏令时结束日有 25 小时。而1986年5月04日至 9 月 14 日又属于夏令时的日期范围，解析日期的时候出现时间偏差值。")]),v._v(" "),_("p",[_("strong",[v._v("防护手法：")])]),v._v(" "),_("ul",[_("li",[v._v("1、开发设计阶段防护思路：夏令时日期范围有：1986年5月4日至 9 月 14 日（1986 年因是实行夏令时的第一年，从 5 月 4 日开始到 9 月 14 日结束）；1987年4月12日至 9 月 13 日；1988年4月10日至 9 月 11 日；1989年4月16日至 9 月 17 日；1990年4月15日至 9 月 16 日；1991年4月14日至 9 月 15 日。 当遇到这些特殊日期计算的时候需要注意计算时间段内有夏令时的时候，在夏令时日期的 0 点 0 分，采用夏令时，时间会调整为 1 点；在夏令时期间的时间应该为当时的时间减去一小时，将调快的一小时减回来。")]),v._v(" "),_("li",[v._v("2、测试阶段防护思路：校验点需要查看涉及夏令时日期的场景，格外注意下特殊场景（一天会出现 23 小时、25 小时场景）；")])]),v._v(" "),_("h2",{attrs:{id:"第三类-时间精度类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第三类-时间精度类"}},[v._v("#")]),v._v(" 第三类：时间精度类")]),v._v(" "),_("p",[v._v("**模拟场景：**张三在某视频 APP 上观看 1 分钟后点开观看记录发现刚才自己竟观看了 1 小时视频，时间怎么过的这么快？")]),v._v(" "),_("p",[v._v("**原因：**张三又一次想多了，服务端接口返回值里的时间数值精度为秒级，前端获取以后展示出来的接口的秒级时间数值，但是前端展示单位却固定写死的时间精度为小时，导致用户误解。")]),v._v(" "),_("p",[_("strong",[v._v("防护手法：")])]),v._v(" "),_("ul",[_("li",[v._v("1、开发设计阶段防护思路：在设计代码阶段注意时间精度的转换公式： Nanosecond Duration = 1 //纳秒 Microsecond = 1000 * Nanosecond //微秒 Millisecond = 1000 * Microsecond //毫秒 Second = 1000 * Millisecond //秒 Minute = 60 * Second //分 Hour = 60 * Minute //小时")]),v._v(" "),_("li",[v._v("2、测试阶段防护思路： 校验点 1：时间单位是否统一（s、ms、min、h、天）； 校验点 2：跨年、跨月、跨日的场景。")])]),v._v(" "),_("h2",{attrs:{id:"第四类-时间比较类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第四类-时间比较类"}},[v._v("#")]),v._v(" 第四类：时间比较类")]),v._v(" "),_("p",[v._v("**模拟场景：**老板打开 OA 系统查看昨日 15 点到今日 15 点的会议安排信息，发现展示为空，遂未做会议行程安排，导致错失百万合同，是秘书老张失职了吗？")]),v._v(" "),_("p",[v._v("**原因：**这个责任还是得 “程序错误” 来扛，在时间进行对比的时候需要统一时间基准点，如果没有基准点（比如例子中昨日 15 点是用北京时区时间，而近日 15 点是用美国时区时间）会导致无法进行正确的计算导致展示为空。")]),v._v(" "),_("p",[_("strong",[v._v("防护手法：")])]),v._v(" "),_("ul",[_("li",[v._v("1、开发设计阶段防护思路：跟时区无关，使用的比较函数中会统一时间基准点（compareTime.Before、compareTime.After），注意 24 小时内、跨年、跨月、跨日、跨天等等的时间。")]),v._v(" "),_("li",[v._v("2、测试阶段防护思路：校验点需要注意 24 小时内选择不同时间进行比较测试、跨年选择去年跟今年的时间进行比较测试、跨月选择上个月底跟本月初的时间进行比较测试、跨日选择昨日跟今日的时间进行比较测试的。")])]),v._v(" "),_("h2",{attrs:{id:"第五类-时间存储类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第五类-时间存储类"}},[v._v("#")]),v._v(" 第五类：时间存储类")]),v._v(" "),_("p",[v._v("**模拟场景：**2000 年跨晚期间众多平台发生 “千年虫” 事件，强如微软也遭遇了千年虫 2022 版：在 1 月 1 日 0 点 0 分期间的不少 Exchange 服务器的用户发现自己的祝福邮件没发出去，被留在了 2021 年。")]),v._v(" "),_("p",[v._v("**原因：**古早的千年虫问题产生的原因是由于在计算机软、硬件以及数字化程序控制芯片的各种设备和业务处理系统中，只使用了两位十进制数来表示年份，因此，当日期从1999年12月31日进入2000年1月1日后，系统将无法正常识别由 “00” 表示的 2000 年（计算机可能将这个年分识别为 1900 年〕这一具体年份，从而带来进行跨世纪的年份、日期处理时的计算错误，引发各种各样的计算机业务处理系统和控制系统的功能紊乱 [1]，之所以千年虫有 2022 版本是因为部分公司采用了一种名叫 “yymmddHHMM” 的有符号变量（Int32）来存储日期。但是，因为该变量最多只能存储-2,147,483,647 到 +2,147,483,647 的数据，而2022年1月1日午夜的新日期值为 2,201,010,001，超过了这个范围。")]),v._v(" "),_("p",[_("strong",[v._v("防护手法：")])]),v._v(" "),_("ul",[_("li",[v._v("1、开发设计阶段防护思路：以 mysql 数据库存储为例，mysql 存储时间通常用类型：a、timestamp 实际存储的是带时区的时间 b、datetime 存储的就是格式化后的字符串不携带时区信息 c、TIME 用于表示时分秒，如果实际应用值需要保存时分秒 就可以使用 TIME。有正负数，负数存储两个日期时间相减。")]),v._v(" "),_("li",[v._v("2、测试阶段防护思路：用例设计时需要根据需求选择合适的时间存储方式。")])]),v._v(" "),_("h2",{attrs:{id:"第六类-权限类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第六类-权限类"}},[v._v("#")]),v._v(" 第六类：权限类")]),v._v(" "),_("p",[v._v("**模拟场景：**张三在 23 年第一天进入公司打卡上班时发现，工牌无法被识别提示权限不足，该不会被 “原地被离职” 了吧？")]),v._v(" "),_("p",[v._v("**原因：**张三遇到了经典的时间权限类问题，整个系统的有效期被设置在2022年12月31日晚 23:59:59 秒结束。在打卡权限功能需要针对指定时间段授权，当设计时没有考虑授权时间有效期过期的情况时，就会出现该授权失败问题。")]),v._v(" "),_("p",[_("strong",[v._v("防护手法：")])]),v._v(" "),_("ul",[_("li",[v._v("1、开发设计阶段防护思路：设计时间权限功能需要注意考虑紧急 case，针对功能或用户个体开设黑白名单来应对。")]),v._v(" "),_("li",[v._v("2、测试阶段防护思路：注意时间跨度范围内跟范围外的用例设计。")]),v._v(" "),_("li",[v._v("3、运营阶段防护思路：增加权限监控和提醒机制，便于提早发现问题。")])])])}),[],!1,null,null,null);_.default=s.exports}}]);