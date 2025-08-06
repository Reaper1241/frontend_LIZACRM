<script setup>
const statusClasses = {
  'Завершена': 'bg-green-100 text-green-800',
  'В процессе': 'bg-blue-100 text-blue-800',
  'Запланирована': 'bg-yellow-100 text-yellow-800',
  'Ошибка': 'bg-red-100 text-red-800'
}

const campaigns = ref([
  {
    id: 1,
    name: 'Новогодняя акция 2023',
    status: 'Завершена',
    recipients: 1250,
    opens: 842,
    openRate: 67.4,
    sentDate: '15.12.2022'
  },
  {
    id: 2,
    name: 'Летнее предложение',
    status: 'В процессе',
    recipients: 980,
    opens: 320,
    openRate: 32.7,
    sentDate: '01.06.2023'
  }
])
</script>

<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Email рассылки</h2>
      <button class="btn-primary">
        <Icon name="mdi:plus" class="mr-2" /> Новая рассылка
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div class="bg-white rounded-lg shadow p-6">
        <p class="text-gray-500 mb-2">Всего рассылок</p>
        <p class="text-3xl font-bold">24</p>
      </div>
      <div class="bg-white rounded-lg shadow p-6">
        <p class="text-gray-500 mb-2">Открытий</p>
        <p class="text-3xl font-bold">1,248 <span class="text-green-500 text-sm">+12%</span></p>
      </div>
      <div class="bg-white rounded-lg shadow p-6">
        <p class="text-gray-500 mb-2">CTR</p>
        <p class="text-3xl font-bold">3.2% <span class="text-red-500 text-sm">-0.4%</span></p>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left">Название</th>
            <th class="px-6 py-3 text-left">Статус</th>
            <th class="px-6 py-3 text-left">Получатели</th>
            <th class="px-6 py-3 text-left">Открытия</th>
            <th class="px-6 py-3 text-left">Дата отправки</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="campaign in campaigns" :key="campaign.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 font-medium">{{ campaign.name }}</td>
            <td class="px-6 py-4">
              <span :class="statusClasses[campaign.status]" class="px-2 py-1 rounded-full text-xs">
                {{ campaign.status }}
              </span>
            </td>
            <td class="px-6 py-4">{{ campaign.recipients }}</td>
            <td class="px-6 py-4">{{ campaign.opens }} ({{ campaign.openRate }}%)</td>
            <td class="px-6 py-4">{{ campaign.sentDate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

