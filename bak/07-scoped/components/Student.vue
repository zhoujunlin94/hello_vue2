<template>
    <div class="test">
        <h2 class="title">学生姓名：{{ name }}</h2>
        <h2 class="aaa">学生性别：{{ sex }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: 'lisi',
            sex: 'man'
        }
    }
}
</script>
<!-- 
查看某个依赖版本
npm view less-loader version
安装某个版本依赖
npm i less-loader@7
-->
<style lang="less" scoped>
    .test{
        background-color: skyblue;
        .aaa{
            font-size: 40px;
        }
    }
</style>