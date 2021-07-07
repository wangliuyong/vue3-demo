/***
 * @file: 
 * @Date: 2021-07-07 09:14:14
 * @author: liuyong.wang
 */
import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Demo1 from '@/components/Demo1.vue'
import Demo2 from '@/components/Demo2.vue'

const history  = createWebHashHistory()
const router = createRouter({
  history,
  routes:[
    {
      path:'/demo1',
      component: Demo1
    },
    {
      path:'/demo2',
      component: Demo2
    }
  ]
})
export default router