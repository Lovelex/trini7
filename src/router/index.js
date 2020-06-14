import Vue from 'vue'
import VueRouter from 'vue-router'

// MAIN VIEWS
import Main from '../views/main/Main'

// ADMIN VIEWS
import Admin from '../views/admin/Admin'
import Login from '../views/admin/Login'
import AdminMessages from '../views/admin/AdminMessages'
import AdminDepositions from '../views/admin/AdminDepositions'

import { auth } from '../plugins/firebase'


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
      beforeEnter(to, from, next) {
        auth.currentUser 
          ? next({ name: 'AdminMessages' })
          : next()
      },
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      beforeEnter(to, from, next) {
        auth.currentUser 
          ? next()
          : next({ name: 'Login' })
      },
      path: '/admin',
      component: Admin,
      children: [
        {
          name: 'Admin',
          path: '',
          redirect: { name: 'AdminMessages' }
        },
        {
          name: 'AdminMessages',
          path: '/mensagens',
          component: AdminMessages
        },
        {
          name: 'AdminDepositions',
          path: '/depoimentos',
          component: AdminDepositions
        }
      ]
    }
  ]
})

export default router
