// 该文件用于创建vuex中最核心的 store   跨多组件使用

// 引入vuex  npm i vuex@3
import Vuex from 'vuex'
import Vue from 'vue'
import countOptions from './count'
import personOptions from './person'

// 使用vuex插件
Vue.use(Vuex)


// 创建store(前提是先应用vuex插件Vue.use(Vuex))
const store = new Vuex.Store({
    modules:{
        countAbout: countOptions,
        personAbout: personOptions
    }
})

// 暴露store
export default store