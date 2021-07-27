import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Career-Home.vue';
import references from '../views/References.vue';
import vacancies from '../views/Vacancies.vue';
import application from '../views/ApplicationForm.vue';
import solutions from '../views/Solutions.vue';
// import Apply from '../views/Apply.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/references',
    name: 'References',
    component: references
  },
  {
    path: '/vacancies',
    name: 'Vacancies',
    component: vacancies
  },
  {
    path: '/apply/:id',
    name: 'Application',
    component: application
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: solutions
  }
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
