<template>
    <div class="container">
        <Category title="游戏">
            <!-- 作用域插槽 必须使用 template-->
            <template slot-scope="app">
                <ul>
                    <li v-for="(game, idx) in app.games" :key="idx">{{ game }}</li>
                </ul>
            </template>
        </Category>

        <Category title="游戏">
            <template slot-scope="app">
                <ol>
                    <li style="color: red;"  v-for="(game, idx) in app.games" :key="idx">{{ game }}</li>
                </ol>
                <h4>{{ app.msg }}</h4>
            </template>
        </Category>

        <Category title="游戏">
            <template slot-scope="{games}">
                <h4 v-for="(game, idx) in games" :key="idx">{{ game }}</h4>
            </template>
        </Category>
  </div>
</template>

<script>
import Category from './components/Category'

export default {
    name: 'App',
    components: {Category},
    data() {
        return {
            // games:['LOL', '多多自走棋', 'DNF', '穿越火线'],
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