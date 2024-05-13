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
            component: About,
            meta:{
                title: '关于'
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
                        // 自定义字段  用于判断当前路由是否需要校验权限
                        needAuth: true,
                        title: '新闻'
                    }
                },
                {   
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta:{
                        needAuth: true,
                        title: '消息'
                    },
                    children:[
                        {   
                            name: 'xiangqing',
                            path: 'detail',  
                            component: Detail,
                            meta:{
                                needAuth: true,
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

// 全局前置路由守卫  初始化的时候调用/每次路由切换之前调用(即路径不会发生变化)
router.beforeEach((to, from, next)=>{
    console.log("router beforeEach执行时机", to, from)
    // 如果需要校验的路由太多的话太麻烦
    // if(to.name === 'xiaoxi' || to.name === 'xinwen') {
    if(to.meta.needAuth) {
        // 放行
        if(localStorage.getItem('next') === 'yes'){
            next()
        }else{
            alert('无权查看')
        }
    }else{
        next();
    }
})

// 全局后置路由守卫  初始化的时候调用/每次路由切换之后调用  (一般用于切换成功即路径已经变化了 才做的事)
router.afterEach((to, from)=>{
    // 没有next
    console.log("router afterEach执行时机", to, from)
    // 路由切换成功更改页面标题
    document.title = to.meta.title || '学习路由'
})


export default router