<template>
  <div id="app" class="container-fluid">
    <nav class="navbar navbar-dark bg-dark">
      <a href="#" class="navbar-brand">Turbo To-Do</a>
    </nav>
    <router-view></router-view>
    
    
    

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Login from './components/login.vue'
import TodoView from './components/TodoView.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
    Login,
    TodoView
  },

  data() {
    return {

    }
  }
}
</script>

<style>

</style>
