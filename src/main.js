import Vue from 'vue'
import App from './App.vue'
// npm i element-ui  引入ElementUI
import ElementUI from 'element-ui';
// 引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
// 引用插件
Vue.use(ElementUI)

new Vue({
    el: '#app',
    render: h => h(App),
})