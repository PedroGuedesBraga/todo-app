<template>

    <div class="row">
        
        <div class="col-12 text-center">
            <br>
            <h6 class="text-right">Você está logado como: {{userName}}</h6>
            <h6 class="text-right font-weight-light">Id: {{userId}}</h6>
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
import axios from 'axios'

export default {
    name: 'TodoView',
    components: {
        Todo
    },
    data(){
        return {
            userName: 'Nome do usuario',
            userId: 'Id do usuario'
        }
    },

    
    created(){
        axios.get('http://localhost:5000/panel/userInfo', {withCredentials: true})
        .then((response) => {
            this.userName = response.data.username;
            this.userId = response.data._id;
            console.log('nome do usuario: ' + response.data)
        })
    }
}
</script>

<style>



</style>
