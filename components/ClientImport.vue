<script setup>
const imports = ref([
  {
    id: 1,
    filename: 'clients_october.csv',
    status: 'Успешно',
    date: '15.10.2023 14:30',
    imported: 142
  },
  {
    id: 2,
    filename: 'new_clients.xlsx',
    status: 'Ошибка',
    date: '02.11.2023 09:15',
    imported: 0
  }
])
</script>
<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-6">Импорт клиентов</h2>
    
    <div class="bg-white rounded-lg shadow p-6">
      <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <Icon name="mdi:cloud-upload" class="text-4xl text-gray-400 mx-auto mb-4" />
        <p class="mb-2">Перетащите файл сюда или</p>
        <input type="file" id="file-upload" class="hidden" accept=".csv,.xlsx" />
        <label for="file-upload" class="btn-primary cursor-pointer">
          Выберите файл
        </label>
        <p class="text-sm text-gray-500 mt-2">Поддерживаемые форматы: CSV, XLSX</p>
      </div>

      <div class="mt-8">
        <h3 class="font-medium mb-4">История импортов</h3>
        <ul class="space-y-3">
          <!-- <li v-for="import in imports" :key="import.id" class="flex justify-between items-center p-3 bg-gray-50 rounded">
            <div>
              <p class="font-medium">{{ import.filename }}</p>
              <p class="text-sm text-gray-500">{{ import.status }} • {{ import.date }}</p>
            </div>
            <div class="text-sm">
              <span class="text-green-500" v-if="import.status === 'Успешно'">{{ import.imported }} записей</span>
              <span class="text-red-500" v-else>Ошибка</span>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

