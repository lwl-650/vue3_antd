import { RouteRecordRaw } from 'vue-router'
import index from "@/views/index/index.vue"
import login from '../../views/login/login.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
    },
    {
        path: '/texts',
        name: 'texts',
        component: () => import('@/views/texts/texts.vue'),
    },
    {
        path: "/login",
        name: "login",
        component: login
        // component: () => import('@/views/login/login.vue'),
    }
]

export default routes