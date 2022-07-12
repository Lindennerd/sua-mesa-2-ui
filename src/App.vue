<template>
    <Navbar 
      :user-email="userData?.email" 
      :is-logged-in="isLoggedIn" 
      @logout="logout" />

<div class="pt-[5em]">
  <RouterView />
</div>
</template>
<script lang="ts" setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { useAuthStore } from "./stores/auth";
import { onAuthStateChanged, type User } from "@firebase/auth";
import { getAuth } from "firebase/auth";
import { onMounted, reactive, ref } from "vue";
import { storeToRefs } from "pinia";
import Navbar from "./components/Navbar/Navbar.vue";

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
