(window.webpackJsonp=window.webpackJsonp||[]).push([[510],{825:function(t,d,r){"use strict";r.r(d);var e=r(7),i=Object(e.a)({},(function(){var t=this,d=t._self._c;return d("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[d("h3",{attrs:{id:"一、fiddler是什么"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#一、fiddler是什么"}},[t._v("#")]),t._v(" 一、Fiddler是什么？")]),t._v(" "),d("p",[t._v("Fiddler是一个http协议调试代理工具，它能够记录客户端和服务器之间的所有 HTTP请求，可以针对特定的HTTP请求，分析请求数据、设置断点、调试web应用、修改请求的数据，甚至可以修改服务器返回的数据，功能非常强大，是web调试的利器。")]),t._v(" "),d("h3",{attrs:{id:"二、fiddler的主要功能"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#二、fiddler的主要功能"}},[t._v("#")]),t._v(" 二、Fiddler的主要功能")]),t._v(" "),d("ol",[d("li",[t._v("截获从浏览器或者客户端软件向服务器发送的http/https请求")]),t._v(" "),d("li",[t._v("修改客户端请求或服务端响应")]),t._v(" "),d("li",[t._v("创建自动响应规则")]),t._v(" "),d("li",[t._v("模拟弱网场景")]),t._v(" "),d("li",[t._v("提供第三方扩展插件，测试网站性能")])]),t._v(" "),d("h3",{attrs:{id:"三、fiddler工作原理"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#三、fiddler工作原理"}},[t._v("#")]),t._v(" 三、Fiddler工作原理")]),t._v(" "),d("p",[d("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/testing/1896875-20200101177656818-1128661097.png",alt:""}})]),t._v(" "),d("p",[t._v("Fiddler是以代理WEB服务器的形式工作的，浏览器/客户端与服务器之间通过建立TCP连接以HTTP协议进行通信，它使用代理地址:127.0.0.1，端口:8888")]),t._v(" "),d("p",[t._v("首先fiddler截获客户端浏览器发送给服务器的https请求， 此时还未建立握手。")]),t._v(" "),d("p",[t._v("第一步， fiddler向服务器发送请求进行握手， 获取到服务器的CA证书， 用根证书公钥进行解密， 验证服务器数据签名， 获取到服务器CA证书公钥。")]),t._v(" "),d("p",[t._v("第二步， fiddler伪造自己的CA证书， 冒充服务器证书传递给客户端浏览器， 客户端浏览器做跟fiddler一样的事。")]),t._v(" "),d("p",[t._v("第三步， 客户端浏览器生成https通信用的对称密钥， 用fiddler伪造的证书公钥加密后传递给服务器， 被fiddler截获。")]),t._v(" "),d("p",[t._v("第四步， fiddler将截获的密文用自己伪造证书的私钥解开， 获得https通信用的对称密钥。")]),t._v(" "),d("p",[t._v("第五步， fiddler将对称密钥用服务器证书公钥加密传递给服务器， 服务器用私钥解开后建立信任， 握手完成， 用对称密钥加密消息， 开始通信。")]),t._v(" "),d("p",[t._v("第六步， fiddler接收到服务器发送的密文， 用对称密钥解开， 获得服务器发送的明文。再次加密， 发送给客户端浏览器。")]),t._v(" "),d("p",[t._v("第七步， 客户端向服务器发送消息， 用对称密钥加密， 被fidller截获后， 解密获得明文。")]),t._v(" "),d("p",[t._v("由于fiddler一直拥有通信用对称密钥， 所以在整个https通信过程中信息对其透明。")])])}),[],!1,null,null,null);d.default=i.exports}}]);