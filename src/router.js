import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import DetailProd from './views/products/Detail.vue';
import Products from './views/products/Index.vue';
import Signup from './views/Signup.vue'
import Users from './views/Users.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      // component: () => import(/* webpackChunkName: "chunk-about" */ './views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "chunk-contact" */ './views/Contact.vue') // Lazy-loading
    },
    {
      path: '/users/:id',
      name: 'Users',
      component: Users,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    { path: '/products', name: 'products', component: Products },
    { path: '/detailprod/:id', name: 'detailprod', component: DetailProd },
  ]
})
