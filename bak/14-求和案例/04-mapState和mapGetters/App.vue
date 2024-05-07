<template>
    <div>
        <Count/>
    </div>
</template>

<script>
import Count from './components/Count'
export default {
    name: 'App',
    components: {Count},
    data() {
        return {
        }
    },
    mounted(){
        // 观察当前组件中是否存在$store  存在则vuex环境搭建成功
        //console.log('App组件：', this);
    }
}
</script>
<style scoped>

</style>