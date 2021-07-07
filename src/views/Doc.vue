<!--
 * @file: 
 * @Date: 2021-07-07 09:15:35
 * @author: liuyong.wang
-->
<template>
  HomePage
  <router-link to="/demo1">demo1</router-link>
  <router-link to="/demo2">demo2</router-link>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">

import { ref } from 'vue'

export default {
  components: {  },
  props: {
    user: {
      type: String,
      required: true
    }
  },
  setup (props: object) {
    const repositories = ref([])
    const getUserRepositories = async () => {
      // repositories.value = await fetchUserRepositories(props.user)
    }

    return {
      repositories,
      getUserRepositories
    }
  },
  data () {
    return {
      filters: { 

      }
    }
  },
  computed: {
    filteredRepositories () { 

     }, // 3
    repositoriesMatchingSearchQuery () { 

     }, // 2
  },
  watch: {
    user: 'getUserRepositories' // 1
  },
  methods: {
    updateFilters () { 

     }, // 3
  },
  mounted () {
    // this.getUserRepositories() // 1
  }
}
</script>

<style></style>
