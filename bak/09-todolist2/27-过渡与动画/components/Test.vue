<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <h1 v-show="isShow" class="come">你好啊</h1> -->
    <!-- demo是样式前缀  appear渲染页面时就加载动画-->
    <transition name="demo" :appear="true">
        <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
    name: 'Test',
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

    @keyframes move1 {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }

    .come{
        animation: move1 1s;
    }

    .go{
        animation: move1 1s reverse;
    }


    .demo-enter-active{
        animation: move1 0.5s linear;
    }

    .demo-leave-active{
        animation: move1 0.5s linear reverse;
    }
</style>