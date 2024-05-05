<template>
    <div class="container">
        <Category title="美食">
            <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"/>
        </Category>
        <Category title="游戏">
            <ul>
                <li v-for="(game, idx) in games" :key="idx">{{ game }}</li>
            </ul>
        </Category>
        <Category title="电影">
            <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
        </Category>
  </div>
</template>

<script>
import Category from './components/CategoryV2'

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
    .container{
        display: flex;
        justify-content: space-around;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
</style>