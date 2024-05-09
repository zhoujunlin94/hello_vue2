<template>
    <div>
        <div class="row">
            <Banner></Banner>
        </div>

        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!-- 多html的跳转方式 -->
                    <!-- <a class="list-group-item active" href="./about.html">About</a>
                    <a class="list-group-item" href="./home.html">Home</a> -->

                    <!-- 会转成a标签 如果原始不是a标签呢，比如是图片、按钮等->编程式路由  -->
                    <!-- 借助router-link实现路由的切换 -->
                    <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
                    <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <!-- 指定组件的呈现位置 -->
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'

export default {
    name: 'App',
    // 一般组件：Banner    路由组件：Home  About
    components: {Banner},
    data() {
        return {
        }
    }
}
</script>
<style scoped>

</style>