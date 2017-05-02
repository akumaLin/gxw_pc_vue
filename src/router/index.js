import Vue from 'vue'
import Router from 'vue-router'
import my_prize from '@/pages/my_prize/my_prize.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'my_prize',
      component: my_prize
    }
  ]
})
