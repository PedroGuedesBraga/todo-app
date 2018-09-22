<template>
  <div id="app" class="container-fluid">
    <nav class="navbar navbar-light bg-light">
      <a href="#" class="navbar-brand">Turbo To-Do</a>
    </nav>
    <Login></Login>

    
    

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Login from './components/login.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Login
  }
}
</script>

<style>

</style>
