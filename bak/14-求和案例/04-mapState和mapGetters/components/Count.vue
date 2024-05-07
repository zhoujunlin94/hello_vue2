<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大十倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <select v-model.number="n">
        <!-- <option :value="1">1</option> -->
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
    name: 'Count',
    data() {
        return {
            // 当前用户选择的数
            n: 1,
            // 求和
            // sum: 0
        }
    },
    computed:{
        // 程序员自己写的计算属性 麻烦~~~
        // he(){
        //     return this.$store.state.sum
        // },
        // xuexiao(){
        //     return this.$store.state.school
        // },
        // xueke(){
        //     return this.$store.state.subject
        // },
        // mapState返回的是一个json对象（key是属性名  value是函数） ...平铺出来   =>  vuex bindings
        // ...mapState({he:'sum', xuexiao:'school', 'xueke': 'subject'}),
        // ...mapState({sum:'sum', school:'school', subject: 'subject'}),
        // 数组写法
        ...mapState(['sum', 'school', 'subject']),

        // bigSum(){
        //     return this.$store.getters.bigSum
        // }
        // ...mapGetters({bigSum:'bigSum'}),
        ...mapGetters(['bigSum'])
    },
    methods:{
        increment(){
            // Count组件vc对象中存在$store
            // vc->dispatch->actions->commit->mutations->render->vc
            this.$store.commit('JIA', this.n)
        },
        decrement(){
            this.$store.commit('JIAN', this.n)
        },
        incrementOdd(){
            this.$store.dispatch('jiaOdd', this.n)
        },
        incrementWait(){
            this.$store.dispatch('jiaWait', this.n)
        }
    },
    mounted(){
        // Count组件中存在$store
        console.log('Count组件：', this);
    }
}
</script>

<style>
button{
    margin-left: 5px;
}
</style>