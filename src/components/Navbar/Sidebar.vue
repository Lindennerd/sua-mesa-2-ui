<template>
    <!-- Backdrop -->
    <div class="fixed w-full h-full bg-gray-500 opacity-60 cursor-pointer" v-if="showMenu" @click="toggleMenu">
    </div>
    <!-- Menu -->
    <div class="md:hidden h-full w-0 fixed z-10 top-0 left-0 overflow-hidden transition-full duration-500 pt-2 bg-white"
        :class="showMenu ? 'w-64' : 'w-0'">
        <ul class="w-full" v-if="!isLoggedIn">
            <li class="border-b-2 menu-item-selected">
                <RouterLink to="/login" class="m-0 w-full h-full p-2 flex" @click="toggleMenu">
                    <LoginIcon class="h-6 mr-3" />
                    <p>Login</p>
                </RouterLink>
            </li>
            <li class="border-b-2  menu-item-selected">
                <RouterLink to="/register" class="m-0 flex w-full h-full p-2" @click="toggleMenu">
                    <UserAddIcon class="h-6 mr-3" />
                    <p>Criar conta</p>
                </RouterLink>
            </li>
        </ul>
        <ul class="w-full" v-else>
            <li class="border-b-2 menu-item-selected">
                <div class="p-2 border-b-2 flex">
                    <UserCircleIcon class="h-6 mr-3" />
                    <p>{{ userEmail }} </p>
                </div>
            </li>
            <li class="border-b-2 menu-item-selected">
                <a href="" @click.prevent="logout" class="p-2 flex hover:bg-gray-200 menu-item-selected border-b-2">
                    <LogoutIcon class="h-6 mr-3" />
                    <p>Sair</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>

import { LoginIcon, UserAddIcon, LogoutIcon, UserCircleIcon } from '@heroicons/vue/outline'

const props = defineProps({
    showMenu: Boolean,
    isLoggedIn: Boolean,
    userEmail: String
});

const emit = defineEmits(["toggleMenu", "logout"]);

function toggleMenu() {
    emit("toggleMenu", !props.showMenu);
}

function logout() {
    toggleMenu();
    emit("logout");
}

</script>

<style>
</style>