<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="sendStudentName">发送学生名字</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: 'lisi',
            sex: 'man'
        }
    },
    methods:{
        sendStudentName(){
            // 触发Student组件实例身上的event1事件
            // this.$emit('event1')
            this.$emit('sendStudentName', this.name,666,88,99)
        }
    }
}
</script>
<style lang="less" scoped>
    .student{
        background-color: pink;
        padding: 5px;
        margin-top: 40px;
    }
</style>