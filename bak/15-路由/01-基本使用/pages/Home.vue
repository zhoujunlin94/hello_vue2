<template>
  <h2>我是Home内容</h2>
</template>

<script>
export default {
    name: 'Home',
    // 每次路由切换时都会销毁上一个组件  挂载当前组件
    mounted(){
      console.log("Home组件挂载完毕", this);
    },
    beforeDestroy(){
      console.log("Home组件即将被销毁");
    }
}
</script>

<style>

</style>