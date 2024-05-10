import Vue from 'vue'
import App from './App.vue'
// 安装vue-router并导入   npm i vue-router@3
import VueRouter from 'vue-router'
import router from './router/index.js'

Vue.config.productionTip = false
// 引用插件
Vue.use(VueRouter)

new Vue({
    el: '#app',
    render: h => h(App),
    router
})