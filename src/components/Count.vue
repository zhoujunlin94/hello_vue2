<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <!-- <h3>当前求和放大十倍为：{{ $store.state.sum*10 }}</h3> -->
    <h3>当前求和放大十倍为：{{ $store.getters.bigSum }}</h3>
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