import Vue from 'vue'
import Router from 'vue-router'
import my_prize from '@/pages/my_prize/my_prize.vue'
import for_love from '@/pages/for_love/for_love.vue'
import love_card from '@/pages/love_card/love_card.vue'
import self from '@/components/for_love/self/self.vue'
import provice from "@/components/for_love/provice/provice.vue"
import solorank from "@/components/for_love/solorank/solorank.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/my_prize',
      name: 'my_prize',
      component: my_prize
    },
    {
      path: '/for_love/provice',
      name: 'for_love',
      component:for_love,
      children:[
        { path: '/for_love/self', component:solorank},
        { path: '/for_love/pro', component: provice}
      ]

    },
    {
      path: '/',
      name: 'love_card',
      component:love_card
    }
  ]
})
