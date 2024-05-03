<template>
    <div class="school">
        <h2>学校名字：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: '北京大学',
            address: '北京',
        }
    },
    mounted(){
        //console.log("School", this.msgbus);
        this.$msgbus.$on('getStudentName', (studentName)=>{
            console.log("School组件接收到学生名：", studentName);
        })
    },
    beforeDestroy(){
        this.$msgbus.$off('getStudentName')
    }
}
</script>

<style scoped>
.school {
    background-color: skyblue;
    padding: 5px;
}
</style>