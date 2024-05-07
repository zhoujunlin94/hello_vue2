<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大十倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    name: 'Count',
    data() {
        return {
            n: 1,
        }
    },
    computed:{
        ...mapState(['sum', 'school', 'subject']),
        ...mapGetters(['bigSum']),
    },
    methods:{
        // 程序员自己写方法
        // increment(){
        //     // Count组件vc对象中存在$store
        //     // vc->dispatch->actions->commit->mutations->render->vc
        //     this.$store.commit('JIA', this.n)
        // },
        // decrement(){
        //     this.$store.commit('JIAN', this.n)
        // },
        // 生成对应方法 调用commit去联系对应的mutations (对象写法)
        ...mapMutations({increment:'JIA', decrement:'JIAN'}),
        // 数组写法 主要方法名调整一致
        // ...mapMutations(['JIA', 'JIAN']),

        // incrementOdd(){
        //     this.$store.dispatch('jiaOdd', this.n)
        // },
        // incrementWait(){
        //     this.$store.dispatch('jiaWait', this.n)
        // },
        // 生成对应方法 调用dispatch去联系对应的actions (对象写法)
        ...mapActions({incrementOdd:'jiaOdd', 'incrementWait':'jiaWait'})
        // 数组写法
        // ...mapActions(['jiaOdd', 'jiaWait'])
    }
}
</script>

<style>
button{
    margin-left: 5px;
}
</style>