<template>
    <div class="container">
        <Category title="美食" :listData="foods" />
        <Category title="游戏" :listData="games" />
        <Category title="电影" :listData="films" />
  </div>
</template>

<script>
import Category from './components/CategoryV1'

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
<style>
    .container{
        display: flex;
        justify-content: space-around;
    }
</style>