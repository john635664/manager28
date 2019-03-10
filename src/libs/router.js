import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import login from '../components/login';
import index from '../components/index'

let routes = [
    {
        path:'/login',
        component:login
    },
    {
        path:'/index',
        component:index
    },
    {
        path:'/',
        component:index
    },
]

let router = new VueRouter({
    routes
})


export default router;