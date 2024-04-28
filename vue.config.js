const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查
})

// 个性化脚手架配置参考官方文档 https://cli.vuejs.org/zh/config/