import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/components/Login.vue'
import ArticleDetail from '@/components/ArticleDetail.vue'
import ArticlesList from '@/components/ArticlesList'
import ArticlesListByTag from '@/components/ArticlesListByTag'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home,
            children:[
                {
                    path:'',
                    component:ArticlesList
                },
                {
                    path:'articleByTag',
                    name:'articleByTag',
                    component:ArticlesListByTag
                 },
            ]
        },
       
        {
            path: '/login',
            name: "Login",
            component: Login
        },
        {
            path: '/article',
            name: "article",
            component:ArticleDetail
        },
    
    ]
})
