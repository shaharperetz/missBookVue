import Vue from 'vue'
import VueRouter from 'vue-router'
import BookApp from '../views/BookApp.vue'
import BookDetails from '../components/BookDetails.vue'
import AddBook from '../components/AddBook';
import About from '../views/About.vue';
import BookEdit from '../views/BookEdit'



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
  {
    path: '/about/',
    name: 'about',
    component: About
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: BookEdit

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
