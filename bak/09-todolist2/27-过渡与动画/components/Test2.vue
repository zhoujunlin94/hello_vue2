<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <!-- <transition name="demo" :appear="true">
        <h1 v-show="isShow">你好啊</h1>
    </transition> -->

    <!-- transition只能针对一个标签   transition-group是个组合 但每个标签必须key-->
    <transition-group name="demo" :appear="true">
        <h1 v-show="isShow" key="k1">你好啊</h1>
        <h1 v-show="!isShow" key="k2">VUE</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
    name: 'Test2',
    data() {
        return {
            isShow: true
        }
    },
}
</script>

<style scoped>
    h1{
        background-color: orange;
    }

    /* 进入的起点,离开的终点 */
    .demo-enter, .demo-leave-to{
        transform: translateX(-100%);
    }

    /* 进入的终点, 离开的起点 */
    .demo-enter-to, .demo-leave{
        transform: translateX(0px);
    }

    .demo-enter-active, .demo-leave-active{
        transition: 0.5s linear;
    }

</style>