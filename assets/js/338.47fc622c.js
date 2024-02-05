(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{653:function(s,a,n){"use strict";n.r(a);var t=n(7),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker-容器数据卷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-容器数据卷"}},[s._v("#")]),s._v(" Docker 容器数据卷")]),s._v(" "),a("h2",{attrs:{id:"_1-引入原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-引入原因"}},[s._v("#")]),s._v(" 1.引入原因")]),s._v(" "),a("p",[s._v("Docker 容器产生的数据，如果不通过 docker commit 生成新的镜像，使得数据作为镜像的一部分保存下来，那么当容器删除后，数据自然也就没有了。")]),s._v(" "),a("p",[s._v("将运用与运行的环境打包形成容器运行，运行可以伴随着容器，但是我们对数据的要求希望是持久化的。")]),s._v(" "),a("p",[s._v("容器之间希望有可能共享数据。")]),s._v(" "),a("p",[s._v("为了能保存数据在 docker 中使用卷。")]),s._v(" "),a("h2",{attrs:{id:"_2-卷的目的及其特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-卷的目的及其特点"}},[s._v("#")]),s._v(" 2.卷的目的及其特点")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("卷就是目录或者文件，存在于一个或多个容器中，由docker挂载到容器，但是不属于联合文件系统，因此能够绕过 Union File Ssystem 提供一些用于持续存储或共享数据的特性。\n卷的设计目的就是为了数据的持久化，完全独立于容器的生存周期，因此Docker不会再容器删除时删除其挂载的数据卷。\n\n特点：\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".数据卷可在容器之间共享或重用数据。\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".卷中的更改可以直接生效。\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".数据卷的更改不会包含在镜像的更新中。\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".数据卷的生命周期一直持续到没有容器使用它为止。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_3-作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-作用"}},[s._v("#")]),s._v(" 3.作用")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：容器的持久化\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：容器间继承+共享数据\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_4-容器内添加数据卷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-容器内添加数据卷"}},[s._v("#")]),s._v(" 4.容器内添加数据卷")]),s._v(" "),a("h3",{attrs:{id:"方式一-直接命令添加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式一-直接命令添加"}},[s._v("#")]),s._v(" 方式一：直接命令添加")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("//命令\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /宿主机绝对路径目录:/容器内目录 镜像名\n例如：\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /myDataVolume:/dataVolumeContainer 镜像名\n//查看数据卷是否挂载成功\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" inspect 308d75b6301\n//容器和宿主机之间数据共享\n//容器停止退出后，主机修改后数据是否同步\n    完全同步\n//命令"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("带权限"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，容器内的目录只读\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /宿主机绝对路径目录:/容器内目录:ro 镜像名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"方式二-dockerfile-添加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式二-dockerfile-添加"}},[s._v("#")]),s._v(" 方式二：DockerFile 添加")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("//根目录下新建mydocker文件夹进入\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /mydocker\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /mydocker\n\n//可在DockerFile中使用VOLUME指令来给镜像添加一个或多个数据卷\n//VOLUME指令：\nVOLUME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dataVolumeContainer"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dataVolumeContainer2"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dataVolumeContainer3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n处于可移植性和分享的考虑，用-v主机目录:容器目录这种方法不能够直接在Dockerfile中实现\n由于宿主机目录是依赖于特定宿主机的，并不能够保证在所有的宿主机上都存在这样的特定目录\n\n//File构建\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" Dockerfile\n//输入的示例脚本内容为：\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# volume test")]),s._v("\nFROM centos\nVOLUME "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dataVolumeContainer1"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dataVolumeContainer2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nCMD "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"finished,--------success1"')]),s._v("\nCMD /bin/bash\n\n//build后生成镜像\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /mydocker/Dockerfile  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" gg/centos "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n//执行成功后会出现Successfully built xxxx  ，执行 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images 会出现自己刚才生成的镜像 gg/centos\n\n//run容器\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" gg/centos\n\n//主机对应默认地址\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"volume"')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"e640ae814d532dc7d59dd77c4207290daf78d3cf8af58df7980bbbb159854f5f"')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Source"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/docker/volumes/e640ae814d532dc7d59dd77c4207290daf78d3cf8af58df7980bbbb159854f5f/_data"')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Destination"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dataVolumeContainer1"')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Driver"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local"')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mode"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"RW"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Propagation"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n/var/lib/docker/volumes/e640ae814d532dc7d59dd77c4207290daf78d3cf8af58df7980bbbb159854f5f/_data\n//此地址即为默认的地址，在此地址内进行相应的操作，也可以实现文件共享。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br")])]),a("h2",{attrs:{id:"_5-数据卷容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-数据卷容器"}},[s._v("#")]),s._v(" 5.数据卷容器")]),s._v(" "),a("p",[s._v("命名的容器挂载数据卷，其它容器通过挂载这个(父容器)实现数据共享，挂载数据卷的容器，称之为数据卷容器。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("//以上一步新建的镜像 gg/centos 为模板并运行容器dc01/dc02/dc03\n它们已经具有容器卷：/dataVolumeContainer1\n              /dataVolumeContainer2\n\n容器间传递共享"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("--volumes-from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n//先启动一个父容器 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("在dataVolumeContainer2中新增内容"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n//dc02/dc03继承自dc01\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" dc02 --volumes-from dc01 gg/centos\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" dataVolumeContainer2\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("   //可以看到dc01_add.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" dc02_add.txt   //在此容器的此目录下添加dc02_add.txt文件\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" dc03 --volumes-from dc01 gg/centos\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" dataVolumeContainer2\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("   //可以看到dc01_add.txt，dc02_add.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" dc03_add.txt   //在此容器的此目录下添加dc03_add.txt文件\n\n//回到dc01可以看到02/03各自添加的都能共享了\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" attach dc01\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("  //可以看到dc01_add.txt，dc02_add.txt，dc03_add.txt\n\n//删除dc01,dc02修改后dc03可否访问\n可以正常访问，并且执行 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" 可以看到上面的三个文件\n\n//删除dc02后dc03可否访问\n可以访问，并且删除dc01后在dc02中的文件操作依旧和dc03共享\n\n//新建dc04继承dc03后在删除dc03\ndc04依旧能正常访问，并且可以对上面的文件共享\n\n//结论：容器之间配置信息的传递，数据卷的生命周期一直持续到没有容器使用它为止。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);