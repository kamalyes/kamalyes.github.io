/**
 * 提示：如您想使用JS版本的配置文件可参考：/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块

const DOMAIN_NAME = 'www.yuyanqing.cn' // 域名 (不带https)
const WEB_SITE = `https://${DOMAIN_NAME}` // 网址

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm主题包
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "学习巴",
      description: 'web前端技术博客,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章。',
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
          {
            text: '基础资料',
            items: [
              { text: 'CSS', link: '/pages/5a9535/' },
              { text: 'HTML', link: '/pages/09d63b/' },
              { text: 'JavaScript', link: '/pages/916929/' }
            ]
          },
          {
            text: 'Vue教程',
            items: [
              { text: '基础', link: '/pages/115158caa9e96df0/' },
              { text: '组件', link: '/pages/83a1ab785e7fd70c/' },
              { text: '过渡&动画', link: '/pages/185a96b593a97078/' },
              { text: '可复用性&组合', link: '/pages/bd36a3c1bc3e0821/' },
              { text: '工具', link: '/pages/d00311f8174119b2/' },
              { text: '规模化', link: '/pages/d9d62d6ab8ff99a6/' },
              { text: 'Vuex', link: '/pages/b30620/'},
              { text: '其它', link: '/pages/fb08e252dfd8fdfd/'}
            ]
          },{
            text: 'React教程',
            items: [
              { text: '核心概念', link: '/pages/9f6abc/' },
              { text: 'Hook', link: '/pages/5c13b9/' },
              { text: '案例演示', link: '/pages/87156f/' },
            ]
          },
          { text: 'JavaScript教程', link: '/pages/38a70e/'},
          { text: 'TypeScript 从零实现 axios', link: '/pages/e05dce83e5129785/' }
        ]
      },{
        text: "后端",
        link: "/backend/",
        items: [
          { text: "JavaSE", link: "/pages/69d2f8/" },
          { text: "JavaEE", link: "/pages/ca58e7/" },
          { text: "Spring&SpringBoot", link: "/pages/a1a3d3/"},
          { text: "DataBase", link: "/pages/012588/" },
          { text: "Java中间件", link: "/pages/3cbcff/" },
          { text: "JavaDevApp", link: "/pages/dab057/" },
          { text: "Java工具", link: "/pages/4b6820/" },
          { text: "CentOS", link: "/pages/3cce56/" },
          { text: "Docker", link: "/pages/5d583a/" },
          { text: "Linux", link: "/pages/552a2f/" },
          { text: "其它", link: "/pages/b8f905/" }
        ],
      },{
        text: '测试',
        link: '/testing/',
        items: [
          { text: '测试流程规范', link: '/pages/d8ce1c/' },
          { text: '自动化测试', link: '/pages/eec3de/' },
          { text: '测试环境搭建', link: '/pages/e07672/'},
          { text: '性能测试',
            items: [
              { text: 'Jmeter基础篇', link: '/pages/48598c/' },
              { text: 'Jmeter高级篇', link: '/pages/21705d/' },
          ]},
          { text: 'Fiddler', link: '/pages/971225/'}
        ]
      },{
        text: "大数据",
        link: "/bigdata/",
        items: [
          { text: "大数据综合", link: "/pages/ad9b6a/" },
          { text: "hadoop", link: "/pages/680e30/" },
          { text: "hive", link: "/pages/a958fe/" },
          { text: "hbase", link: "/pages/417be6/" },
          { text: "zookeeper", link: "/pages/1b41b6/" },
          { text: "flink", link: "/pages/5c85bd/" },
        ],
      },{
        text: '数据结构和算法',
        link: '/arithmetic/',
        items: [
          { text: '树', link: '/pages/92e4c1/' },
          { text: '线性表', link: '/pages/5a9bff/' },
          { text: '综合', link: '/pages/8b1bd0/'},
          { text: '其它', link: '/pages/39a1b7/'}
        ]
      },{
        text: '其它',
        link: '/other/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          { text:'各种工具教程', link:'/pages/a5f73af5185fdf0a/'},
          { text: 'Git学习', link: '/pages/8292d8/' },
          { text: '前端学习笔记', link: '/pages/51afd6/' },
          { text: '收藏', link: '/pages/beb6c0bd8a66cea6/'}
        ]
      },{
        text: '索引',
        link: '/archives',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' }
        ]
      }
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1
    logo: '/img/logo.png', // 导航栏logo
    repo: 'kamalyes/kamalyes.github.io.git', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是啥则修改为sha
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//
    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框
    // bodyBgImg: [
    //   'https://fastly.jsdelivr.net/gh/kamalyes/image_store/blog/20200507175828.jpeg',
    //   'https://fastly.jsdelivr.net/gh/kamalyes/image_store/blog/20200507175845.jpeg',
    //   'https://fastly.jsdelivr.net/gh/kamalyes/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时隔bodyBgImgInterval切换一张。
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~1.0, 默认0.5
    // bodyBgImgInterval: 15, // body多张背景图时的切换间隔, 默认15，单位s
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: true, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
    // defaultMode: 'auto',

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'kamalyes', // 必需
      link: 'https://github.com/kamalyes', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: 'https://avatars.githubusercontent.com/u/40486003?v=4',
      name: 'kamalyes',
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.yuyanqing.cn/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:mryu168@163.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/kamalyes',
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2023, // 博客创建年份
      copyrightInfo:
        'kamalyes | <a href="http://beian.miit.gov.cn/" target="_blank">© ICP备案/许可证号:粤ICP备2023052306号</a>', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: 'kamalyes',
        link: 'https://github.com/kamalyes'
      }
    },

    // 自定义hmtl(广告)模块
    htmlModules
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
      },
    ],
    [
      'link',
      {
          rel: 'stylesheet',
          href: 'https://cdn.bootcdn.net/ajax/libs/viewerjs/1.10.5/viewer.min.css',
      },
    ],
    [
        'script',
        {
            src: 'https://cdn.bootcdn.net/ajax/libs/viewerjs/1.10.5/viewer.min.js',
        },
    ],
    ['meta', { name: 'referrer', content: 'no-referrer' }], // 解决图片403防盗链问题
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ],


  // 插件配置
  plugins: <UserPlugins>[
    [
      "sitemap", // 网站地图
      {
        hostname: WEB_SITE,
      },
    ],

    'vuepress-plugin-baidu-autopush', // 百度自动推送

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode,
      },
    ],

    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    // 'fulltext-search',

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    [
      'thirdparty-search',
      {
        thirdparty: [
          {
            title: '在MDN中搜索',
            frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
            behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: '在Runoob中搜索',
            frontUrl: 'https://www.runoob.com/?s=',
          },
          {
            title: '在Vue API中搜索',
            frontUrl: 'https://cn.vuejs.org/v2/api/#',
          },
          {
            title: '在Bing中搜索',
            frontUrl: 'https://cn.bing.com/search?q=',
          },
          {
            title: '通过百度搜索本站的',
            frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`,
          },
        ],
      }
    ],

    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: true, // whether to display on the mobile side, default: false.
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})
