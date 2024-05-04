import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    mounted(){
        // 延迟3秒销毁vm对象   销毁后所有子组件以及子组件的事件不生效
        // setTimeout(()=>{
        //     this.$destroy()
        // }, 3000)
    }
})