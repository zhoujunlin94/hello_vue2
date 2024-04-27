/**
 * 项目入口文件
 */
// 引入vue
import Vue from 'vue'
// 引入本地App组件  所有组件的根组件
import App from './App.vue'

// 关闭生产提示 
Vue.config.productionTip = false

// 创建vm实例对象
new Vue({
  // 挂载容器
  el: '#app',
  // 将App组件放入容器中
  render: h => h(App),
})
//.$mount('#app')
