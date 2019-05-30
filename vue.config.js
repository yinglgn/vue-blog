const path = require('path')
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  css: {
    modules: true
  },
  pages: {
    index: {
      // 应用入口配置，相当于单页面应用的main.js，必需项
      entry: 'src/frontPage/main.js',
      // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
      template: 'public/index.html',
      // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
      filename: 'index.html',
      // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
      // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // 包含的模块，可选项
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 只有entry属性时，直接用字符串表示模块入口
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/admin.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `admin.html`。
    admin: 'src/backstagePage/main.js'
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('@front', resolve('src/frontPage'))
      .set('@backstage', resolve('src/backstagePage'))
  }
}