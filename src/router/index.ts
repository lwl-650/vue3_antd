import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import routes from "./routes/routes"

const router = createRouter({
    routes,
    history: createWebHistory()
})
router.beforeEach((to: any, from: any, next: any) => {
    console.log(to)
    console.log(localStorage.getItem('token') == null)
    console.log(to.path != '/login')
    if (to.path != '/login') {
        next({ path: '/login' })
    } else {
        next()
    }
})

// router.beforeResolve((to, from, next) => {
//     // console.log("beforeResolve...")
//     next()
// })
// router.afterEach((to, from) => {
//     // console.log("afterEach...")
//     // console.log(from)
// })
export default router