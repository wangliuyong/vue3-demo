/***
 * @file: 
 * @Date: 2021-07-07 09:14:14
 * @author: liuyong.wang
 */
declare module '*.css' {
  const classes:{[ket:string]: String}
}

declare module '*.vue' {
  import { ComponentOptions, defineComponent, FunctionalComponent } from 'vue'
  const component: ComponentOptions | ReturnType<typeof defineComponent> | FunctionalComponent
  export default component
}

declare module 'vue-echarts'