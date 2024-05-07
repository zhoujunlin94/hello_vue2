// 该文件用于创建vuex中最核心的 store   跨多组件使用

// 引入vuex  npm i vuex@3
import Vuex from 'vuex'
import Vue from 'vue'
// 使用vuex插件
Vue.use(Vuex)

// 准备actions-用于响应组件中的动作
const actions = {
    jiaOdd(context, value){
        // 处理好逻辑再commit
        if(context.state.sum % 2){
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value){
        // 处理好逻辑再commit
        setTimeout(()=>{
            context.commit('JIA', value)
        }, 500)
    }
}
// 准备actions-用于操作数据（state）
const mutations = {
    JIA:function(state, value){
        state.sum += value
    },
    JIAN(state, value){
        state.sum -= value
    }
}
// 准备state-用于存储数据（state）
const state = {
    sum: 0, // 求和
    school: '清华大学',
    subject: '计算机'
}

// 准备getters-用于将state中数据加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

// 创建store(前提是先应用vuex插件Vue.use(Vuex))
const store = new Vuex.Store({
    actions, mutations, state, getters
})

// 暴露store
export default store