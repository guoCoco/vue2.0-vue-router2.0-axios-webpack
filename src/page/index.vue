<template>
  <div id='main'>
    <Header/>
    <div id="cont">ssss</div>
    <ul>
      <li v-for='(val, i) in list' v-bind:key='i'>
        <time v-text='val.create_at'></time>
        <router-link :to="'/comtent/' + val.id">
          {{val.title}}
        </router-link>
      </li>
    </ul>
    <Footer/>
  </div>

</template>
<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
export default {
  components: {Header, Footer},
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
      console.log(res)
      this.list = res.data
    })
  },
  mounted () {
    let date = new Date()
    console.log(this.$utils.formatDate(date))
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
