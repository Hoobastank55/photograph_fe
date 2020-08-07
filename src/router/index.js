import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import Portfolio from '../views/Portfolio.vue'
import Projects from '../views/Portfolio/Projects.vue'
import Citynature from "../views/Portfolio/Citynature.vue"
import Concert from "../views/Portfolio/Concert.vue"
import Portrait from "../views/Portfolio/Portrait.vue"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path:'/blog',
    name:'Blog',
    component: Blog
  },
  {
    path:'/contact',
    name:'Contact',
    component: Contact
  },
  {
    path:'/portfolio',
    name:'Portfolio',
    component: Portfolio
  },
  {
    path:'/projects',
    name:'Projects',
    component: Projects
  },
  {
    path:'/citynature',
    name:'Citynature',
    component: Citynature
  },
  {
    path:'/concert',
    name:'Concert',
    component: Concert
  },
  {
    path:'/portrait',
    name:'Portrait',
    component: Portrait
  },
]

const router = new VueRouter({
  routes
})

export default router
