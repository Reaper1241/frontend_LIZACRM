<script setup>
const users = ref([
  {
    id: 1,
    name: 'Алексей Смирнов',
    email: 'a.smirnov@example.com',
    role: 'Администратор',
    active: true
  },
  {
    id: 2,
    name: 'Мария Иванова',
    email: 'm.ivanova@example.com',
    role: 'Менеджер',
    active: true
  }
])
</script>

<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Пользователи</h2>
      <button class="btn-primary">
        <Icon name="mdi:plus" class="mr-2" /> Добавить пользователя
      </button>
    </div>

    <div class="bg-white rounded-lg shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left">Имя</th>
            <th class="px-6 py-3 text-left">Email</th>
            <th class="px-6 py-3 text-left">Роль</th>
            <th class="px-6 py-3 text-left">Статус</th>
            <th class="px-6 py-3 text-right">Действия</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="user in users" :key="user.id">
            <td class="px-6 py-4 flex items-center">
              <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                {{ user.name.charAt(0) }}
              </div>
              {{ user.name }}
            </td>
            <td class="px-6 py-4">{{ user.email }}</td>
            <td class="px-6 py-4">
              <span class="px-2 py-1 bg-gray-100 rounded-full text-xs">
                {{ user.role }}
              </span>
            </td>
            <td class="px-6 py-4">
              <span :class="user.active ? 'text-green-500' : 'text-red-500'" class="flex items-center">
                <Icon :name="user.active ? 'mdi:check-circle' : 'mdi:close-circle'" class="mr-1" />
                {{ user.active ? 'Активен' : 'Неактивен' }}
              </span>
            </td>
            <td class="px-6 py-4 text-right">
              <button class="text-blue-500 hover:text-blue-700 mr-3">
                <Icon name="mdi:pencil" />
              </button>
              <button class="text-red-500 hover:text-red-700">
                <Icon name="mdi:delete" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

