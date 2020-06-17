import Vue from 'vue'
import VueRouter from 'vue-router'
import BookApp from '../views/BookApp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BookApp',
    component: BookApp
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
