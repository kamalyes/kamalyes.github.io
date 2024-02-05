(window.webpackJsonp=window.webpackJsonp||[]).push([[523],{838:function(s,t,e){"use strict";e.r(t);var a=e(7),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Github Action是Github 提供的免费可持续集成服务，在 GitHub Actions 的仓库中自动化、自定义和执行软件开发工作流程。 可以发现、创建和共享操作以执行任何作业（包括 CI/CD），并将操作合并到完全自定义的工作流程中。")]),s._v(" "),t("p",[s._v("GitHub Actions 简单易用，在仓库根目录下建立"),t("code",[s._v(".github/workflows")]),s._v("文件夹，把workflows工作流文件("),t("code",[s._v("YAML")]),s._v(")放到这个目录下，就可以使用Github Action服务了")]),s._v(" "),t("h1",{attrs:{id:"workflows-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workflows-文件"}},[s._v("#")]),s._v(" workflows 文件")]),s._v(" "),t("p",[s._v("由多个job组合而成，其指定了持续集成要完成的工作，每个工作流文件代表着一个持续集成工程")]),s._v(" "),t("ul",[t("li",[s._v("每个"),t("code",[s._v("workflow")]),s._v("由多个"),t("code",[s._v("job")]),s._v("组成，每个"),t("code",[s._v("job")]),s._v("就是你指定的任务")]),s._v(" "),t("li",[s._v("每个"),t("code",[s._v("job")]),s._v("由多个"),t("code",[s._v("step")]),s._v("组成，每个"),t("code",[s._v("step")]),s._v("代表任务的具体步骤")]),s._v(" "),t("li",[s._v("每个"),t("code",[s._v("step")]),s._v("由多个"),t("code",[s._v("action")]),s._v("组成，代表具体要执行的指令，"),t("code",[s._v("actoin")]),s._v(" 是"),t("code",[s._v("workflows")]),s._v("中的最小单位")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/automate/github_actions_workflows_hexo.jpg",alt:"GitHub Actions Workflows"}})]),s._v(" "),t("h1",{attrs:{id:"action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[s._v("#")]),s._v(" Action")]),s._v(" "),t("p",[s._v("GitHub提供了大量方便的工具，使你可以轻松的完成各种任务。比如克隆仓库并检出，向仓库提交内容，安装各种语言环境，同步文件等等，都有对应的工具，它们就是 Action，只需要调用它们就可以了，几乎不用写任何命令，你需要的在"),t("a",{attrs:{href:"https://github.com/marketplace?type=actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("Action市场"),t("OutboundLink")],1),s._v("几乎全部可以找到。如 "),t("code",[s._v("actions/checkout")]),s._v("是用来checout仓库的，"),t("code",[s._v("actions")]),s._v("表示这个工具是官方的，如果是其它名称，则表示是第三方提供的")]),s._v(" "),t("h1",{attrs:{id:"hexo-发布到-github-pages-及-ailyun"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hexo-发布到-github-pages-及-ailyun"}},[s._v("#")]),s._v(" Hexo 发布到 Github Pages 及 Ailyun")]),s._v(" "),t("p",[s._v("没有使用 GitHub Actions 的发布流程")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("push")])]),s._v(" "),t("li",[s._v("生成静态页：Hexo或hugo，Jekyll等静态博客生成器")]),s._v(" "),t("li",[t("code",[s._v("push")]),s._v("静态页，在 "),t("code",[s._v("github pages")]),s._v("上完成发布")]),s._v(" "),t("li",[s._v("登录远程服务器，拉取静态页，在自己的站点完成发布")])]),s._v(" "),t("p",[s._v("使用 GitHub Actions 的发布流程")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("push")])])]),s._v(" "),t("p",[s._v("后面的工作完全自动化完成")]),s._v(" "),t("ul",[t("li",[s._v("你不需要在你的本机上安装Hexo等静态站点生成器运行环境")]),s._v(" "),t("li",[s._v("文章的Build的工作在GitHub 的 "),t("code",[s._v("work runner")]),s._v("中完成，不需要占用的你电脑的资源")]),s._v(" "),t("li",[s._v("在GitHub 上构建速度快，软硬件兼容性问题也少")]),s._v(" "),t("li",[s._v("可以随时随地的部署：比如你发布后发现有个错别字要改，那么你用手机登录Github，直接在页面上修改，提交后就会触发部署，甚至都不需要打开电脑，方便快捷。")])]),s._v(" "),t("h2",{attrs:{id:"建立ssh密钥对"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立ssh密钥对"}},[s._v("#")]),s._v(" 建立SSH密钥对")]),s._v(" "),t("p",[s._v("博客涉及到三个仓库：")]),s._v(" "),t("ul",[t("li",[s._v("Hexo.git，用来存放Hexo项目和文章")]),s._v(" "),t("li",[s._v("next.git博客主题")]),s._v(" "),t("li",[s._v("kamalyes.github.io 用来存放发布的HTML页，设置为 Github Pages")])]),s._v(" "),t("p",[s._v("为什么会用到密钥对")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Aliyun服务器：构建过程中要远程登录到Aliyun服务器，要用密钥进行身份验证，需要用到密钥对")])]),s._v(" "),t("li",[t("p",[s._v("Github Pages：Github的建议是把源文件即Hexo.git放到master分支，把kamalyes.github.io放到gh-pages分支。但Github Pages必须是公开仓库才可以发布，这样就让存放源文件的Hexo.git也可以被访问，这显然是不安全的，所以没有把这两个仓库放在一起，那么对kamalyes.github.io进行发布就需要使用密钥对，才能对仓库进行操作。如果你遵循了Github的建议，那这么在发布Github pages时就不用设置密钥对了。")])])]),s._v(" "),t("p",[s._v("生成密钥对")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""\n# You will get 2 files:\n#   gh-pages.pub (public key)\n#   gh-pages     (private key)\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("把"),t("code",[s._v("gh-pages.pub")]),s._v("中的内容添加到远程服务器的"),t("code",[s._v("~/.ssh/authorized_keys")]),s._v("中或把文件上传到"),t("code",[s._v("~/.ssh/")]),s._v("目录，执行")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cat gh-pages.pub >> authorized_keys\nchmod 600 -R ~/.ssh # 设置~/ssh目录权限\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"设置-github-secrets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置-github-secrets"}},[s._v("#")]),s._v(" 设置 github Secrets")]),s._v(" "),t("p",[s._v("Secrets 是用来存放敏感信息的，如数据库的密码，用户名，密钥，等信息，不会让这些信息在日志输出中暴露出来，会以星号(*)代替这些敏感信息。")]),s._v(" "),t("p",[s._v("在Hexo.git仓库的首页点击 "),t("code",[s._v("settings")]),s._v("，在左侧找到"),t("code",[s._v("Secrets")]),s._v("，点击右上"),t("code",[s._v("New repository secret")]),s._v(" ，"),t("code",[s._v("name")]),s._v("填写"),t("code",[s._v("ACTIONS_DEPLOY_KEY")]),s._v(" ，"),t("code",[s._v("value")]),s._v("填写密钥"),t("code",[s._v("gh-pages")]),s._v("的内容， 点击"),t("code",[s._v("Add secret")]),s._v("，这样就创建了一个"),t("code",[s._v("secret")]),s._v("。之后可以用这个"),t("code",[s._v("secret")]),s._v("操作 kamalyes.github.io 仓库。")]),s._v(" "),t("p",[s._v("你还可以创建其它的"),t("code",[s._v("secret")]),s._v("，比如MySQL连接的密码，可以新建一个名称为"),t("code",[s._v("mysql_passwd")]),s._v("，内容为MySQL密码的"),t("code",[s._v("Secret")]),s._v("。更多信息可以查看官方 "),t("a",{attrs:{href:"https://docs.github.com/en/actions/reference/encrypted-secrets",target:"_blank",rel:"noopener noreferrer"}},[s._v("Secrets 帮助"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# secret 在日志中使用 * 号输出敏感信息")]),s._v("\nSOURCE: public/\nREMOTE_HOST: ***\nREMOTE_USER: ***\nTARGET: ***\nSSH_PRIVATE_KEY: ***\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"设置-deploy-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置-deploy-keys"}},[s._v("#")]),s._v(" 设置 Deploy keys")]),s._v(" "),t("p",[s._v("打开"),t("code",[s._v("kamalyes.github.io")]),s._v("仓库，在仓库的首页点击 "),t("code",[s._v("settings")]),s._v("，在左侧找到"),t("code",[s._v("Deploy keys")]),s._v("，把"),t("code",[s._v("gh-pages.pub")]),s._v("的内容复制进去，勾选下面的"),t("code",[s._v("Allow write access")]),s._v("，点击"),t("code",[s._v("Add Key")]),s._v("，这样在之后的部署过程中，Hexo.git仓库所在的"),t("code",[s._v("runner")]),s._v("就可以通过"),t("code",[s._v("secrets.ACTIONS_DEPLOY_KEY")]),s._v("对其进行操作了。")]),s._v(" "),t("h2",{attrs:{id:"编写工作流文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写工作流文件"}},[s._v("#")]),s._v(" 编写工作流文件")]),s._v(" "),t("p",[s._v("在Hexo.git项目根目录下建立"),t("code",[s._v(".github/wrokflows")]),s._v("文件夹，在这个文件夹下创建以"),t("code",[s._v("yml")]),s._v("结尾的文件"),t("code",[s._v("build.yml")]),s._v("。每当你"),t("code",[s._v("push")]),s._v("到github后，github会自动寻找仓库根目录下的"),t("code",[s._v(".github/wrokflows")]),s._v("中扩展名为"),t("code",[s._v("yml")]),s._v("的所文件，运行其中的指令，完成自动部署。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" .github/workflows\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" .github/workflows/build.yml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("需要持续集成完成的工作有")]),s._v(" "),t("ol",[t("li",[s._v("Checkout "),t("code",[s._v("hexo.git")]),s._v("中的内容")]),s._v(" "),t("li",[s._v("Checkout "),t("code",[s._v("next.git")]),s._v("主题内容到 theme目录")]),s._v(" "),t("li",[s._v("安装 "),t("code",[s._v("node.js")]),s._v("环境")]),s._v(" "),t("li",[s._v("安装Hexo")]),s._v(" "),t("li",[s._v("使用Hexo生成静态页面")]),s._v(" "),t("li",[s._v("发布静态页面到 "),t("code",[s._v("kamalyes.github.io")])]),s._v(" "),t("li",[s._v("同步静态页到Aliyun服务器")])]),s._v(" "),t("p",[s._v("把以上内容翻译为要执行的配置命令就是")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("on:\n  push:\n    branches: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在master分支push时触发部署")]),s._v("\n    paths-ignore: "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以下文件的变更不触发部署")]),s._v("\n      - README.md\n  workflow_dispatch:\n\nenv: "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 统一设置环境变量")]),s._v("\n  GIT_USER: "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n  GIT_EMAIL: email@example.com\n  THEME_REPO: git/next "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你使用的主题仓库地址")]),s._v("\n  THEME_BRANCH: master\n  DEPLOY_REPO: git/kamalyes.github.io "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你用来发布github pages的仓库地址")]),s._v("\n  DEPLOY_BRANCH: master\n\njobs:\n  build: "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# job_id，其它job可以引用，比如两个job有先后顺序")]),s._v("\n    name: Build Github Page And Deploy On Aliyun "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# job名称")]),s._v("\n    runs-on: ubuntu-latest "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建使用的系统，支持 linux/mac/windows")]),s._v("\n    timeout-minutes: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# job超时时间，超过后job会被停止运行")]),s._v("\n\n    steps: "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一个job由多个 step 组成，本博的由7个step组成")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. Checkout hexo.git 中的内容")]),s._v("\n      - name: Checkout Hexo repo\n       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检出项目，如果不指定名称，默认使用运行Github Action 的仓库，即hexo.git")]),s._v("\n        uses: actions/checkout@v2\n\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. Checkout next.git 主题内容到 theme目录")]),s._v("\n      - name: Checkout Theme repo\n       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# actions/checkout 就是Acton工具，实现checkout项目，每个action也是一个git仓库")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以直接通过 github.com/工具名称进行访问，即github.com/actions/checkout")]),s._v("\n        uses: actions/checkout@v2\n        with:\n          repository: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ env.THEME_REPO }")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 要checkout的仓库地址")]),s._v("\n          ref: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ env.THEME_BRANCH }")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          path: themes/next "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 要checkout到的路径")]),s._v("\n\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 安装 node.js 环境")]),s._v("\n      - name: Use Node.js "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ matrix.node }")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        uses: actions/setup-node@v2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用actions/setup-node安装nodejs")]),s._v("\n        with:\n          node-version: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ matrix.node }")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4. 安装Heox")]),s._v("\n      - name: Install Hexo\n        run: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行command命令")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" hexo-cli\n          "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5. 使用Hexo生成静态页面")]),s._v("\n      - name: Generate Blog\n        run: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n          hexo generate\n\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6. 发布静态页面到 kamalyes.github.io")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 peaceiris/actions-gh-pages 第三方Action工具，发布静态内容到 github pages")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重要:")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果你的源码文件与Html文件在两个仓库，请在源码文件仓库设置")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# secrets 的 ACTIONS_DEPLOY_KEY 值为密钥内容，")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在html文件仓库即youname.github.io中设置 Deploy keys 的值设置为公钥内容，")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在构建过程中会使用密钥对youname.github.io进行操作")]),s._v("\n      - name: Deploy Github Page\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 hexo.git 上设置的私钥")]),s._v("\n          deploy_key: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ secrets.ACTIONS_DEPLOY_KEY }")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ACTIONS_DEPLOY_KEY 不能修改")]),s._v("\n          external_repository: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ env.DEPLOY_REPO }")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Hexo.git 的仓库地址")]),s._v("\n          publish_branch: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ env.DEPLOY_BRANCH }")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          publish_dir: ./public "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用Hexo/hugo等生成静态页面的目录")]),s._v("\n          user_name: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ env.GIT_USER }")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          user_email: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ env.GIT_EMAIL }")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 7. 同步静态页到Aliyun服务器")]),s._v("\n      - name: Deploy Github Page on Aliyun\n        uses: easingthemes/ssh-deploy@main\n        env:\n            SSH_PRIVATE_KEY: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ secrets.ACTIONS_DEPLOY_KEY }")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            ARGS: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-rltgoDzvO --delete"')]),s._v("\n            SOURCE: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"public/"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用Hexo/hugo等生成静态页面的目录")]),s._v("\n            REMOTE_HOST: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ secrets.REMOTE_HOST }")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            REMOTE_USER: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ secrets.REMOTE_USER }")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            TARGET: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ secrets.REMOTE_TARGET }")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br")])]),t("p",[s._v("可以点击仓库主页上的"),t("code",[s._v("Actions")]),s._v("，查看正在运行的"),t("code",[s._v("workflows")]),s._v("，里面有详细的日志信息")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://www.yuyanqing.cn/oss/image-bed/col/automate/Snipaste_2023-02-17_23-32-25.png",alt:"GitHub Actions Workflows",title:"GitHub Actions Workflows"}})]),s._v(" "),t("h1",{attrs:{id:"参考链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),t("ul",[t("li",[s._v("GitHub "),t("a",{attrs:{href:"https://github.com/marketplace?type=actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方市场"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/actions"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("Action "),t("a",{attrs:{href:"https://github.com/sdras/awesome-actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("awesome actions"),t("OutboundLink")],1),s._v(" 仓库")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://help.github.com/en/articles/about-actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://help.github.com/en/articles/about-actions"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/peaceiris/actions-gh-pages",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/peaceiris/actions-gh-pages"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://docs.github.com/en/actions/reference/encrypted-secrets",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.github.com/en/actions/reference/encrypted-secrets"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://docs.github.com/cn/actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.github.com/cn/actions"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);