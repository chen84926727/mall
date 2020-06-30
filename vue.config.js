
// vue.config.js
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {

  chainWebpack: config => {

    config.resolve.alias // 添加别名
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@common", resolve("src/components/common"))
      .set("@components", resolve("src/components"))
      .set("@views", resolve("src/views"))
      .set("@router", resolve("src/router"))
      .set("@store", resolve("src/store"))
  },
  devServer: {
    overlay: { // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    // host: "localhost",
    port: 3000, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    hotOnly: true, // 热更新

    // proxy: 'http://localhost:8080'   // 配置跨域处理,只有一个代理
  }
}

