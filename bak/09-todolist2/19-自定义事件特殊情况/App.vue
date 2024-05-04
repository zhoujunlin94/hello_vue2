<template>
    <div class="app">
        <h1>{{ msg }}, 学生姓名：{{ studentName }}</h1>
        <School :getSchoolName="getSchoolName"/>
        <!-- <Student @sendStudentName="getStudentName"/> -->
        <Student ref="student" @click.native="show"/>
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
            msg: '你好啊',
            studentName: ''
        }
    },
    methods:{
        getSchoolName(schooName){
            console.log("App组件收到学校名字：", schooName);
        },
        getStudentName(studentName){
            console.log("App组件收到学生名字：", studentName);
            // this为App组件
            console.log(this);
            this.studentName = studentName
        },
        show(){
            alert("组件绑定原生DOM事件")
        }
    },
    mounted(){
        // 方式一  可行  推荐
        // this.$refs.student.$on('sendStudentName', this.getStudentName)
        
        // 方式二  不可行
        // this.$refs.student.$on('sendStudentName', function(studentName){
        //     console.log("App组件收到学生名字：", studentName);
        //     // this为App组件
        //     console.log(this);
        //     this.studentName = studentName
        // })
        
        // 方式三  可行  不推荐  箭头函数没有this  指向外层this
        this.$refs.student.$on('sendStudentName', (studentName)=>{
            console.log("App组件收到学生名字：", studentName);
            // this为App组件
            console.log(this);
            this.studentName = studentName
        })

    }
}
</script>

<style scoped>
.app {
    background-color: gray;
    padding: 5px;
}
</style>