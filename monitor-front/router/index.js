import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/home')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/User')
            },
            {
                path: '/srcError',
                name: 'srcError',
                component: () => import('../views/srcError')
            },
            {
                path: '/performance',
                name: 'performance',
                component: () => import('../views/Performance')
            },
            {
                path: '/bigscreen',
                name: 'bigscreen',
                component: () => import('../views/bigscreen')
            }
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router