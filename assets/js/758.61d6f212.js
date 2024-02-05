(window.webpackJsonp=window.webpackJsonp||[]).push([[758],{1071:function(n,s,a){"use strict";a.r(s);var e=a(7),t=Object(e.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[s("strong",[n._v("如果你想查看更多 Mysql 常用函数及操作语法格式可以在以下文章找找哦")])]),n._v(" "),s("ul",[s("li",[s("p",[s("RouterLink",{attrs:{to:"/08.数据库/03.关系型数据库/02.Mysql/59.Mysql常用操作语句汇总.html"}},[n._v("Mysql常用操作语句汇总")])],1)]),n._v(" "),s("li",[s("p",[s("RouterLink",{attrs:{to:"/08.数据库/03.关系型数据库/02.Mysql/01.Mysql常用函数汇总.html"}},[n._v("Mysql常用函数的汇总")])],1)])]),n._v(" "),s("h2",{attrs:{id:"前置-sql-语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前置-sql-语句"}},[n._v("#")]),n._v(" 前置 sql 语句")]),n._v(" "),s("p",[n._v("用来创建表、插入数据")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("SET NAMES utf8mb4;\nSET FOREIGN_KEY_CHECKS = 0;\n\n-- ----------------------------\n-- Table structure for course\n-- ----------------------------\nDROP TABLE IF EXISTS `course`;\nCREATE TABLE `course`  (\n  `Cno` int(11) NOT NULL COMMENT '课程编号',\n  `Cname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '课程名称',\n  `Tno` int(11) NULL DEFAULT NULL COMMENT '老师编号',\n  PRIMARY KEY (`Cno`) USING BTREE\n) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;\n\n-- ----------------------------\n-- Records of course\n-- ----------------------------\nINSERT INTO `course` VALUES (1, '数学', 1);\nINSERT INTO `course` VALUES (2, '语文', 2);\nINSERT INTO `course` VALUES (3, '英文', 1);\n\n-- ----------------------------\n-- Table structure for sc\n-- ----------------------------\nDROP TABLE IF EXISTS `sc`;\nCREATE TABLE `sc`  (\n  `Sno` int(11) NOT NULL COMMENT '学号',\n  `Cno` int(11) NOT NULL COMMENT '课程编号',\n  `score` int(255) NULL DEFAULT NULL COMMENT '分数',\n  PRIMARY KEY (`Sno`, `Cno`) USING BTREE\n) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;\n\n-- ----------------------------\n-- Records of sc\n-- ----------------------------\nINSERT INTO `sc` VALUES (1, 1, 99);\nINSERT INTO `sc` VALUES (1, 2, 80);\nINSERT INTO `sc` VALUES (1, 3, 50);\nINSERT INTO `sc` VALUES (2, 1, 70);\nINSERT INTO `sc` VALUES (2, 2, 90);\nINSERT INTO `sc` VALUES (3, 1, 90);\nINSERT INTO `sc` VALUES (4, 1, 60);\nINSERT INTO `sc` VALUES (4, 2, 50);\nINSERT INTO `sc` VALUES (4, 3, 40);\n\n-- ----------------------------\n-- Table structure for student\n-- ----------------------------\nDROP TABLE IF EXISTS `student`;\nCREATE TABLE `student`  (\n  `Sno` int(255) NOT NULL COMMENT '学号',\n  `Sname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '姓名',\n  `Sage` int(255) NULL DEFAULT NULL COMMENT '年龄',\n  `Ssex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '性别',\n  PRIMARY KEY (`Sno`) USING BTREE\n) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;\n\n-- ----------------------------\n-- Records of student\n-- ----------------------------\nINSERT INTO `student` VALUES (1, '张三丰', 108, '男');\nINSERT INTO `student` VALUES (2, '李小龙', 20, '男');\nINSERT INTO `student` VALUES (3, '小龙女', 17, '女');\nINSERT INTO `student` VALUES (4, '白发魔女', 18, '女');\nINSERT INTO `student` VALUES (5, '韦小宝', 19, '男');\n\n-- ----------------------------\n-- Table structure for teacher\n-- ----------------------------\nDROP TABLE IF EXISTS `teacher`;\nCREATE TABLE `teacher`  (\n  `Tno` int(11) NOT NULL COMMENT '老师编号',\n  `Tname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '老师名称',\n  PRIMARY KEY (`Tno`) USING BTREE\n) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;\n\n-- ----------------------------\n-- Records of teacher\n-- ----------------------------\nINSERT INTO `teacher` VALUES (1, '无崖子');\nINSERT INTO `teacher` VALUES (2, '孤独求败');\nINSERT INTO `teacher` VALUES (3, '洪七公');\n\nSET FOREIGN_KEY_CHECKS = 1;\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br"),s("span",{staticClass:"line-number"},[n._v("60")]),s("br"),s("span",{staticClass:"line-number"},[n._v("61")]),s("br"),s("span",{staticClass:"line-number"},[n._v("62")]),s("br"),s("span",{staticClass:"line-number"},[n._v("63")]),s("br"),s("span",{staticClass:"line-number"},[n._v("64")]),s("br"),s("span",{staticClass:"line-number"},[n._v("65")]),s("br"),s("span",{staticClass:"line-number"},[n._v("66")]),s("br"),s("span",{staticClass:"line-number"},[n._v("67")]),s("br"),s("span",{staticClass:"line-number"},[n._v("68")]),s("br"),s("span",{staticClass:"line-number"},[n._v("69")]),s("br"),s("span",{staticClass:"line-number"},[n._v("70")]),s("br"),s("span",{staticClass:"line-number"},[n._v("71")]),s("br"),s("span",{staticClass:"line-number"},[n._v("72")]),s("br"),s("span",{staticClass:"line-number"},[n._v("73")]),s("br"),s("span",{staticClass:"line-number"},[n._v("74")]),s("br"),s("span",{staticClass:"line-number"},[n._v("75")]),s("br"),s("span",{staticClass:"line-number"},[n._v("76")]),s("br"),s("span",{staticClass:"line-number"},[n._v("77")]),s("br"),s("span",{staticClass:"line-number"},[n._v("78")]),s("br"),s("span",{staticClass:"line-number"},[n._v("79")]),s("br"),s("span",{staticClass:"line-number"},[n._v("80")]),s("br"),s("span",{staticClass:"line-number"},[n._v("81")]),s("br"),s("span",{staticClass:"line-number"},[n._v("82")]),s("br"),s("span",{staticClass:"line-number"},[n._v("83")]),s("br"),s("span",{staticClass:"line-number"},[n._v("84")]),s("br")])]),s("h2",{attrs:{id:"题目列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目列表"}},[n._v("#")]),n._v(" 题目列表")]),n._v(" "),s("p",[n._v("1、查询年龄小于18岁的学员信息")]),n._v(" "),s("p",[n._v("2、查询无崖子授课信息")]),n._v(" "),s("p",[n._v("3、查询没有参与任意课程的学生信息")]),n._v(" "),s("p",[n._v("4、查询无崖子每个授课课程的学员人数 统计 + 分组")]),n._v(" "),s("p",[n._v("5、查询张三丰数学成绩")]),n._v(" "),s("p",[n._v("6、查询出语文最高分【待完成】")]),n._v(" "),s("p",[n._v("7、查询没有参与语文考试的学生信息")]),n._v(" "),s("p",[n._v("8、查询语数外三门成绩的平均分")]),n._v(" "),s("p",[n._v("9、查询报名孤独求败老师课程的学生信息")]),n._v(" "),s("p",[n._v("10、没有报名孤独求败老师课程的学生信息")]),n._v(" "),s("h2",{attrs:{id:"答案列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#答案列表"}},[n._v("#")]),n._v(" 答案列表")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('#1 查询年龄小于18岁的学员信息  \nselect * from student where Sage<18;\n\n#2 查询无崖子授课信息\nselect * from teacher t join course c on c.Tno = t.Tno where t.Tname="无崖子";\n\n#3 查询没有参与任意课程的学生信息\nselect * from student s left join sc  on s.Sno = sc.Sno where sc.score is null;\n\n#4 查询无崖子每个授课课程的学员人数 统计 + 分组 \nselect t.Tname,c.Cname,count(1)  as "学员人数" from teacher t join course c on t.Tno = c.Tno join sc on sc.Cno = c.Cno group by sc.Cno HAVING t.Tname="无崖子";\n\n#5 查询张三丰数学成绩\nselect s.Sname,c.Cname,sc.score from  student s join sc on s.Sno = sc.Sno join course c on c.Cno = sc.Cno where s.Sname="张三丰" and c.Cname="数学";\n\n#6 查询出语文最高分【待完成】\nselect s.Sname,max(sc.score) as "分数" from sc join course c on sc.Cno = c.Cno join student s on s.Sno = sc.Sno where c.Cname="语文";\n\n#7 查询没有参与语文考试的学生信息\nselect * from student s join sc on sc.Sno = s.Sno right join course c on c.Cno = sc.Cno and c.Cname = "语文" and sc.score is null;\nselect * from course  c join sc on c.Cno = sc.Cno and c.Cname="语文" right join student s on s.Sno = sc.Sno where sc.score is null;\n\n#8 查询语数外三门成绩的平均分 \nselect c.Cname,avg(sc.score) from course c join sc on c.Cno = sc.Cno GROUP BY c.Cno;\n\n\n#9 查询报名孤独求败老师课程的学生信息\nselect * from student s join sc on sc.Sno = s.Sno join  course c on c.Cno= sc.Cno join teacher t on t.Tno = c.Tno where t.Tname="孤独求败" ;\nselect * from teacher t join course c on c.Tno = t.Tno and t.Tname = "孤独求败" join sc on c.Cno = sc.Cno right join student s on s.Sno = sc.Sno where sc.score is not null;\n\n#10 没有报名孤独求败老师课程的学生信息\nselect * from teacher t join course c on c.Tno = t.Tno and t.Tname = "孤独求败" join sc on c.Cno = sc.Cno right join student s on s.Sno = sc.Sno where sc.score is null;\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);