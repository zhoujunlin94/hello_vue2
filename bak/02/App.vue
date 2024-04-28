<template>
  <!-- 创建一个App.vue文件汇总其余组件 将其余vue中创建的组件注册并编写组件标签 -->
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- 编写组件标签 -->
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components//Student";

export default {
  name: "App",
  components: { School, Student },
};
</script>