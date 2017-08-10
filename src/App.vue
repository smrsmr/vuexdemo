<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/Hi">Hi</router-link> |
      <router-link to="/H1">H1</router-link> |
      <router-link to="/H2/1995/smr website is very good">H2</router-link> |
      <router-link :to="{name:'H11', params:{username:'smr', id: 123}}">H1子路由-1</router-link> |
      <router-link to="/H1/H12">H1子路由-2</router-link>
      <router-link to="/a1">多页面-1</router-link>
      <router-link to="/a2">多页面-2</router-link>
      <router-link to="/red">redirect</router-link>
      <router-link to="/smr">smr</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
