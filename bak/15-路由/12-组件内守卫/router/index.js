import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

const router = new VueRouter({
    routes:[
        {
            name: 'guanyu',
            path: '/about',  
            component: About,
            meta:{
                title: '关于',
                needAuth: true
            }
        },
        {   
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta:{
                title: '主页'
            },
            children:[
                {   
                    name: 'xinwen',
                    path: 'news',   
                    component: News,
                    meta:{
                        title: '新闻'
                    }
                },
                {   
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta:{
                        title: '消息'
                    },
                    children:[
                        {   
                            name: 'xiangqing',
                            path: 'detail',  
                            component: Detail,
                            meta:{
                                title: '详情'
                            },
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

router.afterEach((to, from)=>{
    document.title = to.meta.title || '学习路由'
})

export default router