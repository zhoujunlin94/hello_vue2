// 该文件用于创建整个应用的路由器

// 引入路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'

// 创建一个路由器
const router = new VueRouter({
    routes:[
        {
            path: '/about',  // 路由路径 router-link的to配置值
            component: About  // 路由组件
        },
        {
            path: '/home',
            component: Home
        },
    ]
})

export default router