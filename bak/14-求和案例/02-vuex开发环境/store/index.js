// 该文件用于创建vuex中最核心的 store

// 引入vuex  npm i vuex@3
import Vuex from 'vuex'
import Vue from 'vue'
// 使用vuex插件
Vue.use(Vuex)

// 准备actions-用于响应组件中的动作
const actions = {}
// 准备actions-用于操作数据（state）
const mutations = {}
// 准备state-用于存储数据（state）
const state = {}

// 创建store(前提是先应用vuex插件Vue.use(Vuex))
const store = new Vuex.Store({
    actions, mutations, state
})

// 暴露store
export default store