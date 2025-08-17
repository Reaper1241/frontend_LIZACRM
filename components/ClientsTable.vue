<template>
  <div class="clients-container">
    <div class="client-header">
      <div class="header-field">Телефон</div>
      <div class="header-field">Почта</div>
      <div class="header-field">Имя</div>
      <div class="header-field">Последнее время логина</div>
    </div>
    <div 
      v-for="client in users" 
      :key="client.id" 
      class="client-card"
    >
      <div class="client-field phone">{{ client.phone.String }}</div>
      <div class="client-field email">{{ client.email.String }}</div>
      <div class="client-field name">{{ client.first_name.String }} {{ client.last_name.String }}</div>
      <div class="client-field salon">{{ parseDate(client.last_login_at.Time) }}</div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { parseISO, format } from 'date-fns';


const parseDate = (time) => {
  let date = parseISO(time);
  return format(date, 'dd.MM.yyyy HH:mm')
}

const config = useRuntimeConfig()
const apiUrl = config.public.apiBaseUrl

let users = ref([])

axios.get(apiUrl + '/users').then((response) => {
  users.value = response.data.users
})
</script>

<style scoped>
.clients-container {
  font-family: Arial, sans-serif;
  max-width: 100%;
  margin: 20px auto;
  padding: 10px;
}

.client-header {
  display: flex;
  background: #f5f5f5;
  padding: 10px;
  font-weight: bold;
  border-bottom: 2px solid #ddd;
}

.header-field {
  flex: 1;
  padding: 8px;
  text-align: left;
}

.client-card {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #eee;
  transition: background 0.2s;
}

.client-card:hover {
  background: #f9f9f9;
}

.client-field {
  flex: 1;
  padding: 8px;
  text-align: left;
  word-break: break-word;
}

.phone { color: #2c3e50; font-weight: 500; }
.email { color: #7f8c8d; }
.name { font-weight: 600; }
.salon { color: #3498db; }
</style>