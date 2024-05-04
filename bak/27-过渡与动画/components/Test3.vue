<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <transition-group name="animate__animated animate__bounce"
    enter-active-class="animate__swing"
    leave-active-class="animate__backOutUp"
     :appear="true">
        <h1 v-show="isShow" key="k1">你好啊</h1>
        <h1 v-show="!isShow" key="k2">VUE</h1>
    </transition-group>
  </div>
</template>

<script>
// npm install animate.css  集成第三方样式
// 引入样式  https://animate.style/
import 'animate.css'
export default {
    name: 'Test3',
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
</style>