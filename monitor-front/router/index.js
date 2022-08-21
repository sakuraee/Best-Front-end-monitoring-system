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
            }, {
                path: '/http',
                name: 'http',
                component: () => import('../views/http')
            }, {
                path: '/apiError',
                name: 'apiError',
                component: () => import('../views/apiError')
            },
            {
                path: '/jsError',
                name: 'jsError',
                component: () => import('../views/jsError')
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
            },
            {
                path: '/userData',
                name: 'userData',
                component: () => import('../views/userData')
            },
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router