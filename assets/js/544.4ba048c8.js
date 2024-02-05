(window.webpackJsonp=window.webpackJsonp||[]).push([[544],{858:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-设置github的user-name和email"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置github的user-name和email"}},[s._v("#")]),s._v(" 1. 设置GitHub的user name和email")]),s._v(" "),a("p",[s._v("打开git bash输入：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Git账号"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Git邮箱"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_2-生成一个新的ssh密钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-生成一个新的ssh密钥"}},[s._v("#")]),s._v(" 2. 生成一个新的SSH密钥")]),s._v(" "),a("p",[s._v("打开git bash输入，然后连续按三个回车即可：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" rsa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email@example.com"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("yuyq"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" rsa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email@example.com"')]),s._v("\nGenerating public/private rsa key pair.\nEnter "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("yuyq/.ssh/id_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\nCreated directory "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:\\Users\\yuyq/.ssh'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nEnter passphrase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empty "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" no passphrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\nEnter same passphrase again:\nYour identification has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("yuyq/.ssh/id_rsa.\nYour public key has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("yuyq/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:y8yLd6P1MrCS9M1oJJL0sRxugTKg3V3aRSrmq8YSdM0 your_email@example.com\nThe key's randomart image is:\n+---"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RSA "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("----+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(".o "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("o+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("S        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" o "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("O")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   o +."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("O "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" o.o.B.B "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   o. .+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(" +     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+----"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SHA256"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("-----+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h2",{attrs:{id:"_4-将ssh公钥添加到github账户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-将ssh公钥添加到github账户"}},[s._v("#")]),s._v(" 4. 将SSH公钥添加到GitHub账户")]),s._v(" "),a("p",[s._v("先复制SSH公钥的完整内容"),a("code",[s._v("C:\\Users\\yuyq/.ssh/id_rsa.pub.")]),s._v("，路径在刚才生成的结果中。")]),s._v(" "),a("p",[s._v("进入GitHub的设置页面（登录GitHub，在右上角），点击左部侧边栏的 SSH keys 选项，点击 "),a("a",{attrs:{href:"https://github.com/settings/ssh/new",target:"_blank",rel:"noopener noreferrer"}},[s._v("Add SSH key"),a("OutboundLink")],1),s._v(" 按钮，在Title输入框内，为你的新key取个名字，在Key输入框内，粘贴前面复制好的公钥内容，然后点击 Add key 按钮即可。")]),s._v(" "),a("h2",{attrs:{id:"_5-测试连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-测试连接"}},[s._v("#")]),s._v(" 5. 测试连接")]),s._v(" "),a("p",[s._v("打开 Git Bash 输入："),a("code",[s._v("ssh -T git@github.com")]),s._v(" 将会看到如下提示：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("yuyq"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("ssh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-T")]),s._v(" git@github.com\nThe authenticity of "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'github.com (20.205.243.166)'")]),s._v(" can"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t be established.\nECDSA key fingerprint is SHA256:62QAMXNIC1TJYWeIOttrVc98/R1BUFWu3/LiyKgUfQM.\nAre you sure you want to continue connecting (yes/no)? yes\nWarning: Permanently added '")]),s._v("github.com,20.205.243.166"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' (ECDSA) to the list of known hosts.\nHi kamalyes! You'")]),s._v("ve successfully authenticated, but GitHub does not provide shell access.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);