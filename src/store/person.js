export default {
    namespaced: true,
    actions:{
        addPersonWang(context, value){
            if(value.name.indexOf('王') === 0) {
                    context.commit('ADD_PERSON', value)
            }else{
                alert('添加的人必须姓王')
            }
        },
        // 不需要value
        // addPersonFromServer(context){
        //     // 请求服务器获取名字再添加。。。
        // }
    },
    mutations:{
        ADD_PERSON(state, value){
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001', name: '张三'}
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}