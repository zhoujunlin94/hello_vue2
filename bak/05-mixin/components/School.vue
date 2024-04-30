<template>
    <div>
        <h2 @click="showName">学校名字：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
// 局部引入 混入   实现复用
//import {a, b} from '../mixin'

export default {
    name: 'School',
    data() {
        return {
            name: '北京大学',
            address: '北京',
            // （data/methods）优先级高于混入  覆盖混入
            x: 666
        }
    },
    // 生命周期钩子  混入和组件自己的都会执行  不会覆盖
    mounted(){
        console.log("School mounted>>>>>>>>>");
    },
    // methods:{
    //     showName(){
    //         alert(this.name)
    //     }
    // }
    //mixins: [a,b]
}
</script>