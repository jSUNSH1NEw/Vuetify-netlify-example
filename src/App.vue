<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './Layout/Navbar'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  align-content: center;
}


</style>
