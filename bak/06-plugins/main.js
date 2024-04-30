import Vue from 'vue'
import App from './App.vue'

// 引入插件
import pluginA from './plugins'

Vue.config.productionTip = false
// 应用插件  可传参
Vue.use(pluginA, 1, 2, 3)

new Vue({
    el: '#app',
    render: h => h(App)
})