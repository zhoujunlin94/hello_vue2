<template>
  <div>
    <h1 v-text="msg" id="title" ref="titleRef"></h1>
    <button @click="showDOM" ref="btn">点我输出DOM</button>
    <School ref="sch" id="sch"/>
  </div>
</template>

<script>
import School from './components/School.vue'
export default {
    name: 'App',
    components: {School},
    data() {
        return {
            msg: '欢迎学习vue2'
        }
    },
    methods:{
        showDOM(){
            console.log("A", document.getElementById('title'));  // DOM元素
            console.log("B",this.$refs.titleRef); // DOM元素
            console.log("C",this.$refs.btn);  // DOM元素
            console.log("D",this.$refs.sch);   // 组件实例对象 VC
            console.log("E", document.getElementById('sch')); // DOM元素
        }
    }
}
</script>

<style>

</style>