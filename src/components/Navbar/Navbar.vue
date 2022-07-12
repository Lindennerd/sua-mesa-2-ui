<template>
    <nav class="flex bg-white text-red-600 fixed w-full">
        <RouterLink to="/">
            <div class="hover-yellow-bottom-border p-2 flex">
                <img :src="logo" alt="logo" class="h-12 md:h-12">
                <div class="py-3 px-3 text-lg font-bold">SUA MESA</div>
            </div>
        </RouterLink>
        <div @click="showMenu = !showMenu" class="ml-auto mr-2 cursor-pointer md:hidden hover:text-yellow-400">
            <MenuIcon class="h-6 fixed right-1 top-5" :class="!showMenu ? 'visible' : 'invisible'" />
            <XIcon class="h-6 fixed right-1 top-5 z-10" :class="showMenu ? 'visible' : 'invisible'" />
        </div>
        <!-- mobile menu -*- SideBar -*- -->
        <Sidebar :user-email="userEmail" :show-menu="showMenu" :is-logged-in="isLoggedIn" @toggle-menu="toggleMenu" @logout="logout" />
        <!-- secondary menu -->
        <div class="ml-auto hidden md:flex" v-if="!isLoggedIn">
            <RouterLink to="/login" class="hover-yellow-bottom-border p-2">
                <div class="mt-3 flex">
                    <LoginIcon class="h-6 mr-3" />
                    <p>Login</p>
                </div>
            </RouterLink>
            <RouterLink to="/register" class="hover-yellow-bottom-border p-2">
                <div class="mt-3 flex">
                    <UserAddIcon class="h-6 mr-3" />
                    <p>Criar conta</p>
                </div>
            </RouterLink>
        </div>
        <div v-if="isLoggedIn">
            <UserCircleIcon class="h-10 mt-3 mr-4 fixed right-0 cursor-pointer hidden md:flex" @click="userMenuShow = !userMenuShow" />
            <UserMenu :user-email="userEmail" :user-menu-show="userMenuShow" @logout="logout" />
        </div>
    </nav>

</template>
<script lang="ts" setup>
import { UserCircleIcon, MenuIcon, XIcon } from '@heroicons/vue/solid';
import { LoginIcon, UserAddIcon } from '@heroicons/vue/outline'

import { ref } from '@vue/reactivity';
import logo from '../../assets/logo.png';
import Sidebar from './Sidebar.vue';
import UserMenu from './UserMenu.vue';

const props = defineProps({
    userEmail: String,
    isLoggedIn: Boolean,
});

const emit = defineEmits(["logout"]);

const logout = () => {
    emit("logout");
};

const toggleMenu = (toggle: boolean) => {
    showMenu.value = toggle;
};

let showMenu = ref(false);
let userMenuShow = ref(false);
</script>
