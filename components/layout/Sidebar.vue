<template>
  <aside class="bg-sidebar flex flex-col h-full w-full py-6">
<!--    <NuxtLink to="/" class="mb-8 flex justify-center">-->
<!--      <NuxtImg src="logo.svg" width="110" class="opacity-90 hover:opacity-100 transition" />-->
<!--    </NuxtLink>-->

    <nav class="flex-1 overflow-y-auto">
      <ul class="space-y-1">
        <li v-for="section in menuSections" :key="section.label">
          <template v-if="section.to">
            <NuxtLink
              :to="section.to"
              class="flex items-center gap-3 px-3 py-2 transition hover:bg-white/10"
              active-class="bg-white/20 ring-1 ring-white/30"
            >
              <Icon :name="section.icon" class="text-lg" />
              <span class="font-medium">{{ section.label }}</span>
            </NuxtLink>
          </template>

          <template v-else-if="section.submenu">
            <button
              type="button"
              @click="toggleSubmenu(section.key)"
              class="w-full flex items-center justify-between px-3 py-2 transition hover:bg-white/10 active:bg-white/20"
            >
              <div class="flex items-center gap-3">
                <Icon :name="section.icon" class="text-lg" />
                <span class="font-medium">{{ section.label }}</span>
              </div>
              <Icon
                name="mdi:chevron-down"
                class="transition-transform duration-200"
                :class="{ 'rotate-180': openSubmenus[section.key] }"
              />
            </button>

            <ul
              class="mt-1 space-y-1 overflow-hidden transition-all duration-300"
              :class="openSubmenus[section.key] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
            >
              <li v-for="link in section.submenu" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  class="flex items-center gap-2 px-6 py-1.5 text-sm transition hover:bg-white/10"
                  active-class="bg-white/20 ring-1 ring-white/30"
                >
                  <Icon :name="link.icon" class="text-base" />
                  <span>{{ link.label }}</span>
                </NuxtLink>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </nav>

    <div class="mt-auto pt-4 border-t border-white/20">
      <NuxtLink
          to="/profile"
          class="flex items-center gap-3 px-3 py-2 hover:bg-white/10 transition"
      >
        <div class="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white">
          <Icon name="mdi:account" class="text-lg" />
        </div>
        <div class="truncate">
          <p class="font-medium">Иван Льгов</p>
          <p class="text-xs text-gray-200">Администратор</p>
        </div>
      </NuxtLink>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openSubmenus = ref<Record<string, boolean>>({
  customers: false,
  sales: false,
  marketing: false,
  settings: false,
})

const toggleSubmenu = (menu: string) => {
  for (const key in openSubmenus.value) {
    if (key === menu) {
      openSubmenus.value[key] = !openSubmenus.value[key]
    } else {
      openSubmenus.value[key] = false
    }
  }
}

const menuSections = [
  { label: 'Дашборд', icon: 'mdi:view-dashboard', to: '/' },
  {
    label: 'Клиенты',
    key: 'customers',
    icon: 'mdi:account-group',
    submenu: [
      { to: '/clients', label: 'Список клиентов', icon: 'mdi:format-list-bulleted' },
      { to: '/customers/groups', label: 'Группы клиентов', icon: 'mdi:account-multiple' },
      { to: '/customers/import', label: 'Импорт клиентов', icon: 'mdi:database-import' },
    ],
  },
  {
    label: 'Продажи',
    key: 'sales',
    icon: 'mdi:sale',
    submenu: [
      { to: '/sales/leads', label: 'Лиды', icon: 'mdi:account-tie' },
      { to: '/sales/deals', label: 'Сделки', icon: 'mdi:handshake' },
      { to: '/sales/invoices', label: 'Счета', icon: 'mdi:file-document' },
    ],
  },
  {
    label: 'Маркетинг',
    key: 'marketing',
    icon: 'mdi:email-newsletter',
    submenu: [
      { to: '/marketing/email', label: 'Email', icon: 'mdi:email' },
      { to: '/marketing/campaigns', label: 'Кампании', icon: 'mdi:bullhorn' },
    ],
  },
  { label: 'Задачи', icon: 'mdi:checkbox-marked-circle-plus-outline', to: '/tasks' },
  { label: 'Календарь', icon: 'mdi:calendar-month', to: '/calendar' },
  { label: 'Отчеты', icon: 'mdi:chart-box', to: '/reports' },
  {
    label: 'Настройки',
    key: 'settings',
    icon: 'mdi:cog',
    submenu: [
      { to: '/settings/users', label: 'Пользователи', icon: 'mdi:account' },
      { to: '/settings/roles', label: 'Роли', icon: 'mdi:shield-account' },
      { to: '/settings/integrations', label: 'Интеграции', icon: 'mdi:puzzle' },
    ],
  },
]
</script>

<style scoped>
.bg-sidebar {
  background: linear-gradient(180deg, rgba(10, 25, 47, 0.9) 0%, rgba(15, 32, 60, 0.8) 100%);
  color: #fff;
}
</style>