<template>
  <div id='main'>
    <myHeader/>
    <img src="../../static/image/logo.png">
    <ul>
      <li v-for='(val, i) in list' v-bind:key='i'>
        <time v-text='val.create_at'></time>
        <router-link :to="'/content/' + val.id">
          {{val.title}}
        </router-link>
      </li>
    </ul>
    <myFooter/>
  </div>

</template>
<script>
import myHeader from '../components/header.vue'
import myFooter from '../components/footer.vue'
export default {
  components: {myHeader, myFooter},
  data () {
    return {
      list: []
    }
  },
  created () {
    // var data = {
    //   topid: '7',
    //   showapi_sign: '118146df7242463290977c32d281bf6f',
    //   showapi_appid: '60810'
    // }
    // this.$http.post('/213-4', data, (res) => {
    //   console.log(res)
    // })
    this.$http.get('/topics', null, (res) => {
      this.list = res.data
    })
  },
  mounted () {
    let date = new Date()
    console.log(this.$utils.formatDate(date))
    let num = this.$store.getters
    console.log(num)
    console.log(this.$store.state.mylist)
    console.log(this.$store)
  }
}
</script>
<style lang='scss'>
  #main{
    #cont{
      font-size: 32px;
      color: red;
    }
  }
</style>
