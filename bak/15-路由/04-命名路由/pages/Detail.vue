<template>
    <ul>
        <li>消息编号：{{ $route.query.id }}</li>
        <li>消息标题：{{ $route.query.title }}</li>
    </ul>
</template>

<script>
export default {
    name: 'Detail',
    mounted(){
        console.log("Detail组件路由信息：", this.$route);
    }
}
</script>

<style>

</style>