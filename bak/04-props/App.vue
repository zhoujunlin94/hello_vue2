<template>
    <div>
        <!-- 多个Student就是多个VC实例  数据互不影响 -->
        <!-- <hr>
        <Student />
        <hr>
        <Student /> -->
        
        <!-- ref key等关键字不能使用 -->
        <!-- age动态绑定: 字符串->数字 运行表达式 -->
        <Student name="lisi" sex="女" :age="20"/>
        <!-- <hr>
        <Student name="张三" sex="男"/> -->
    </div>
</template>

<script>
import Student from './components/Student.vue'
export default {
    name: 'App',
    components: { Student },
}
</script>