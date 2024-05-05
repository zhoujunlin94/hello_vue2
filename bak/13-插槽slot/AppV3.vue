<template>
    <div class="container">
        <Category title="美食">
            <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"/>
            <a slot="footer" href="http://www.baidu.com">更多美食</a>
        </Category>
        <Category title="游戏">
            <ul slot="center">
                <li v-for="(game, idx) in games" :key="idx">{{ game }}</li>
            </ul>
            <!-- 只将标签+slot放入插槽 &nbsp;这些东西不行  <br slot="footer"/>这样可以 -->
            <div slot="footer" class="foot">
                <a href="http://www.google.com">单机游戏</a> 
                <a href="http://www.baidu.com">ONLINE</a>
            </div>
        </Category>
        <Category title="电影">
            <video slot="center" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
            <!-- <template slot="footer"> -->
            <template v-slot:footer>
                <div class="foot">
                    <a href="http://www.google.com">经典</a> 
                    <a href="http://www.google.com">热门</a> 
                    <a href="http://www.google.com">推荐</a> 
                </div>
                <h4>欢迎前来观影</h4>
            </template>
        </Category>
  </div>
</template>

<script>
import Category from './components/CategoryV3'

export default {
    name: 'App',
    components: {Category},
    data() {
        return {
            foods: ['火锅', '牛排', '煲仔饭', '牛肉面'],
            games:['LOL', '多多自走棋', 'DNF', '穿越火线'],
            films:['《教父》','《海上钢琴师》', '《肖生克救赎》','《阿甘正传》']
        }
    },
}
</script>
<style scoped>
    .container, .foot{
        display: flex;
        justify-content: space-around;
    }
    h4{
        text-align: center;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
</style>