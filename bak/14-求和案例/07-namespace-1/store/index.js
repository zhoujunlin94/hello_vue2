// 该文件用于创建vuex中最核心的 store   跨多组件使用

// 引入vuex  npm i vuex@3
import Vuex from 'vuex'
import Vue from 'vue'
// 使用vuex插件
Vue.use(Vuex)

// Count组件相关配置项
const countOptions = {
    // 开启命名空间  否则map相关方法无法使用
    namespaced: true,
    actions:{
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
    },
    mutations:{
        JIA:function(state, value){
            state.sum += value
        },
        JIAN(state, value){
            state.sum -= value
        },
    },
    state:{
        sum: 0, 
        school: '清华大学',
        subject: '计算机',
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    }
}

const personOptions = {
    namespaced: true,
    mutations:{
        ADD_PERSON(state, value){
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001', name: '张三'}
        ]
    }

}


// 创建store(前提是先应用vuex插件Vue.use(Vuex))
const store = new Vuex.Store({
    modules:{
        countAbout: countOptions,
        personAbout: personOptions
    }
})

// 暴露store
export default store