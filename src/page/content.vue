<template>
  <div>
    <myHeader></myHeader>
    <h2 v-text="dat.title"></h2>
    <p>作者:{{dat.author.loginname}} 发表于：{{dat.create_at}}</p>
    <hr>
    <article v-html="dat.content"></article>
    <h3>网友回复：</h3>
    <ul>
      <li v-for='val in dat.replies' v-bind:key='val.id'>
        <p>评论者：{{val.author.loginname}} 评论于：{{val.create_at}}</p>
        <article v-html="val.content"></article>
      </li>
    </ul>
    <myFooter></myFooter>
  </div>
</template>
<script>
import myHeader from '../components/header.vue'
import myFooter from '../components/footer.vue'
export default {
  components: { myHeader, myFooter },
  data () {
    return {
      id: this.$route.params.id,
      dat: {},
      author: {}
    }
  },
  created () {
    console.log(1)
    this.getData()
  },
  mounted () {
    console.log(this.$route)
  },
  methods: {
    getData () {
      this.$http.get('topic/' + this.id, null, r => {
        this.dat = r.data
        console.log(this.dat.author.loginname)
        this.author = this.dat.author
        console.log(r)
      })
    }
  }
}
</script>
