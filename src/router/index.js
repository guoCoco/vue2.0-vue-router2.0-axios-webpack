import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import Shop from '@page/shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Index',
      component: Index
    },
    {
      path: '/content/:id',
      component: Content
    },
    {
      path: '/shop',
      component: Shop
    }
  ]
})
