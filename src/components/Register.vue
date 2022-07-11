<template>
    <h1>Crie sua conta</h1>
    <form @submit.prevent="register">
        <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" class="form-control" id="name" v-model="userRegistration.name">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" v-model="userRegistration.email">
        </div>
        <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" class="form-control" id="password" v-model="userRegistration.password">
        </div>
        <div class="form-group">
            <label for="password-confirmation">Confirmea sua senha</label>
            <input type="password" class="form-control" id="password-confirmation"
                v-model="userRegistration.passwordConfirmation">
        </div>
        <button type="submit" class="btn btn-primary">Criar Conta</button>
    </form>
</template>
<script lang="ts" setup>
import type { UserRegistration } from '@/types/UserRegistration';
import {reactive, ref} from 'vue';

const emit = defineEmits<{
    (e: 'register', userRegistration: UserRegistration): void;
}>();

const userRegistration = reactive({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
});

function register() {
    emit('register', userRegistration);
};

</script>