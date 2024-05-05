<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <ul>
        <li v-for="(item, idx) in listData" :key="idx">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Category',
    props:['title', 'listData']
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