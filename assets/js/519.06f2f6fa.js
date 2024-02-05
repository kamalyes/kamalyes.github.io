(window.webpackJsonp=window.webpackJsonp||[]).push([[519],{833:function(a,e,t){"use strict";t.r(e);var s=t(7),r=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"github-jsdelivr-tinypng-picgo-打造稳定快速、高效免费图床"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-jsdelivr-tinypng-picgo-打造稳定快速、高效免费图床"}},[a._v("#")]),a._v(" GitHub + jsDelivr + TinyPNG+ PicGo 打造稳定快速、高效免费图床")]),a._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("p",[e("strong",[a._v("Q：为什么要使用图床呢？什么是图床？")])]),a._v(" "),e("p",[a._v("A：写博客文章时，图片的上传和存放是一个问题，有的朋友可能会把图片放到和博客同一个仓库当中，使用相对路径来引用，这样后期维护起来会比较麻烦。还有的朋友会在不同的平台发布同一篇文章，这样一来每个平台都要上传图片，为了解决这些问题，比较推荐的做法是把图片统一上传到一个在线的第三方静态资源库中，我们把这个资源库称为图床，其返回一个图片的URL，使用"),e("code",[a._v("markdown+图片url")]),a._v("的方式写作文章，一次编写，到处使用~")]),a._v(" "),e("p",[e("strong",[a._v("Q：图床的选择")])]),a._v(" "),e("p",[a._v("A："),e("code",[a._v("jsDelivr")]),a._v("是国外的一家优秀的公共 CDN 服务提供商，该平台是首个「打通中国大陆与海外的免费CDN服务」，无须担心中国防火墙问题而影响使用。官网："),e("a",{attrs:{href:"http://www.jsdelivr.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://www.jsdelivr.com/"),e("OutboundLink")],1)]),a._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[a._v("http://www.jsdelivr.com/\n这个方法有个缺点是，，它的CDN缓存约为一周。如果你更改了Github中的图像的话，CDN缓存并不能及时的更新。\n优点是可以结合Picgo软件来使用。\n免费的CDN，解决GitHub图片不能显示的问题插图5\n自定义域名：https://cdn.jsdelivr.net/gh/[USER]/[REPO]@[BRANCH]\n例如： https://cdn.jsdelivr.net/gh/kamalyes/image-bed@master\n那么生成的图片链接为： https://www.yuyanqing.cn/oss/image-bed/col/automate/f750683f77fb495db6193a8b2d12d75e.png\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("p",[a._v("B: statically：The free optimization & cdn for images, CSS, JavaScript, and more")]),a._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[a._v("https://statically.io/\n免费的CDN，解决GitHub图片不能显示的问题插图1\n复制Github的链接到 https://statically.io/，以生成CDN链接。\n免费的CDN，解决GitHub图片不能显示的问题插图3\n配置示例： https://statically.io/github\n自定义域名： https://cdn.statically.io/gh/[USER]/[REPO]/[BRANCh]\n图片格式为： https://cdn.statically.io/gh/[USER]/[REPO]/[BRANCh]/file.png\n例如我的链接： https://cdn.statically.io/gh/kamalyes/image-bed/image/ORBSLAM3-EuRoC-MH01.png\n\n优点是可以结合Picgo软件来使用。CDN 缓存时间据说很长。\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br")])]),e("h2",{attrs:{id:"图床打造"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图床打造"}},[a._v("#")]),a._v(" 图床打造")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("新建GitHub仓库，注意仓库要设置成"),e("strong",[a._v("公开")])])]),a._v(" "),e("li",[e("p",[a._v("参照 "),e("a",{attrs:{href:"https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档"),e("OutboundLink")],1),a._v(" 生成一个token密钥")])]),a._v(" "),e("li",[e("p",[a._v("在 "),e("a",{attrs:{href:"https://github.com/Molunerfinn/picgo/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里"),e("OutboundLink")],1),a._v(" 下载PicGo，安装完成后打开，"),e("code",[a._v("图床设置")]),a._v(" 选 "),e("code",[a._v("GitHub图床")]),a._v("，并填写相应的信息")]),a._v(" "),e("ul",[e("li",[a._v("仓库名：前面新建的仓库，格式："),e("code",[a._v("<用户名>/<仓库名>")])]),a._v(" "),e("li",[a._v("分支名：填写主分支"),e("code",[a._v("master")]),a._v("即可")]),a._v(" "),e("li",[a._v("Token：前面生成的token密钥")]),a._v(" "),e("li",[a._v("存储路径：按你自己的需求填写")]),a._v(" "),e("li",[a._v("自定义域名：图片上传后，PicGo 会按照 "),e("code",[a._v("自定义域名+上传的图片名")]),a._v(" 的方式生成访问链接，此处我们填写"),e("code",[a._v("jsDelivr")]),a._v("的CDN加速地址，格式："),e("code",[a._v("https://cdn.jsdelivr.net/gh/<用户名>/<仓库名>")])])])]),a._v(" "),e("li",[e("p",[a._v("使用"),e("a",{attrs:{href:"https://tinypng.cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://tinypng.cn/"),e("OutboundLink")],1),a._v("压缩你要上传的图片（如图片已经很小或你有更好的压缩工具可省略这一步）")])]),a._v(" "),e("li",[e("p",[a._v("在PigGo的"),e("code",[a._v("上传区")]),a._v("上传你的图片，到"),e("code",[a._v("相册")]),a._v("一键复制刚刚上传的图片URL，至此，你就可以在你的文章当中愉快的插入图片啦~， 更多功能自己去探索吧~~")])])]),a._v(" "),e("h1",{attrs:{id:"快速上传图片到云图床"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速上传图片到云图床"}},[a._v("#")]),a._v(" 快速上传图片到云图床")]),a._v(" "),e("h1",{attrs:{id:"目标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[a._v("#")]),a._v(" 目标")]),a._v(" "),e("hr"),a._v(" "),e("ol",[e("li",[a._v("复制图片到剪切板后，配合 Alfred 使用快捷键上传至又拍云（支持大部分图床，可自行配置）")]),a._v(" "),e("li",[a._v("添加右键上传")])]),a._v(" "),e("h1",{attrs:{id:"效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#效果"}},[a._v("#")]),a._v(" 效果")]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("图片复制到剪切板后，按快捷键上传，成功后会将 md 格式图片复制到剪切板，并输出到光标处。")]),a._v(" "),e("p",[a._v("用 QQ 制作的简单 gif 图片，正常右上角是有上传中、上传成功提示的 "),e("img",{attrs:{src:"https://cdn.superwen.cn/auto-upload/2023/0ead4051eeabad8bb478bb748453a440.gif",alt:"QQ20230212-124410-HD.gif"}})]),a._v(" "),e("h1",{attrs:{id:"环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[a._v("#")]),a._v(" 环境")]),a._v(" "),e("hr"),a._v(" "),e("ul",[e("li",[a._v("Apple M1 macOS Ventura 13.1")]),a._v(" "),e("li",[a._v("php7.4")]),a._v(" "),e("li",[a._v("Alfred 4.6.2")]),a._v(" "),e("li",[a._v("pngpaste 0.2.3")])]),a._v(" "),e("h1",{attrs:{id:"相关工具说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关工具说明"}},[a._v("#")]),a._v(" 相关工具说明")]),a._v(" "),e("hr"),a._v(" "),e("h3",{attrs:{id:"picuploader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#picuploader"}},[a._v("#")]),a._v(" PicUploader")]),a._v(" "),e("p",[a._v("本文的主要实现是依赖该开源工具，"),e("a",{attrs:{href:"https://github.com/xiebruce/PicUploader",target:"_blank",rel:"noopener noreferrer"}},[a._v("地址 (opens new window)"),e("OutboundLink")],1),a._v("，是目前比较不错的实现。 也可忽略本文直接参照该库去自行实现，本文是记录实现步骤和遇到的问题。")]),a._v(" "),e("h3",{attrs:{id:"alfred"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alfred"}},[a._v("#")]),a._v(" Alfred")]),a._v(" "),e("p",[a._v("Alfred 是 Mac 上的一个效率工具，它最经典的就是类似 Mac 自带的“聚焦搜索”的功能，它的大概功能可自行搜索关键字：效率神器 Alfred。 Alfred 体积非常小，不到 8M，占用内存也非常小。Alfred 本身免费，但它的“Powerpack”(可理解为“增强功能包”)是收费的(39 英镑 ≈341 元终身授权)，当然你也可以用 PJ 版(可以去找)，但 PJ 版一般跟不上系统版本，如果你喜欢用最新系统，可能有时候用不了。")]),a._v(" "),e("h3",{attrs:{id:"pngpaste"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pngpaste"}},[a._v("#")]),a._v(" pngpaste")]),a._v(" "),e("p",[a._v("快捷键上传，其实就是通过按快捷键调用命令，获取到系统剪贴板中的图片并把它保存成图片文件，然后上传该图片文件。目前最方便的就是通过 pngpaste 来获取，所以我们需要安装 pngpaste。 使用 brew 安装 pngpaste：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" pngpaste\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h1",{attrs:{id:"快捷键上传实现步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快捷键上传实现步骤"}},[a._v("#")]),a._v(" 快捷键上传实现步骤")]),a._v(" "),e("hr"),a._v(" "),e("h3",{attrs:{id:"_1-下载-picuploader-opens-new-window"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载-picuploader-opens-new-window"}},[a._v("#")]),a._v(" 1. 下载 "),e("a",{attrs:{href:"https://github.com/xiebruce/PicUploader",target:"_blank",rel:"noopener noreferrer"}},[a._v("PicUploader (opens new window)"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("将仓库克隆到本地")]),a._v(" "),e("h3",{attrs:{id:"_2-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置"}},[a._v("#")]),a._v(" 2. 配置")]),a._v(" "),e("p",[a._v("找到 "),e("code",[a._v("config")]),a._v(" 文件下的 "),e("code",[a._v("config.php")]),a._v("，另复制为 "),e("code",[a._v("config-local.php")]),a._v("，然后在"),e("code",[a._v("config-local.php")]),a._v("中填写配置。")]),a._v(" "),e("p",[a._v("我使用的是又拍云，已经申请过云储存服务，所以这里的工作是找到接入又拍云需要的参数： "),e("code",[a._v("serviceName、operator、password、domain")])]),a._v(" "),e("h4",{attrs:{id:"servicename、domain"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#servicename、domain"}},[a._v("#")]),a._v(" serviceName、domain")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.superwen.cn/auto-upload/2023/3161bebdb399c48618c2e5758624cd11.jpg",alt:"image.jpg"}})]),a._v(" "),e("h4",{attrs:{id:"operator、password"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#operator、password"}},[a._v("#")]),a._v(" operator、password")]),a._v(" "),e("p",[a._v("进入上图所示的服务内，存储管理 - 操作员授权 - 点击授权 - 新建授权操作员 "),e("img",{attrs:{src:"https://cdn.superwen.cn/auto-upload/2023/b7c0ffdfc25c0703d7a6fa915a6953e5.jpg",alt:"image.jpg"}})]),a._v(" "),e("h3",{attrs:{id:"_3-安装-alfred-workflow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装-alfred-workflow"}},[a._v("#")]),a._v(" 3. 安装 Alfred workflow")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://cdn.superwen.cn/wiki/PicUploaderHelper.alfredworkflow",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载地址 (opens new window)"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("双击文件，安装 alfredworkflow")]),a._v(" "),e("p",[a._v("导入后可看到三个图标:")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.superwen.cn/auto-upload/2023/06cdf99d8f56c5ee076e2be84b68d9db.jpg",alt:"image.jpg"}})]),a._v(" "),e("p",[a._v("双击第一个 HotKey 图标可设置快捷键； 双击第二个 Run Script 图标设置快捷键要运行的命令，Language 选择 "),e("code",[a._v("/bin/bash→with input argv→Sequentially")]),a._v("，script 填写("),e("strong",[a._v("注意路径要换成你自己的")]),a._v(")：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("/usr/local/bin/php /path/to/personal/PicUploader/index.php "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("alfred"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("双击第三个 clipboard 图标，type 选择 Plain Text，框里填 "),e("code",[a._v("{query}")]),a._v("，并勾选"),e("code",[a._v("Automatically paste to front most app")]),a._v("。 使用： 把鼠标光标置于任意编辑器界面上，截图 → 复制到剪贴板 → 按快捷键 → 右上角提示上传中 → 右上角提示上传完成(此时返回的链接已经自动粘贴到编辑器中)！")]),a._v(" "),e("h1",{attrs:{id:"添加右键上传"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加右键上传"}},[a._v("#")]),a._v(" 添加右键上传")]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("打开"),e("code",[a._v("自动操作(Automator)")]),a._v("，打开它，创建一个服务，输入 "),e("code",[a._v("shell")]),a._v(" 搜索 → 搜索出 "),e("code",[a._v("运行 Shell 脚本")]),a._v(" → 把它拖到右侧：")]),a._v(" "),e("p",[a._v("工作流程收到当前：文件或文件夹 位于 "),e("code",[a._v("访达.app")])]),a._v(" "),e("ul",[e("li",[a._v("输入为：灰色不可选，也不需要选")]),a._v(" "),e("li",[a._v("图像：默认就行")]),a._v(" "),e("li",[a._v("颜色：默认就行")])]),a._v(" "),e("p",[a._v("运行 Shell 脚本：")]),a._v(" "),e("ul",[e("li",[a._v("Shell: "),e("code",[a._v("/bin/bash")])]),a._v(" "),e("li",[a._v("传递输入: 作为自变量")]),a._v(" "),e("li",[a._v("命令(注意把这里的路径改成你电脑上的路径)：")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LC_CTYPE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zh_CN.UTF-8"')]),a._v(" /usr/bin/php /path/to/PicUploader/index.php "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$@")]),a._v('"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" pbcopy\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("最后 "),e("code",[a._v("cmd+s")]),a._v(" 保存 → 命名成 "),e("code",[a._v("Upload with PicUploader")]),a._v(" 就完成了，可以关掉 "),e("code",[a._v("自动操作")]),a._v(" APP 了，然去 "),e("code",[a._v("Finder")]),a._v(" 随便右击一个文件，是不是有个菜单叫 "),e("code",[a._v("Upload with PicUploader")]),a._v("? 点击它就可以上传该文件了。")])])}),[],!1,null,null,null);e.default=r.exports}}]);