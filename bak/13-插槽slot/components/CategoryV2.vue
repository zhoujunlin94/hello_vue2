<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个默认插槽  （挖个坑  等着组件使用者使用时进行填充） -->
    <slot>这是默认值！！！(使用者没有填充时用我)</slot>
  </div>
</template>

<script>
export default {
    name: 'CategoryV2',
    props:['title']
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