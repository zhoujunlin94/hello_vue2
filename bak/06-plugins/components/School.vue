<template>
    <div>
        <!-- 测试全局过滤器 -->
        <h2>学校名字：{{ name | mySlice }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <!-- 测试全局Vue原型方法 -->
        <button @click="test">测试Vue原型方法hello</button>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: '北京大学copycopy',
            address: '北京',
        }
    },
    methods:{
        test(){
            this.hello()
        }
    } 
}
</script>