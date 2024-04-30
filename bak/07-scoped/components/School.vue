<template>
    <div class="test">
        <h2 class="title">学校名字：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: '北京大学copycopy',
            address: '北京',
        }
    }
}
</script>

<style scoped>
/* 所有组件的样式最终会汇总 同名样式按照导入App.vue顺序覆盖 */
/* 添加scoped  限制样式只针对局部组件 F12查看最终样式 */
.test {
    background-color: orange;
}
</style>