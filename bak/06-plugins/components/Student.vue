<template>
    <div>
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <!-- 测试全局指令 -->
        <input type="text" v-fbind:value="name">
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