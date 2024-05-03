<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <h2>求和：{{ number }}</h2>
        <button @click="sumNumber">点我number++</button>
        <button @click="sendStudentName">发送学生名字</button>
        <button @click="unbindSendStudentName">解绑发送学生名字事件</button>
        <button @click="death">销毁当前Student组件的实例</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: 'lisi',
            sex: 'man',
            number: 0
        }
    },
    methods:{
        sumNumber(){
            this.number++
        },
        sendStudentName(){
            this.$emit('sendStudentName', this.name)
        },
        unbindSendStudentName(){
            this.$off('sendStudentName')
        },
        death(){
            this.$destroy()
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