<template>
    <ul>
		<li :style="{opacity}">欢迎学习Vue</li>
		<li>news001 <input type="text"/></li>
		<li>news002 <input type="text"/></li>
		<li>news003 <input type="text"/></li>
	</ul>
</template>

<script>
export default {
    name: 'News',
	data() {
		return {
			opacity: 1
		}
	},
	// mounted(){
	// 	this.timer = setInterval(() => {
	// 		// 由于缓存了此组件  则路由切换后  这个定时器还是一直在执行。。。   不大好
	// 		console.log("run");
	// 		this.opacity -= 0.01
	// 		if(this.opacity <= 0){
	// 			this.opacity = 1
	// 		}
	// 	}, 16);
	// },
	// beforeDestroy(){
	// 	clearInterval(this.timer)
	// },
	activated(){
		this.timer = setInterval(() => {
			// 路由切换出去后  定时器停止  路由激活后 定时器运行
			console.log("run");
			this.opacity -= 0.01
			if(this.opacity <= 0){
				this.opacity = 1
			}
		}, 16);
	},
	deactivated(){
		clearInterval(this.timer)
	}
}
</script>

<style>

</style>