// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

// const routes = [
//   {
//     name: '首页',
//     path: '/index',
//     component: () => import('../views/index.vue'),
//   }
// ];

// const router = new VueRouter({
//   mode: 'history',
//   routes
// })

// export default router


import { createRouter, createWebHistory } from 'vue-router'

// import Vue from 'vue'
// import VueRouter from 'vue-router'


const routes = [
   
    {
        path: '/',
        redirect: '/index'
    },
    {
        name: '首页',
        path: '/index',
        component: () => import('../views/index.vue'),
    }
];

const router =  createRouter({
  routes,
  history:createWebHistory()
})

export default router



