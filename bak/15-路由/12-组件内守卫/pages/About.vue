<template>
  <h2>我是About内容</h2>
</template>

<script>
export default {
    name: 'About',

    // 组件的beforeRouteEnter和beforeRouteLeave只会在相应时机调用一次    不想全局前置后置一起前置后置成对调用

    // 通过路由规则  进入该组件时被调用 （不是通过路由规则展示该组件的 不会调用此方法）
    beforeRouteEnter: (to, from, next)=>{
      console.log('About#beforeRouteEnter', to, from)
      if(to.meta.needAuth){
        if(localStorage.getItem('next') === 'yes'){
            next()
        }else{
            alert('无权查看')
        }
      }else{
        next()
      }
    },

    // 通过路由规则  离开该组件时被调用
    beforeRouteLeave:(to,from,next) => {
      console.log('About#beforeRouteLeave', to, from);
      next()
    }
}
</script>

<style>

</style>