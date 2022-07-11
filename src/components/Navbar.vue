<template>
    <nav class="h-10 w-auto bg-red-600 text-white flex">
        <div class="text-lg font-bold p-1 pl-5 pr-5 transition hover:bg-red-700 hover:border-b-yellow-500">
            <RouterLink to="/"> Sua Mesa </RouterLink>
        </div>
        <div class="ml-auto space-x-1 mr-1 flex">
            <div class="p-1 pl-3 pr-3 transition hover:bg-green-700" v-if="!isLoggedIn">
                <RouterLink to="/login"> Login </RouterLink>
            </div>
            <div class="p-1 pl-3 pr-3 transition hover:bg-green-700" v-if="!isLoggedIn">
                <RouterLink to="/register"> Criar Conta </RouterLink>
            </div>
            <div class="p-1 pl-3 pr-3 transition hover:bg-green-700" v-if="isLoggedIn">
                <a href="" id="logout" @click.prevent="logout">Logout</a>
            </div>
            <div class="p-1 pl-3 pr-3 transition hover:bg-green-700" v-if="isLoggedIn">           
                  Bem vindo {{props.userEmail}}
            </div>
        </div>
    </nav>
</template>
<script lang="ts" setup>

const props = defineProps({
    userEmail: String,
    isLoggedIn: Boolean
});

const emit = defineEmits(["logout"])

const logout = () => { emit('logout'); }

</script>