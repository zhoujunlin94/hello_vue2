<template>
    <ul>
		<!-- 路由切换的时候输入框输入的内容会被清空   因为路由切换会销毁组件  每次切换重新挂载组件 -->
		<!-- 想要不清空内容  路径切换时就不能销毁组件 找到路由展示区router-view  News在Home组件中 -->
		<li>news001 <input type="text"/></li>
		<li>news002 <input type="text"/></li>
		<li>news003 <input type="text"/></li>
	</ul>
</template>

<script>
export default {
    name: 'News'
}
</script>

<style>

</style>