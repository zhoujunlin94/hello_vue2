export default {
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