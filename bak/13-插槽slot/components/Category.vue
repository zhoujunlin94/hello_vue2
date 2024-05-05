<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 作用域插槽  将games传给插槽使用者 App组件 -->
    <slot :games="games" msg="hello">这是插槽！！！(使用者没有填充时用我)</slot>
  </div>
</template>

<script>
export default {
    name: 'Category',
    props:['title'],
    data() {
        return {
            games:['LOL', '多多自走棋', 'DNF', '穿越火线'],
        }
    },
}
</script>

<style scoped>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
</style>