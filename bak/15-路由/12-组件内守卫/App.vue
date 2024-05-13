<template>
    <div>
        <div class="row">
            <!-- 不是通过路由形式展示的About组件  不会调用beforeRouteEnter方法 -->
            <About/>
            <Banner/>
        </div>

        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
                    <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import About from './pages/About.vue'

export default {
    name: 'App',
    components: {Banner, About},
    data() {
        return {
        }
    }
}
</script>
<style scoped>

</style>