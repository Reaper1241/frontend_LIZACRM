<template>
  <div class="clients-container">
    <!-- Заголовки таблицы -->
    <div class="client-header">
      <div class="header-field">Телефон</div>
      <div class="header-field">Почта</div>
      <div class="header-field">Имя</div>
      <div class="header-field">Салон</div>
    </div>

    <!-- Карточки клиентов -->
    <div 
      v-for="client in clients" 
      :key="client.id" 
      class="client-card"
    >
      <div class="client-field phone">{{ client.phone }}</div>
      <div class="client-field email">{{ client.email }}</div>
      <div class="client-field name">{{ client.name }}</div>
      <div class="client-field salon">{{ client.salon }}</div>
    </div>
  </div>
</template>

<script setup>
// Моковые данные (в реальном проекте замените на запрос к API)
const clients = [
  { id: 1, phone: "+7 (999) 123-45-67", email: "ivanov@example.com", name: "Иван Иванов", salon: "Салон на Ленина" },
  { id: 2, phone: "+7 (987) 654-32-10", email: "petrov@example.com", name: "Петр Петров", salon: "Салон на Гагарина" },
  { id: 3, phone: "+7 (916) 777-88-99", email: "sidorova@example.com", name: "Мария Сидорова", salon: "Салон Центральный" },
];
</script>

<style scoped>
.clients-container {
  font-family: Arial, sans-serif;
  max-width: 100%;
  margin: 20px auto;
  padding: 10px;
}

/* Стили для заголовков */
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

/* Стили для карточек клиентов */
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

/* Опционально: выделение важных полей */
.phone { color: #2c3e50; font-weight: 500; }
.email { color: #7f8c8d; }
.name { font-weight: 600; }
.salon { color: #3498db; }
</style>