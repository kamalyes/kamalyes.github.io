(window.webpackJsonp=window.webpackJsonp||[]).push([[760],{1074:function(t,a,s){"use strict";s.r(a);var r=s(7),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql-应用指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-应用指南"}},[t._v("#")]),t._v(" Mysql 应用指南")]),t._v(" "),a("h2",{attrs:{id:"_1-sql-执行过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-sql-执行过程"}},[t._v("#")]),t._v(" 1. SQL 执行过程")]),t._v(" "),a("p",[t._v("学习 Mysql，最好是先从宏观上了解 Mysql 工作原理。")]),t._v(" "),a("blockquote",[a("p",[t._v("参考："),a("RouterLink",{attrs:{to:"/08.数据库/03.关系型数据库/02.Mysql/docs/sql/mysql/mysql-index.html"}},[t._v("Mysql 工作流")])],1)]),t._v(" "),a("h2",{attrs:{id:"_2-存储引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-存储引擎"}},[t._v("#")]),t._v(" 2. 存储引擎")]),t._v(" "),a("p",[t._v("在文件系统中，Mysql 将每个数据库（也可以成为 schema）保存为数据目录下的一个子目录。创建表示，Mysql 会在数据库子目录下创建一个和表同名的 "),a("code",[t._v(".frm")]),t._v(" 文件保存表的定义。因为 Mysql 使用文件系统的目录和文件来保存数据库和表的定义，大小写敏感性和具体平台密切相关。Windows 中大小写不敏感；类 Unix 中大小写敏感。"),a("strong",[t._v("不同的存储引擎保存数据和索引的方式是不同的，但表的定义则是在 Mysql 服务层统一处理的。")])]),t._v(" "),a("h3",{attrs:{id:"_2-1-选择存储引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-选择存储引擎"}},[t._v("#")]),t._v(" 2.1. 选择存储引擎")]),t._v(" "),a("h4",{attrs:{id:"mysql-内置的存储引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-内置的存储引擎"}},[t._v("#")]),t._v(" Mysql 内置的存储引擎")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" SHOW ENGINES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Engine             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Support "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Comment                                                        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Transactions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" XA   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Savepoints "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" FEDERATED          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Federated MySQL storage engine                                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NULL         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NULL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NULL       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" MEMORY             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Hash based, stored "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" memory, useful "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" temporary tables      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" InnoDB             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" DEFAULT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Supports transactions, row-level locking, and foreign keys     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" PERFORMANCE_SCHEMA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Performance Schema                                             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" MyISAM             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" MyISAM storage engine                                          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" MRG_MYISAM         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Collection of identical MyISAM tables                          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" BLACKHOLE          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" /dev/null storage engine "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("anything you "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),t._v(" to it disappears"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CSV                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CSV storage engine                                             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ARCHIVE            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Archive storage engine                                         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NO         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" rows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00")]),t._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("ul",[a("li",[a("strong",[t._v("InnoDB")]),t._v(" - Mysql 的默认事务型存储引擎，并且提供了行级锁和外键的约束。性能不错且支持自动崩溃恢复。")]),t._v(" "),a("li",[a("strong",[t._v("MyISAM")]),t._v(" - Mysql 5.1 版本前的默认存储引擎。特性丰富但不支持事务，也不支持行级锁和外键，也没有崩溃恢复功能。")]),t._v(" "),a("li",[a("strong",[t._v("CSV")]),t._v(" - 可以将 CSV 文件作为 Mysql 的表来处理，但这种表不支持索引。")]),t._v(" "),a("li",[a("strong",[t._v("Memory")]),t._v(" - 适合快速访问数据，且数据不会被修改，重启丢失也没有关系。")]),t._v(" "),a("li",[a("strong",[t._v("NDB")]),t._v(" - 用于 Mysql 集群场景。")])]),t._v(" "),a("h4",{attrs:{id:"如何选择合适的存储引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何选择合适的存储引擎"}},[t._v("#")]),t._v(" 如何选择合适的存储引擎")]),t._v(" "),a("p",[t._v("大多数情况下，InnoDB 都是正确的选择，除非需要用到 InnoDB 不具备的特性。")]),t._v(" "),a("p",[t._v("如果应用需要选择 InnoDB 以外的存储引擎，可以考虑以下因素：")]),t._v(" "),a("ul",[a("li",[t._v("事务：如果需要支持事务，InnoDB 是首选。如果不需要支持事务，且主要是 SELECT 和 INSERT 操作，MyISAM 是不错的选择。所以，如果 Mysql 部署方式为主备模式，并进行读写分离。那么可以这么做：主节点只支持写操作，默认引擎为 InnoDB；备节点只支持读操作，默认引擎为 MyISAM。")]),t._v(" "),a("li",[t._v("并发：MyISAM 只支持表级锁，而 InnoDB 还支持行级锁。所以，InnoDB 并发性能更高。")]),t._v(" "),a("li",[t._v("外键：InnoDB 支持外键。")]),t._v(" "),a("li",[t._v("备份：InnoDB 支持在线热备份。")]),t._v(" "),a("li",[t._v("崩溃恢复：MyISAM 崩溃后发生损坏的概率比 InnoDB 高很多，而且恢复的速度也更慢。")]),t._v(" "),a("li",[t._v("其它特性：MyISAM 支持压缩表和空间数据索引。")])]),t._v(" "),a("h4",{attrs:{id:"转换表的存储引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转换表的存储引擎"}},[t._v("#")]),t._v(" 转换表的存储引擎")]),t._v(" "),a("p",[t._v("下面的语句可以将 mytable 表的引擎修改为 InnoDB")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" mytable "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-2-myisam"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-myisam"}},[t._v("#")]),t._v(" 2.2. MyISAM")]),t._v(" "),a("p",[t._v("MyISAM 设计简单，数据以紧密格式存储。对于只读数据，或者表比较小、可以容忍修复操作，则依然可以使用 MyISAM。")]),t._v(" "),a("p",[t._v("MyISAM 引擎使用 B+Tree 作为索引结构，"),a("strong",[t._v("叶节点的 data 域存放的是数据记录的地址")]),t._v("。")]),t._v(" "),a("p",[t._v("MyISAM 提供了大量的特性，包括：全文索引、压缩表、空间函数等。但是，MyISAM 不支持事务和行级锁。并且 MyISAM 不支持崩溃后的安全恢复。")]),t._v(" "),a("h3",{attrs:{id:"_2-3-innodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-innodb"}},[t._v("#")]),t._v(" 2.3. InnoDB")]),t._v(" "),a("p",[t._v("InnoDB 是 MySQL 默认的事务型存储引擎，只有在需要 InnoDB 不支持的特性时，才考虑使用其它存储引擎。")]),t._v(" "),a("p",[t._v("然 InnoDB 也使用 B+Tree 作为索引结构，但具体实现方式却与 MyISAM 截然不同。MyISAM 索引文件和数据文件是分离的，索引文件仅保存数据记录的地址。而"),a("strong",[t._v("在 InnoDB 中，表数据文件本身就是按 B+Tree 组织的一个索引结构")]),t._v("，这棵树的叶节点 data 域保存了完整的数据记录。这个"),a("strong",[t._v("索引的 key 是数据表的主键")]),t._v("，因此"),a("strong",[t._v("InnoDB 表数据文件本身就是主索引")]),t._v("。")]),t._v(" "),a("p",[t._v("InnoDB 采用 MVCC 来支持高并发，并且实现了四个标准的隔离级别。其默认级别是可重复读（REPEATABLE READ），并且通过间隙锁（next-key locking）防止幻读。")]),t._v(" "),a("p",[t._v("InnoDB 是基于聚簇索引建立的，与其他存储引擎有很大不同。在索引中保存了数据，从而避免直接读取磁盘，因此对查询性能有很大的提升。")]),t._v(" "),a("p",[t._v("内部做了很多优化，包括从磁盘读取数据时采用的可预测性读、能够加快读操作并且自动创建的自适应哈希索引、能够加速插入操作的插入缓冲区等。")]),t._v(" "),a("p",[t._v("支持真正的在线热备份。其它存储引擎不支持在线热备份，要获取一致性视图需要停止对所有表的写入，而在读写混合场景中，停止写入可能也意味着停止读取。")]),t._v(" "),a("h2",{attrs:{id:"_3-数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据类型"}},[t._v("#")]),t._v(" 3. 数据类型")]),t._v(" "),a("h3",{attrs:{id:"_3-1-整型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-整型"}},[t._v("#")]),t._v(" 3.1. 整型")]),t._v(" "),a("p",[a("code",[t._v("TINYINT")]),t._v(", "),a("code",[t._v("SMALLINT")]),t._v(", "),a("code",[t._v("MEDIUMINT")]),t._v(", "),a("code",[t._v("INT")]),t._v(", "),a("code",[t._v("BIGINT")]),t._v(" 分别使用 "),a("code",[t._v("8")]),t._v(", "),a("code",[t._v("16")]),t._v(", "),a("code",[t._v("24")]),t._v(", "),a("code",[t._v("32")]),t._v(", "),a("code",[t._v("64")]),t._v(" 位存储空间，一般情况下越小的列越好。")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("UNSIGNED")]),t._v(" 表示不允许负值，大致可以使正数的上限提高一倍")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("INT(11)")]),t._v(" 中的数字只是规定了交互工具显示字符的个数，对于存储和计算来说是没有意义的。")]),t._v(" "),a("h3",{attrs:{id:"_3-2-浮点型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-浮点型"}},[t._v("#")]),t._v(" 3.2. 浮点型")]),t._v(" "),a("p",[a("code",[t._v("FLOAT")]),t._v(" 和 "),a("code",[t._v("DOUBLE")]),t._v(" 为浮点类型。")]),t._v(" "),a("p",[a("code",[t._v("DECIMAL")]),t._v(" 类型主要用于精确计算，代价较高，应该尽量只在对小数进行精确计算时才使用 "),a("code",[t._v("DECIMAL")]),t._v(" ——例如存储财务数据。数据量比较大的时候，可以使用 "),a("code",[t._v("BIGINT")]),t._v(" 代替 "),a("code",[t._v("DECIMAL")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("FLOAT")]),t._v("、"),a("code",[t._v("DOUBLE")]),t._v(" 和 "),a("code",[t._v("DECIMAL")]),t._v(" 都可以指定列宽，例如 "),a("code",[t._v("DECIMAL(18, 9)")]),t._v(" 表示总共 18 位，取 9 位存储小数部分，剩下 9 位存储整数部分。")]),t._v(" "),a("h3",{attrs:{id:"_3-3-字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-字符串"}},[t._v("#")]),t._v(" 3.3. 字符串")]),t._v(" "),a("p",[t._v("主要有 "),a("code",[t._v("CHAR")]),t._v(" 和 "),a("code",[t._v("VARCHAR")]),t._v(" 两种类型，一种是定长的，一种是变长的。")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("VARCHAR")]),t._v(" 这种变长类型能够节省空间，因为只需要存储必要的内容。但是在执行 UPDATE 时可能会使行变得比原来长")]),t._v("。当超出一个页所能容纳的大小时，就要执行额外的操作。MyISAM 会将行拆成不同的片段存储，而 InnoDB 则需要分裂页来使行放进页内。")]),t._v(" "),a("p",[a("code",[t._v("VARCHAR")]),t._v(" 会保留字符串末尾的空格，而 "),a("code",[t._v("CHAR")]),t._v(" 会删除。")]),t._v(" "),a("h3",{attrs:{id:"_3-4-时间和日期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-时间和日期"}},[t._v("#")]),t._v(" 3.4. 时间和日期")]),t._v(" "),a("p",[t._v("MySQL 提供了两种相似的日期时间类型："),a("code",[t._v("DATATIME")]),t._v(" 和 "),a("code",[t._v("TIMESTAMP")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"datatime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datatime"}},[t._v("#")]),t._v(" DATATIME")]),t._v(" "),a("p",[t._v("能够保存从 1001 年到 9999 年的日期和时间，精度为秒，使用 8 字节的存储空间。")]),t._v(" "),a("p",[t._v("它与时区无关。")]),t._v(" "),a("p",[t._v("默认情况下，MySQL 以一种可排序的、无歧义的格式显示 DATATIME 值，例如“2008-01-16 22:37:08”，这是 ANSI 标准定义的日期和时间表示方法。")]),t._v(" "),a("h4",{attrs:{id:"timestamp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timestamp"}},[t._v("#")]),t._v(" TIMESTAMP")]),t._v(" "),a("p",[t._v("和 UNIX 时间戳相同，保存从 1970 年 1 月 1 日午夜（格林威治时间）以来的秒数，使用 4 个字节，只能表示从 1970 年 到 2038 年。")]),t._v(" "),a("p",[t._v("它和时区有关，也就是说一个时间戳在不同的时区所代表的具体时间是不同的。")]),t._v(" "),a("p",[t._v("MySQL 提供了 FROM_UNIXTIME() 函数把 UNIX 时间戳转换为日期，并提供了 UNIX_TIMESTAMP() 函数把日期转换为 UNIX 时间戳。")]),t._v(" "),a("p",[t._v("默认情况下，如果插入时没有指定 TIMESTAMP 列的值，会将这个值设置为当前时间。")]),t._v(" "),a("p",[t._v("应该尽量使用 TIMESTAMP，因为它比 DATETIME 空间效率更高。")]),t._v(" "),a("h3",{attrs:{id:"_3-5-blob-和-text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-blob-和-text"}},[t._v("#")]),t._v(" 3.5. BLOB 和 TEXT")]),t._v(" "),a("p",[a("code",[t._v("BLOB")]),t._v(" 和 "),a("code",[t._v("TEXT")]),t._v(" 都是为了存储大的数据而设计，前者存储二进制数据，后者存储字符串数据。")]),t._v(" "),a("p",[t._v("不能对 "),a("code",[t._v("BLOB")]),t._v(" 和 "),a("code",[t._v("TEXT")]),t._v(" 类型的全部内容进行排序、索引。")]),t._v(" "),a("h3",{attrs:{id:"_3-6-枚举类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-枚举类型"}},[t._v("#")]),t._v(" 3.6. 枚举类型")]),t._v(" "),a("p",[t._v("大多数情况下没有使用枚举类型的必要，其中一个缺点是：枚举的字符串列表是固定的，添加和删除字符串（枚举选项）必须使用"),a("code",[t._v("ALTER TABLE")]),t._v("（如果只只是在列表末尾追加元素，不需要重建表）。")]),t._v(" "),a("h3",{attrs:{id:"_3-7-类型的选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-类型的选择"}},[t._v("#")]),t._v(" 3.7. 类型的选择")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("整数类型通常是标识列最好的选择，因为它们很快并且可以使用 "),a("code",[t._v("AUTO_INCREMENT")]),t._v("。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("ENUM")]),t._v(" 和 "),a("code",[t._v("SET")]),t._v(" 类型通常是一个糟糕的选择，应尽量避免。")])]),t._v(" "),a("li",[a("p",[t._v("应该尽量避免用字符串类型作为标识列，因为它们很消耗空间，并且通常比数字类型慢。对于 "),a("code",[t._v("MD5")]),t._v("、"),a("code",[t._v("SHA")]),t._v("、"),a("code",[t._v("UUID")]),t._v(" 这类随机字符串，由于比较随机，所以可能分布在很大的空间内，导致 "),a("code",[t._v("INSERT")]),t._v(" 以及一些 "),a("code",[t._v("SELECT")]),t._v(" 语句变得很慢。")]),t._v(" "),a("ul",[a("li",[t._v("如果存储 UUID ，应该移除 "),a("code",[t._v("-")]),t._v(" 符号；更好的做法是，用 "),a("code",[t._v("UNHEX()")]),t._v(" 函数转换 UUID 值为 16 字节的数字，并存储在一个 "),a("code",[t._v("BINARY(16)")]),t._v(" 的列中，检索时，可以通过 "),a("code",[t._v("HEX()")]),t._v(" 函数来格式化为 16 进制格式。")])])])]),t._v(" "),a("h2",{attrs:{id:"_4-索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-索引"}},[t._v("#")]),t._v(" 4. 索引")]),t._v(" "),a("blockquote",[a("p",[t._v("详见："),a("RouterLink",{attrs:{to:"/08.数据库/03.关系型数据库/02.Mysql/05.Mysql索引.html"}},[t._v("Mysql 索引")])],1)]),t._v(" "),a("h2",{attrs:{id:"_5-锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-锁"}},[t._v("#")]),t._v(" 5. 锁")]),t._v(" "),a("blockquote",[a("p",[t._v("详见："),a("RouterLink",{attrs:{to:"/08.数据库/03.关系型数据库/02.Mysql/04.Mysql锁.html"}},[t._v("Mysql 锁")])],1)]),t._v(" "),a("h2",{attrs:{id:"_6-事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-事务"}},[t._v("#")]),t._v(" 6. 事务")]),t._v(" "),a("blockquote",[a("p",[t._v("详见："),a("RouterLink",{attrs:{to:"/08.数据库/03.关系型数据库/02.Mysql/03.Mysql事务.html"}},[t._v("Mysql 事务")])],1)]),t._v(" "),a("h2",{attrs:{id:"_7-性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-性能优化"}},[t._v("#")]),t._v(" 7. 性能优化")]),t._v(" "),a("blockquote",[a("p",[t._v("详见："),a("RouterLink",{attrs:{to:"/08.数据库/03.关系型数据库/02.Mysql/06.Mysql性能优化.html"}},[t._v("Mysql 性能优化")])],1)]),t._v(" "),a("h2",{attrs:{id:"_8-复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-复制"}},[t._v("#")]),t._v(" 8. 复制")]),t._v(" "),a("h3",{attrs:{id:"_8-1-主从复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-主从复制"}},[t._v("#")]),t._v(" 8.1. 主从复制")]),t._v(" "),a("p",[t._v("Mysql 支持两种复制：基于行的复制和基于语句的复制。")]),t._v(" "),a("p",[t._v("这两种方式都是在主库上记录二进制日志，然后在从库重放日志的方式来实现异步的数据复制。这意味着：复制过程存在时延，这段时间内，主从数据可能不一致。")]),t._v(" "),a("p",[t._v("主要涉及三个线程：binlog 线程、I/O 线程和 SQL 线程。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("binlog 线程")]),t._v(" ：负责将主服务器上的数据更改写入二进制文件（binlog）中。")]),t._v(" "),a("li",[a("strong",[t._v("I/O 线程")]),t._v(" ：负责从主服务器上读取二进制日志文件，并写入从服务器的中继日志中。")]),t._v(" "),a("li",[a("strong",[t._v("SQL 线程")]),t._v(" ：负责读取中继日志并重放其中的 SQL 语句。")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/database/mysql/master-slave.png"}})]),t._v(" "),a("h3",{attrs:{id:"_8-2-读写分离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-读写分离"}},[t._v("#")]),t._v(" 8.2. 读写分离")]),t._v(" "),a("p",[t._v("主服务器用来处理写操作以及实时性要求比较高的读操作，而从服务器用来处理读操作。")]),t._v(" "),a("p",[t._v("读写分离常用代理方式来实现，代理服务器接收应用层传来的读写请求，然后决定转发到哪个服务器。")]),t._v(" "),a("p",[t._v("MySQL 读写分离能提高性能的原因在于：")]),t._v(" "),a("ul",[a("li",[t._v("主从服务器负责各自的读和写，极大程度缓解了锁的争用；")]),t._v(" "),a("li",[t._v("从服务器可以配置 MyISAM 引擎，提升查询性能以及节约系统开销；")]),t._v(" "),a("li",[t._v("增加冗余，提高可用性。")])]),t._v(" "),a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/database/mysql/master-slave-proxy.png"}})])]),t._v(" "),a("p",[t._v("（分割线）以下为高级特性，也是关系型数据库通用方案")]),t._v(" "),a("h2",{attrs:{id:"_9-分布式事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-分布式事务"}},[t._v("#")]),t._v(" 9. 分布式事务")]),t._v(" "),a("blockquote",[a("p",[t._v("参考："),a("a",{attrs:{href:"https://yuyanqing.cn/pages/e1881c/",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式事务基本原理"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"_10-分库分表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-分库分表"}},[t._v("#")]),t._v(" 10. 分库分表")]),t._v(" "),a("blockquote",[a("p",[t._v("参考："),a("a",{attrs:{href:"https://yuyanqing.cn/pages/e1046e/",target:"_blank",rel:"noopener noreferrer"}},[t._v("分库分表基本原理"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"_11-参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-参考资料"}},[t._v("#")]),t._v(" 11. 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《高性能 MySQL》"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jfox.info/20-tiao-mysql-xing-nen-you-hua-de-zui-jia-jing-yan.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("20+ 条 MySQL 性能优化的最佳经验"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/788829/how-to-create-unique-row-id-in-sharded-databases",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to create unique row ID in sharded databases?"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://geekswithblogs.net/shaunxu/archive/2012/01/07/sql-azure-federation-ndash-introduction.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQL Azure Federation – Introduction"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);