import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/pages/Home'
import science from '@/pages/Science'
import program from '@/pages/Programs'
import about from '@/pages/About'
import contact from '@/pages/Contact'

Vue.use(VueRouter)

const routes = [
    {
        path: '', component: home
    },
    {
        path: '/science', component: science
    },
    {
        path: '/program', component: program
    },
    {
        path: '/about', component: about
    },
    {
        path: '/contact', component: contact
    },
    {
        path: '*', redirect: '/'
    }
]


const router = new VueRouter({
    routes,
    mode:'history'
  })
  
  export default router
  