<template>
    <div>
		<ul>
			<li v-for="message in messageList" :key="message.id">
				<!-- <router-link to="/home/message/detail/6666/你好啊">{{ message.title }}</router-link> -->
				
				<!-- 跳转路由并携带params参数  to的模板字符串写法 -->
				<!-- <router-link :to="`/home/message/detail/${message.id}/${message.title}`">{{ message.title }}</router-link> -->
				
				<!-- 跳转路由并携带query参数  to的对象写法 -->
				<router-link :to="{
					// path: '/home/message/detail',
					name: 'xiangqing',
					// 想要传递params  必须使用命名路由的写法  不能使用path配置项
					query:{
						id: message.id,
						title: message.title
					}
				}">{{ message.title }}</router-link>
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
}
</script>

<style>

</style>