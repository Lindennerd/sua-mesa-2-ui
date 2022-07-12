<template>
    <div :class="userMenuShow ? 'flex' : 'hidden'" class="transition duration-[.5s]">
        <div class="bg-white shadow-lg z-10 text-black rounded-sm absolute right-0 mt-14">
            <div class="p-2 border-b-2">
                {{ userEmail }}
            </div>
            <a href="" @click.prevent="logout" class="p-2 flex hover:bg-gray-200 menu-item-selected border-b-2">
                <LogoutIcon class="h-6 mr-3" />
                <p>Sair</p>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { LogoutIcon } from '@heroicons/vue/solid';

defineProps({
    userMenuShow: Boolean,
    userEmail: String,
});

const emit = defineEmits(["logout"]);

function logout() {
    emit("logout");
}
</script>

<style scoped>
</style>
