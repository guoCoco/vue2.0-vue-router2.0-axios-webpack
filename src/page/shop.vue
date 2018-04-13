<template>
  <div class='father'>
    {{msg}}
    <div class='son1'>hello world</div>
    <div class='son2'>nice day</div>
    <ul>
      <li v-for='(val, i) in dones' v-bind:key='i'>{{val.text}}</li>
    </ul>
    <button @click='gotoIndex'>导航到首页</button>
    <mt-button type="primary">选择操作</mt-button>
  </div>
</template>
<script>
/* eslint-disable */
import { mapGetters } from 'vuex'

import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      msg: '111'
    }
  },
  created () {
    this.$utils.setTitleBar('商品')
    this.msg = this.$store.state.mylist
    // this.$store.commit('increment')
    this.add()
    this.add()
    this.add()
    this.add()
    console.log(this.$store.state)
    console.log(this.$router)
  },
  computed: {
    ...mapGetters({
      dones: 'doneTodos'
    })
  },
  methods: {
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    }),
    gotoIndex () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang='scss'>
  @import '../style/style.scss';
  .father{
    .son1{
      font-size: px2rem(75px);
      width: px2rem(160px);
      height: px2rem(320px);
    }
  }
</style>
