<template>
  <div id="app">
    <router-view :key="key"></router-view>
  </div>
</template>

<script>

export default {

  name: 'App',
  computed:{
    key(){
      return this.$route.path + Math.random();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*overflow: scroll;*/
  /*margin-top: 60px;*/
  background-color: #F7F7F7!important;
  /*min-height: 700px;*/
  /*height: auto !important;*/
  /*padding-top: 60px;*/
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  /*padding-bottom: 10px;*/
}

#app::-webkit-scrollbar{
  width: 5px;
  height: 1px;
}
#app::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: #535353;
}
#app::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0);
  border-radius: 10px;
  background: #ccc;
}
</style>
