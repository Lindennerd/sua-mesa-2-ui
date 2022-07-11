<template>
  <div>
    <nav>
      <RouterLink to="/"> Home </RouterLink>
      <RouterLink to="/register"> Criar Conta </RouterLink>
      <RouterLink to="/login"> Login </RouterLink>
      <a href="" id="logout" @click.prevent="logout">Logout</a>
      <div v-if="isLoggedIn">
        Bem vindo {{userData?.email}}
      </div>
    </nav>
  </div>

  <RouterView />
</template>
<script lang="ts" setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { useAuthStore } from "./stores/auth";
import { onAuthStateChanged, type User } from "@firebase/auth";
import { getAuth } from "firebase/auth";
import { onMounted, reactive, ref } from "vue";
import { storeToRefs } from "pinia";

const router = useRouter();
const auth = getAuth();
const authStore = useAuthStore();
let {userData} = storeToRefs(authStore);

let isLoggedIn = ref(false);

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if(user) {
      authStore.setUser(user);
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});


async function logout() {
  await authStore.logoutUser();
  router.push("/login");
}

</script>
<style>
@import "@/assets/base.css";
</style>
