<template>
  <Header/>
  <img alt="Vue logo" src="./assets/logo.png">
  <LoginForm/>
</template>

<script>
import Header from './components/Header.vue'
import LoginForm from './components/LoginForm.vue'

export default {
  name: 'App',
  components: {
    Header,
    LoginForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>