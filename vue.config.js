const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查
  // 代理服务器 方式一    不能配置多个   不能指定某个请求开启代理（不查找本地资源）
  // devServer: {
  //   proxy: 'http://localhost:5001'
  // }
  
  // 代理服务器  方式二
  devServer:{
    proxy:{
      '/api1':{
        target: 'http://localhost:5001',
        // 重写路径  去掉/api1
        pathRewrite: {'^/api1':''},
        // 支持websocket   默认true
        ws:true,
        // 默认true  用户控制请求头中的host值
        changeOrigin: false
      },
      '/api2':{
        target: 'http://localhost:5002',
        pathRewrite: {'^/api2':''},
      }
    }
  }
})

// 个性化脚手架配置参考官方文档 https://cli.vuejs.org/zh/config/