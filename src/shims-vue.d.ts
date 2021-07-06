declare module '*.css' {
  const classes:{[ket:string]: String}
}

declare module '*.vue' {
  import { ComponentOptions, defineComponent, FunctionalComponent } from 'vue'
  const component: ComponentOptions | ReturnType<typeof defineComponent> | FunctionalComponent
  export default component
}