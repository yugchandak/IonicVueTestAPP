import { createRouter, createWebHistory } from '@ionic/vue-router';
import memories from '../pages/memories'
import details from '../pages/details'
import AddMemoryPage from '../pages/AddMemoryPage'

const routes= [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    component:memories,
  },
  {
    path: '/memories/:id',
    component: details,
  },
  {
    path: '/memories/add',
    component: AddMemoryPage,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
