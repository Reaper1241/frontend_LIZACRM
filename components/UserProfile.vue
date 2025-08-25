<template>
  <div>
    <h1>hi</h1>
    <button
        @click="logout"
        class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 font-medium"
    >
      Выйти
    </button>
  </div>
</template>

<script setup>
import {navigateTo, useCookie} from '#app'

function logout() {
  const token = useCookie('auth_token')
  token.value = null
  navigateTo('/login')
}
</script>