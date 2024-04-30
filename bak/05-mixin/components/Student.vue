<template>
    <div>
        <h2 @click="showName">学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
    </div>
</template>

<script>
// 局部引入 混入  实现复用
//import {a, b} from '../mixin'

export default {
    name: 'Student',
    data() {
        return {
            name: 'lisi',
            sex: 'man'
        }
    },
    // methods:{
    //     showName(){
    //         alert(this.name)
    //     }
    // }
    //mixins: [a, b]
}
</script>