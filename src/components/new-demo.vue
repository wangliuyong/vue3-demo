<template>
  <h1>{{msg}}{{count2}}</h1>
  <h3>count3:{{count3}}</h3>
  <h3>double:{{double}}</h3>
  <button ref="root" type="button" @click="add">count is: {{ state.count }}</button>
</template>

<script setup lang="ts">

import { defineProps,  ref,reactive, computed,toRefs, onMounted, watch,watchEffect } from 'vue'

type DState = {
  count: number;
  double: number;
}

defineProps({
  msg: String
})


const state: DState = reactive({
  count: 0,
  double: computed(() => state.count * 2)
})
const {double} = {...toRefs(state)} 

const count2 = ref(1)

const count3 = computed(() => count2.value + state.count)

watch(() => state.count, (cur, pre) => {
  console.log(cur, pre)
},{
  immediate:false,
  deep: true
})

const stopWatch = watchEffect((onInvalidate) => {
  console.log('watchEffect',state.count)

  onInvalidate(() => {
    console.log('清除副作用')
  })
})
//  停止监听
// stopWatch()

function add(){
  state.count ++
  count2.value ++
}


const root = ref(null)
onMounted(() => {  
  console.log('root', root.value)
})


const color = 'red'
const font = {
  size: '2em'
}


</script>

<style>
:root{
  --color:red;
  --fontWeight:bold
}

.text{
  font-weight: var(--fontWeight); 
}


</style>

<style scoped>

  .text{
    color:v-bind(color);
    /* font-size:v-bind(font.size); */
  }

</style>
