<template>
    <div class="school">
        <h2>学校名字：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="sendSchoolName">发送学校名字</button>
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
    props: ['getSchoolName'],
    methods:{
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    }
}
</script>

<style scoped>
.school {
    background-color: skyblue;
    padding: 5px;
}
</style>