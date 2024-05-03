<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="sendStudentName">把学生名字传给学校组件</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: 'lisi',
            sex: 'man',
        }
    },
    mounted(){
        //console.log("Student", this.msgbus);
    },
    methods:{
        sendStudentName(){
            this.$msgbus.$emit('getStudentName', this.name)
        }
    }
}
</script>
<style scoped>
    .student{
        background-color: pink;
        padding: 5px;
        margin-top: 40px;
    }
</style>