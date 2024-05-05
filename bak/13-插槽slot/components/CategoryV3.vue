<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 具名插槽 -->
    <slot name="center">这是插槽1！！！(使用者没有填充时用我)</slot>
    <slot name="footer">这是插槽2！！！(使用者没有填充时用我)</slot>
  </div>
</template>

<script>
export default {
    name: 'Category',
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