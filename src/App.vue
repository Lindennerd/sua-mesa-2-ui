<template>
  <div>
    <nav>
      <RouterLink to="/"> Home </RouterLink>
      <RouterLink to="/register"> Criar Conta </RouterLink>
      <RouterLink to="/login"> Login </RouterLink>
      <a href="" @click.prevent="logout">Logout</a>
    </nav>
  </div>

  <RouterView />
</template>
<script lang="ts" setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { useAuthStore } from "./stores/auth";
const router = useRouter();
const auth = useAuthStore();

async function logout() {
  await auth.logoutUser();
  router.push("/login");
}

</script>
<style>
@import "@/assets/base.css";
</style>
