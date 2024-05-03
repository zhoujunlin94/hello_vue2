<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <!-- 通过父组件给子组件传递函数类型的props  实现子组件给父组件传递数据 -->
        <School :getSchoolName="getSchoolName"/>

        <!-- 给Student的VC对象绑定自定义事件event1 当event1事件被触发时  demo方法被调用 (第一种写法  v-on  @)-->
        <!-- <Student v-on:event1="demo" @sendStudentName="getStudentName" /> -->
        <!-- .once 只绑定一次 -->
        <!-- <Student v-on:event1="demo" @sendStudentName.once="getStudentName" /> -->
        <!-- 第二种写法 ref 更加灵活  可以动态绑定事件  比如等一个请求结束后才绑定事件。。 -->
        <Student ref="student" />
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
        demo(){
            console.log("@@@@App组件", "demo");
        },
        getStudentName(studentName, ...params){
            console.log("App组件收到学生名字：", studentName, params);
        }
    },
    mounted(){  
        // 只注册一次
        // this.$refs.student.$once('sendStudentName', this.getStudentName)
        
        this.$refs.student.$on('sendStudentName', this.getStudentName)

        // 更加灵活  3s之后才绑定事件
        // setTimeout(()=>{
        //     this.$refs.student.$on('sendStudentName', this.getStudentName)
        // }, 3000)
        
    }
}
</script>


<style scoped>
.app {
    background-color: gray;
    padding: 5px;
}
</style>