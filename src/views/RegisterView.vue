<template>
    <Register @register="register"></Register>
</template>
<script lang="ts" setup>
import type { UserRegistration } from "@/types/UserRegistration";
import Register from "../components/Register.vue";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useRouter } from "vue-router";

const router = useRouter();

async function register(userRegistration: UserRegistration) {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, userRegistration.email, userRegistration.password)
    if(!userCredential) {
        console.log('Erro ao criar usuário');
        return;
    }

    console.log('Usuário criado com sucesso');
    router.push('/login');
}

</script>