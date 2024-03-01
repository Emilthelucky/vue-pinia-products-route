import { createRouter, createWebHistory } from 'vue-router'
import EachBook from '../components/EachBook.vue'
import AllBooks from '../components/AllBooks.vue'

const routes = [
    {
      path: '/:id',
      name: 'EachBook',
      component: EachBook
    },
    {
        path: '/allbooks',
        name: 'AllBooks',
        component: AllBooks
    },
  ]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router