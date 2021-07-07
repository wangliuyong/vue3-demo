<!--
 * @file: 
 * @Date: 2021-07-07 09:14:14
 * @author: liuyong.wang
-->
<template>
  <Home />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from '@/views/Home.vue'

export default defineComponent({
  components:{Home},
  setup() {
    
  },
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
