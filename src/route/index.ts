import {createRouter,createWebHashHistory} from 'vue-router'
import Demo1 from '@/components/Demo1.vue'

const history  = createWebHashHistory()
const router = createRouter({
  history,
  routes:[
    {
      path:'/',
      component: Demo1
    }
  ]
})
export default router