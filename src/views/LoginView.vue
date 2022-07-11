<template>
    <h1>Login</h1>
    <p v-if="hasError">
        {{loginError}}
    </p>
    <form @submit.prevent="login">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" v-model="email">
        </div>
        <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" class="form-control" id="password" v-model="password">
        </div>
        <button type="submit" id="login" class="btn btn-primary">Entrar</button>
    </form>
</template>
<script lang="ts" setup>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router  = useRouter();
const auth = useAuthStore();
let email = ref('');
let password = ref('');
let hasError = ref(false);
let loginError = 'Credenciais inválidas';

async function login() {
    const success = await auth.loginUser(email.value, password.value);
    if(success) {
        router.push('/');
    } else {
        hasError.value = true;
    }
}

</script>