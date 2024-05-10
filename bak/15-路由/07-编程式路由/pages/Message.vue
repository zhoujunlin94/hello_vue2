<template>
    <div>
		<ul>
			<li v-for="message in messageList" :key="message.id">
				<router-link :to="{
					name: 'xiangqing',
					query:{
						id: message.id,
						title: message.title
					}
				}">{{ message.title }}</router-link>
				<button @click="pushShow(message)">push查看</button>
				<button @click="relaceShow(message)">replace查看</button>
			</li>
		</ul>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
    name: 'Message',
	data() {
		return {
			messageList:[
				{id:'001', title:'消息001'},
				{id:'002', title:'消息002'},
				{id:'003', title:'消息003'},
			]
		}
	},
	methods:{
		pushShow(message){
			// 编程式路由跳转（可以写自己逻辑  比如等待1s后再跳转）
			this.$router.push({
				name: 'xiangqing',
				query:{
					id: message.id,
					title: message.title
				}
			})
		},
		relaceShow(message){
			this.$router.replace({
				name: 'xiangqing',
				query:{
					id: message.id,
					title: message.title
				}
			})
		},
	}
}
</script>

<style>

</style>