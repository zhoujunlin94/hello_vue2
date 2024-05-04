<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <School :getSchoolName="getSchoolName"/>
        <Student @sendStudentName="getStudentName" @demo="m1"/>
    </div>
</template>

<script>
import Student from './components/Student'
import School from './components/School'
export default {
    name: 'App',
    components: { Student, School },
    data() {
        return {
            msg: '你好啊'
        }
    },
    methods:{
        getSchoolName(schooName){
            console.log("App组件收到学校名字：", schooName);
        },
        getStudentName(studentName){
            console.log("App组件收到学生名字：", studentName);
        },
        m1(){
            console.log("m1....");
        }
    }
}
</script>

<style scoped>
.app {
    background-color: gray;
    padding: 5px;
}
</style>