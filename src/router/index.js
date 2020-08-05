import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
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
  }

]

const router = new VueRouter({
  routes
})

export default router