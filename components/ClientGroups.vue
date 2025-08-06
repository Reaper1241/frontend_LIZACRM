<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Группы клиентов</h2>
      <button class="btn-primary">
        <Icon name="mdi:plus" class="mr-2" /> Создать группу
      </button>
    </div>

    <div class="bg-white rounded-lg shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left">Название</th>
            <th class="px-6 py-3 text-left">Кол-во клиентов</th>
            <th class="px-6 py-3 text-left">Дата создания</th>
            <th class="px-6 py-3 text-right">Действия</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="group in groups" :key="group.id">
            <td class="px-6 py-4">{{ group.name }}</td>
            <td class="px-6 py-4">{{ group.clientsCount }}</td>
            <td class="px-6 py-4">{{ formatDate(group.createdAt) }}</td>
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

<script setup>
const groups = ref([
  {
    id: 1,
    name: 'VIP клиенты',
    clientsCount: 24,
    createdAt: '2023-10-15'
  },
  {
    id: 2,
    name: 'Новые клиенты',
    clientsCount: 56,
    createdAt: '2023-11-02'
  }
])

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString()
}
</script>