// 该文件用于创建整个应用的路由器

// 引入路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建一个路由器
const router = new VueRouter({
    routes:[
        {
            name: 'guanyu',
            path: '/about',  // 路由路径 router-link的to配置值
            component: About  // 路由组件
        },
        {
            path: '/home',
            component: Home,
            // 嵌套路由
            children:[
                {
                    path: 'news',   // 子路由不需要`/`
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children:[
                        {   
                            name: 'xiangqing',
                            path: 'detail',  
                            component: Detail,
                        },
                    ]
                },
            ]
        },
    ]
})

export default router