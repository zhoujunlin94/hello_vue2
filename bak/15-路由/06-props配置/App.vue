<template>
    <div>
        <div class="row">
            <Banner></Banner>
        </div>

        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!-- 默认浏览器历史为push模式（追加历史记录） 这里改为replace模式（替换当前历史记录）-->
                    <router-link replace class="list-group-item" active-class="active" to="/about">About</router-link>
                    <router-link replace class="list-group-item" active-class="active" to="/home/message">Home</router-link>
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

export default {
    name: 'App',
    components: {Banner},
    data() {
        return {
        }
    }
}
</script>
<style scoped>

</style>