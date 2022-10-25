import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'
import ProductDetails from '../views/product-details/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products/:id',
    name: 'productDetails',
    component: ProductDetails,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
