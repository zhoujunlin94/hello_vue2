<template>
    <div class="school">
        <h2>学校名字：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'School',
    data() {
        return {
            name: '北京大学',
            address: '北京',
        }
    },
    methods:{
        helloCall(msgName, data){
            console.log('School组件：有人发布了hello消息', msgName, data);
        }
    },
    mounted(){
        // this.subHelloId = pubsub.subscribe('hello', function(msgName, data){
        //     // undefined
        //     console.log(this);
        //     console.log('School组件：有人发布了hello消息', msgName, data);
        // })

        // this.subHelloId = pubsub.subscribe('hello', (msgName, data)=>{
        //     // VC
        //     console.log(this);
        //     console.log('School组件：有人发布了hello消息', msgName, data);
        // })

        this.subHelloId = pubsub.subscribe('hello', this.helloCall)
    },
    beforeDestroy(){
        pubsub.unsubscribe(this.subHelloId)
    }
}
</script>

<style scoped>
.school {
    background-color: skyblue;
    padding: 5px;
}
</style>