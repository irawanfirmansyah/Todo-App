<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    HelloWorld : import('../components/HelloWorld')
  }
}
</script>

<style>
.home{
  text-align: center;
}
</style>
