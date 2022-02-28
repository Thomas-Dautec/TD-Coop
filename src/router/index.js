import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
 /* {
    path: '/',
    name: 'Home',
    component: Home
  },*/
  {
    path: '/creation-compte',
    name: 'CreationCompte',
    component: () => import('../views/CreationCompte.vue')
  },
  {
    path: '/',
    name: 'Connexion',
    component: () => import('../views/Connexion.vue')
  },
  {
    path: '/conversations',
    name: 'Conversations',
    component: () => import('../views/Conversations.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/membres',
    name: 'Membres',
    component: () => import('../views/Membres.vue')
  },
  {
    path: '/creation-conversation',
    name: 'convers',
    component: () => import('../views/Conversation.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
