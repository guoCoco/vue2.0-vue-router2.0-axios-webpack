<template>
  <div id="app">
    <transition name="slide">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  },
  created () {
    console.log(this.$store.state)
  }
}
</script>

<style lang='scss'>
  @import "./style/style"
</style>
