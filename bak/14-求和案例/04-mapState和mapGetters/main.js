import Vue from 'vue'
import App from './App.vue'

// 引入自定义store
import store from './store/index'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    // 引入vuex 才能使用这个属性
    store,
    render: h => h(App),
})