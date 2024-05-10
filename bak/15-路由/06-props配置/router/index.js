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
            path: '/about',  
            component: About 
        },
        {
            path: '/home',
            component: Home,
            children:[
                {
                    path: 'news',   
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children:[
                        {   
                            name: 'xiangqing',
                            // 绑定参数到params中
                            // path: 'detail/:id/:title',  
                            path: 'detail',  
                            component: Detail,
                            // 第一种：props对象写法  用的少  传递的是死数据
                            // props:{id:666,title:"你好啊"},
                            
                            // 第二种：props布尔值写法  值为真 将该组件收到的所有params参数以props形式传递给Detail组件
                            // props: true

                            // 第三种：props函数写法
                            // props($route){
                            //     // 写死数据
                            //     // return {id:666,title:"你好啊"}                                
                            //     return {id:$route.query.id, title:$route.query.title}                                
                            // }
                            
                            // 解构 
                            props({query:{id,title}}){
                                return {id, title} 
                            }
                        },
                    ]
                },
            ]
        },
    ]
})

export default router