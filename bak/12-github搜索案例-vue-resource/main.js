import Vue from 'vue'
import App from './App.vue'
// 引入vue-resource插件
import vueResource from 'vue-resource'

Vue.config.productionTip = false

// 这个插件不推荐  不咋用了  用axios多
Vue.use(vueResource)

new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$msgbus = this
    }
})