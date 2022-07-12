<template>
    <nav class="flex bg-red-600 text-white">
        <RouterLink to="/" class="text-lg font-bold">
            <div class="hover-yellow-bottom-border p-2 flex">
                <img :src="logo" alt="logo" class="h-10 md:h-12">
                <div class="py-3 px-3">SUA MESA</div>
            </div>
        </RouterLink>
        <div @click="showMenu = !showMenu" class="ml-auto mr-2 cursor-pointer md:hidden">
            <MenuIcon class="h-6 mt-5" />
        </div>
        <!-- secondary menu -->
        <div class="ml-auto hidden md:flex">
            <RouterLink to="/login" v-if="!isLoggedIn" class="hover-yellow-bottom-border p-2">
                <div class="mt-3">
                    Login
                </div>
            </RouterLink>
            <RouterLink to="/register" v-if="!isLoggedIn" class="hover-yellow-bottom-border p-2">
                <div class="mt-3">
                    Criar Conta
                </div>
            </RouterLink>
            <div v-if="isLoggedIn">
                <UserCircleIcon class="h-10 mt-3 mr-4 cursor-pointer" @click="userMenuShow = !userMenuShow" />
                <div :class="userMenuShow ? 'flex' : 'hidden'" class="transition duration-[.5s]">
                    <div class="bg-white shadow-lg z-10 text-black 
                        rounded-sm absolute right-0 mt-2">
                        <div class="p-2 border-b-2">
                            {{ userEmail }}</div>
                        <a href="" @click.prevent="logout"
                            class="p-2 flex  hover:bg-gray-200 menu-item-selected border-b-2">
                            <LogoutIcon class="h-5 mr-3" />
                            <p class="ml-auto">Sair</p>
                        </a>
                    </div>
                </div>
            </div>
            <!-- 
            </a> -->

        </div>
    </nav>

</template>
<script lang="ts" setup>
import { UserCircleIcon, MenuIcon, LogoutIcon } from '@heroicons/vue/solid';
import { ref } from '@vue/reactivity';
import logo from '../assets/logo.png';

const props = defineProps({
    userEmail: String,
    isLoggedIn: Boolean,
});

const emit = defineEmits(["logout"]);

const logout = () => {
    emit("logout");
};


let showMenu = ref(false);
let userMenuShow = ref(false);
</script>
