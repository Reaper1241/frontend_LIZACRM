<script setup>
const tabs = ['Все', 'Новые', 'В работе', 'Конвертированные']
const activeTab = ref('Все')

const statusClasses = {
  'Новый': 'bg-blue-100 text-blue-800',
  'В работе': 'bg-yellow-100 text-yellow-800',
  'Конвертирован': 'bg-green-100 text-green-800',
  'Отказ': 'bg-red-100 text-red-800'
}

const leads = ref([
  {
    id: 1,
    name: 'Иван Петров',
    company: 'ООО "ТехноПром"',
    status: 'Новый',
    responsible: 'Алексей Смирнов',
    createdAt: '15.10.2023'
  },
  {
    id: 2,
    name: 'Елена Сидорова',
    company: 'ИП Сидорова',
    status: 'В работе',
    responsible: 'Мария Иванова',
    createdAt: '10.10.2023'
  }
])
</script>


<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Лиды</h2>
      <div class="flex space-x-3">
        <button class="btn-outline">
          <Icon name="mdi:filter" class="mr-2" /> Фильтры
        </button>
        <button class="btn-primary">
          <Icon name="mdi:plus" class="mr-2" /> Добавить лид
        </button>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow overflow-hidden">
      <div class="flex items-center justify-between p-4 border-b">
        <div class="flex space-x-4">
          <button v-for="tab in tabs" :key="tab" 
            @click="activeTab = tab"
            :class="{'border-b-2 border-blue-500 text-blue-500': activeTab === tab}"
            class="pb-2 px-1">
            {{ tab }}
          </button>
        </div>
        <div class="relative">
          <input type="text" placeholder="Поиск..." class="pl-8 pr-4 py-2 border rounded-lg">
          <Icon name="mdi:magnify" class="absolute left-2 top-3 text-gray-400" />
        </div>
      </div>

      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left">Имя</th>
            <th class="px-6 py-3 text-left">Компания</th>
            <th class="px-6 py-3 text-left">Статус</th>
            <th class="px-6 py-3 text-left">Ответственный</th>
            <th class="px-6 py-3 text-left">Дата создания</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="lead in leads" :key="lead.id" class="hover:bg-gray-50 cursor-pointer">
            <td class="px-6 py-4">{{ lead.name }}</td>
            <td class="px-6 py-4">{{ lead.company }}</td>
            <td class="px-6 py-4">
              <span :class="statusClasses[lead.status]" class="px-2 py-1 rounded-full text-xs">
                {{ lead.status }}
              </span>
            </td>
            <td class="px-6 py-4">{{ lead.responsible }}</td>
            <td class="px-6 py-4">{{ lead.createdAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

