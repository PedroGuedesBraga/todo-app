<template>

    <div class="row">
        
        <div class="col-12 text-center">
            <br>
            <button type="button" class="btn btn-warning btn-md btn-block">Adicionar To-Do</button>
        </div>
        <div class="col-6 text-center">
            <br>
            <h3>Para fazer</h3>
            <br>
            <Todo></Todo>
        </div>

        <div class="col-6 text-center">
            <br>
            <h3>Já feito</h3>
            <br>
            <Todo></Todo>
            <br>
            <Todo></Todo>
            <br>
            <Todo></Todo>
            
            
        </div>



    </div>
</template>

<script>

import Todo from './Todo.vue'

export default {
    name: 'TodoView',
    components: {
        Todo
    }
}
</script>

<style>



</style>
