import Vue from 'vue'
import App from './App.vue'
import {a,b} from './mixin';

Vue.config.productionTip = false
// 全局引入mixin
Vue.mixin(a)
Vue.mixin(b)

new Vue({
    el: '#app',
    render: h => h(App)
})