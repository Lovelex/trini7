import Vue from 'vue'
import VueRouter from 'vue-router'

// MAIN VIEWS
import Main from '../views/main/Main'

// ADMIN VIEWS
import Admin from '../views/admin/Admin'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { name: 'Main' }
    },
    {
      name: 'Main',
      path: '/home',
      component: Main
    },
    {
      name: 'Admin',
      path: '/admin',
      component: Admin
    }
  ]
})

export default router
