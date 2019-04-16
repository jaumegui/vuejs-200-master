import VueRouter from 'vue-router'

import Home from './Home.vue'
import People from './People.vue'


const routes = [
  {
    name: 'home',
    path: '/home',
    component: Home
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'people',
    path: '/people',
    component: People
  }
]

export default new VueRouter({
  routes
})