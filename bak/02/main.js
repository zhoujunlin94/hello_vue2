/**
 * 项目入口文件
 */
// 引入vue (不完全版)
import Vue from 'vue'
// 引入vue (完全版)
//import Vue from 'vue/dist/vue.js'

// 引入本地App组件  所有组件的根组件
import App from './App.vue'

// 关闭生产提示 
Vue.config.productionTip = false

// 创建vm实例对象
new Vue({
  // 挂载容器
  el: '#app',

  // 0.
  // 不使用render方式->需要引入vue完整版
  // template: `<App></App>`,
  // components: {App}

  // 1. 
  // render(createElement){
  //   // createElement是函数
  //   console.log("render", typeof(createElement));
  //   return createElement('h1', '你好啊')
  // }

  // 2. 
  // render: createElement => {
  //   // createElement是函数
  //   console.log("render", typeof (createElement));
  //   return createElement('h1', '你好啊')
  // }

  // 3. 
  //render: createElement => createElement('h1', '你好啊')
  
  // 4. 
  //render: h => h('h1', '你好啊')

  // 将App组件放入容器中
  render: h => h(App),

})
//.$mount('#app')
