import Vue from 'vue'
import VueRouter from 'vue-router'
import BookApp from '../views/BookApp.vue'
import BookDetails from '../components/BookDetails.vue'
import AddBook from '../components/AddBook';



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BookApp',
    component: BookApp,
    children: [
      {
        path: 'add',
        name: 'add-book',
        component: AddBook
      }
    ]
  },
  {
    path: '/details/:id',
    name: 'details',
    component: BookDetails
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
