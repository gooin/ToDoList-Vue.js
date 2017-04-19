import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import about from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
      // children:[
      //   {
      //     path: 'page1',
      //     component: page1
      //   },
      //   {
      //     path: 'page2',
      //     component: page2
      //   }
      // ]
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
