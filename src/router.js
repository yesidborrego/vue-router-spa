import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
<<<<<<< HEAD
=======
import Users from './views/Users.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
>>>>>>> parent of 8647629... New routes, bootstrap 4 added and finish

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
<<<<<<< HEAD
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
=======
      component: () => import(/* webpackChunkName: "chunk-about" */ './views/About.vue')
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
>>>>>>> parent of 8647629... New routes, bootstrap 4 added and finish
    }
  ]
})
