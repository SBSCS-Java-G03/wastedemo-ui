import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import frontlogin from '@/components/login'
import frontregister from '@/components/register'


import Messages from '@/components/mymessage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'frontlogin',
      component: frontlogin
    },
    {
      path: '/signup',
      name: 'frontregister',
      component: frontregister
    }
  ]
})
