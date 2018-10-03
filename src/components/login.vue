<template>
    
    <div class="row">
        <div class="col-4 text-center">
        
        </div>
        <div class="col-4 text-center">

            <br>
            <h3>Bem-vindo ao Turbo To-Do!</h3>
            <br>
        
        <form>
            <div class="form-group">
                <label for="emailAddress">Endereço de Email</label>
                <input class="form-control" type="email" id="emailAddress" placeholder="Digite o seu endereço de Email">
            </div>

            <div class="form-group">
                <label for="passwordInput">Senha</label>
                <input type="password" class="form-control" id="passwordInput">
            </div>
            <router-link to="/todo-view">
            </router-link>
                <a class="btn btn-info" href="http://localhost:5000/auth/google">
                   Logar
                </a>
                
        </form>


        </div>
        <div class="col-4 text-center">
        
        </div>
    </div>
</template>

<script>


import axios from 'axios'
export default {
    name: 'Login'


 
}
</script>

<style>



</style>
