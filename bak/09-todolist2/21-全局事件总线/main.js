import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 方式一
const MsgBusVC = Vue.extend({})
const MsgBus = new MsgBusVC()
Vue.prototype.$msgbus = MsgBus

new Vue({
    el: '#app',
    render: h => h(App),
    // 方式二
    beforeCreate(){
        // 安装全局事件总线
        Vue.prototype.$msgbus = this
    }
})