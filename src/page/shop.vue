<template>
  <div>
    {{msg}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '111'
    }
  },
  created () {
    this.msg = this.$store.state.mylist
  }
}
</script>
