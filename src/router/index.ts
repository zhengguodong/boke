import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home.vue'
import more from '../views/more.vue'
import talk from '../views/talk.vue'
import test from '../components/test.vue'
import testzz from "../views/test.vue"
import blog from "../views/blog.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/blog',
    component: blog
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/more',
    name: 'more',
    component: more
  },
  {
    path: '/talk',
    name: 'talk',
    component: talk
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/testzz',
    name: 'testzz',
    component: testzz
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
