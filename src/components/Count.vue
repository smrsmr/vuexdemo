<template>
  <div>
    <h1>{{msg}}</h1>
    <h3>{{count}}-{{count}}</h3>
    <!--<div>-->
      <!--<button @click="$store.commit('add',10)">+</button>-->
      <!--<button @click="reduce">-</button>-->
    <!--</div>-->
    <div>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        msg: 'Hello Vuex'
      }
    },
//    computed: mapState({
//      count: state => state.count
//    })
    computed: {
      ...mapState(['count']),
      ...mapGetters(['count'])
    },
//    computed: {
//      count: function () {
//        return this.$store.state.count
//      }
//    }
    methods: {
      ...mapMutations(['add', 'reduce']),
      ...mapActions(['addAction', 'reduceAction'])
    }
  }
</script>

<style></style>
