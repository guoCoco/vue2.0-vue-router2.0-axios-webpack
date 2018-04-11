import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import Shop from '@/page/shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/content/:id',
      component: Content
    },
    {
      path: '/shop',
      component: Shop,
      beforeRouteEnter (to, from, next) {
        next(vm => {
          vm.$router.push({path: '/'})
        })
      }
    },
    {
      path: '/',
      // redirect: {name: 'Index'}
      redirect: '/index'
    }
  ]
})
