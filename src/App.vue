<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    Header
  },
  created() {
    this.$store.dispatch('initStock')
  },
}
</script>

<style>
</style>
