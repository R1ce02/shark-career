import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
// import Apply from '../views/Apply.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/apply',
  //   name: 'Apply',
  //   component: Apply
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
