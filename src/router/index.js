import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../components/Profile.vue'
import Background from '../components/Background.vue'
import Skills from '../components/Skills.vue'
import Outputs from '../components/Outputs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/background',
    name: 'Background',
    component: Background
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/outputs',
    name: 'Outputs',
    component: Outputs
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
