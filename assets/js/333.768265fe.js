(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{649:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"centos7-安装-mysql-和-tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos7-安装-mysql-和-tomcat"}},[s._v("#")]),s._v(" CentOS7 安装 MySQL 和 Tomcat")]),s._v(" "),a("h2",{attrs:{id:"安装-mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-mysql"}},[s._v("#")]),s._v(" 安装 MySQL")]),s._v(" "),a("h2",{attrs:{id:"安装-yum-repo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-yum-repo"}},[s._v("#")]),s._v(" 安装 YUM Repo")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("//由于CentOS 的yum源中没有MySQL，需要到MySQL的官网下载yum repo配置文件。\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dev.mysql.com/get/mysql57-community-release-el7-9.noarch.rpm\n\n//repo的安装\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ivh")]),s._v(" mysql57-community-release-el7-9.noarch.rpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"安装-mysql-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-mysql-2"}},[s._v("#")]),s._v(" 安装 MySQL")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"启动-mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-mysql"}},[s._v("#")]),s._v(" 启动 MySQL")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl start  mysqld.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"查看-mysql-运行状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-mysql-运行状态"}},[s._v("#")]),s._v(" 查看 MySQL 运行状态")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl status mysqld.service\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl status mysqld.service")]),s._v("\n● mysqld.service - MySQL Server\nLoaded: loaded "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/usr/lib/systemd/system/mysqld.service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" enabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" vendor preset: disabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nActive: active "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Tue "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-08-27 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":53:58 CST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 17s ago\n    Docs: man:mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        http://dev.mysql.com/doc/refman/en/using-systemd.html\nProcess: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3827")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/sbin/mysqld "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--daemonize")]),s._v(" --pid-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/run/mysqld/mysqld.pid "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYSQLD_OPTS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("code"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exited, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/SUCCESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nProcess: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3744")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStartPre")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/mysqld_pre_systemd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("code"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exited, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/SUCCESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"获取-mysql-安装时的临时密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取-mysql-安装时的临时密码"}},[s._v("#")]),s._v(" 获取 MySQL 安装时的临时密码")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'temporary password'")]),s._v(" /var/log/mysqld.log\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# grep 'temporary password' /var/log/mysqld.log")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-08-27T10:53:51.774424Z "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Note"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" A temporary password is generated "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" root@localhost: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("aP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hPefJR84g\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"登录-mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录-mysql"}},[s._v("#")]),s._v(" 登录 MySQL")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" root "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("  //注意，按回车键后输入上述显示的临时密码，在密码输入时密码框不会发生任何变化，密码输入完成后点击回车，即可成功进入mysql\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql -u root -p")]),s._v("\nEnter password:\nWelcome to the MySQL monitor.  Commands end with "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" or "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("g.\nYour MySQL connection "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" is "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nServer version: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.7")]),s._v(".27\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"修改登录密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改登录密码"}},[s._v("#")]),s._v(" 修改登录密码")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysql安装进入后必须先修改密码，不修改密码进行任何操作都会报错Your password does not satisfy the current policy requirements\n刚开始设置的密码必须符合长度，且必须含有数字，小写或大写字母，特殊字符。\n如果你想要设置一个简单的测试密码的话，比如设置为123456，会提示这个错误，报错的意思就是你的密码不符合要求\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" alter user "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" identified by "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ERROR "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1819")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HY000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Your password does not satisfy the current policy requirements\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1. 修改validate_password_policy参数的值\n    mysql> set global validate_password_policy=0;\n          Query OK, 0 rows affected (0.00 sec)\n2.validate_password_length(密码长度)参数默认为8，修改为1\n    mysql> set global validate_password_length=1;\n           Query OK, 0 rows affected (0.00 sec)\n3.再次设置新的密码为简单密码即可成功\n    例如，设置为123456\n    mysql> alter user 'root'@'localhost' identified by '123456';\n           Query OK, 0 rows affected (0.00 sec)\n    //设置修改的密码永不过期\n    mysql> ALTER USER 'root'@'localhost' PASSWORD EXPIRE NEVER;\n           Query OK, 0 rows affected (0.00 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"mysql-开启关闭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-开启关闭"}},[s._v("#")]),s._v(" MySQL 开启关闭")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl stop mysqld #关闭MySQL\nsystemctl restart mysqld #重启MySQL\nsystemctl status mysqld #查看MySQL运行状态\nsystemctl enable mysqld #设置开机启动\nsystemctl disable mysqld #关闭开机启动\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"mysql-远程访问设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-远程访问设置"}},[s._v("#")]),s._v(" MySQL 远程访问设置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("grant all privileges on *.* to 'root' @'%' identified by 'root';\n\nflush privileges; //刷新内容\n\nmysql> grant all privileges on *.* to 'root' @'%' identified by 'root';\n        Query OK, 0 rows affected, 1 warning (0.00 sec)\n\nmysql> flush privileges;\n        Query OK, 0 rows affected (0.00 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"安装-tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-tomcat"}},[s._v("#")]),s._v(" 安装 Tomcat")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("// 安装tomcat\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum -y install tomcat")]),s._v("\nLoaded plugins: fastestmirror, langpacks\nLoading mirror speeds from cached hostfile\n* base: mirrors.huaweicloud.com\n* extras: mirrors.aliyun.com\n* updates: mirrors.aliyun.com\nResolving Dependencies\n--"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Running transaction check\n\n//检测tomcat是否安装成功\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rpm -q tomcat")]),s._v("\ntomcat-7.0.76-9.el7_6.noarch\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);