<script lang="ts" setup>
import { ref } from 'vue'

// Состояние раскрытия подменю
const openSubmenus = ref<Record<string, boolean>>({
  customers: false,
  sales: false,
  marketing: false,
  settings: false
})

const toggleSubmenu = (menu: string) => {
  openSubmenus.value[menu] = !openSubmenus.value[menu]
}
</script>

<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full flex flex-col">
    <!-- Логотип -->
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="logo.png" width="100px" class="mx-auto"/>
    </NuxtLink>

    <!-- Основное меню -->
    <nav class="flex-1 overflow-y-auto">
      <ul class="space-y-2">
        <!-- Дашборд -->
        <li>
          <NuxtLink 
            to="/dashboard" 
            class="flex items-center p-3 rounded-lg hover:bg-sidebar-hover transition-colors"
            active-class="bg-sidebar-active"
          >
            <Icon name="mdi:view-dashboard" class="text-xl mr-3"/>
            <span>Дашборд</span>
          </NuxtLink>
        </li>

        <!-- Клиенты -->
        <li>
          <div 
            class="flex items-center justify-between p-3 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer"
            @click="toggleSubmenu('customers')"
          >
            <div class="flex items-center">
              <Icon name="mdi:account-group" class="text-xl mr-3"/>
              <span>Клиенты</span>
            </div>
            <Icon 
              name="mdi:chevron-down" 
              class="text-xl transition-transform"
              :class="{'transform rotate-180': openSubmenus.customers}"
            />
          </div>
          
          <ul 
            v-show="openSubmenus.customers" 
            class="ml-8 mt-1 space-y-1"
          >
            <li>
              <NuxtLink 
                to="/customers/list" 
                class="flex items-center p-2 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                active-class="bg-sidebar-active"
              >
                <Icon name="mdi:format-list-bulleted" class="text-lg mr-2"/>
                <span>Список клиентов</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/customers/groups" 
                class="flex items-center p-2 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                active-class="bg-sidebar-active"
              >
                <Icon name="mdi:account-multiple" class="text-lg mr-2"/>
                <span>Группы клиентов</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/customers/import" 
                class="flex items-center p-2 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                active-class="bg-sidebar-active"
              >
                <Icon name="mdi:database-import" class="text-lg mr-2"/>
                <span>Импорт клиентов</span>
              </NuxtLink>
            </li>
          </ul>
        </li>

        <!-- Продажи -->
        <li>
          <div 
            class="flex items-center justify-between p-3 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer"
            @click="toggleSubmenu('sales')"
          >
            <div class="flex items-center">
              <Icon name="mdi:sale" class="text-xl mr-3"/>
              <span>Продажи</span>
            </div>
            <Icon 
              name="mdi:chevron-down" 
              class="text-xl transition-transform"
              :class="{'transform rotate-180': openSubmenus.sales}"
            />
          </div>
          
          <ul 
            v-show="openSubmenus.sales" 
            class="ml-8 mt-1 space-y-1"
          >
            <li>
              <NuxtLink 
                to="/sales/leads" 
                class="flex items-center p-2 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                active-class="bg-sidebar-active"
              >
                <Icon name="mdi:lightbulb-on" class="text-lg mr-2"/>
                <span>Лиды</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/sales/deals" 
                class="flex items-center p-2 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                active-class="bg-sidebar-active"
              >
                <Icon name="mdi:handshake" class="text-lg mr-2"/>
                <span>Сделки</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/sales/invoices" 
                class="flex items-center p-2 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                active-class="bg-sidebar-active"
              >
                <Icon name="mdi:receipt" class="text-lg mr-2"/>
                <span>Счета</span>
              </NuxtLink>
            </li>
          </ul>
        </li>

        <!-- Маркетинг -->
        <li>
          <div 
            class="flex items-center justify-between p-3 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer"
            @click="toggleSubmenu('marketing')"
          >
            <div class="flex items-center">
              <Icon name="mdi:email-newsletter" class="text-xl mr-3"/>
              <span>Маркетинг</span>
            </div>
            <Icon 
              name="mdi:chevron-down" 
              class="text-xl transition-transform"
              :class="{'transform rotate-180': openSubmenus.marketing}"
            />
          </div>
          
          <ul 
            v-show="openSubmenus.marketing" 
            class="ml-8 mt-1 space-y-1"
          >
            <li>
              <NuxtLink 
                to="/marketing/email" 
                class="flex items-center p-2 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                active-class="bg-sidebar-active"
              >
                <Icon name="mdi:email-send" class="text-lg mr-2"/>
                <span>Email рассылки</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/marketing/campaigns" 
                class="flex items-center p-2 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                active-class="bg-sidebar-active"
              >
                <Icon name="mdi:chart-line" class="text-lg mr-2"/>
                <span>Компании</span>
              </NuxtLink>
            </li>
          </ul>
        </li>

        <!-- Задачи -->
        <li>
          <NuxtLink 
            to="/tasks" 
            class="flex items-center p-3 rounded-lg hover:bg-sidebar-hover transition-colors"
            active-class="bg-sidebar-active"
          >
            <Icon name="mdi:checkbox-marked-circle-plus-outline" class="text-xl mr-3"/>
            <span>Задачи</span>
          </NuxtLink>
        </li>

        <!-- Календарь -->
        <li>
          <NuxtLink 
            to="/calendar" 
            class="flex items-center p-3 rounded-lg hover:bg-sidebar-hover transition-colors"
            active-class="bg-sidebar-active"
          >
            <Icon name="mdi:calendar-month" class="text-xl mr-3"/>
            <span>Календарь</span>
          </NuxtLink>
        </li>

        <!-- Отчеты -->
        <li>
          <NuxtLink 
            to="/reports" 
            class="flex items-center p-3 rounded-lg hover:bg-sidebar-hover transition-colors"
            active-class="bg-sidebar-active"
          >
            <Icon name="mdi:chart-box" class="text-xl mr-3"/>
            <span>Отчеты</span>
          </NuxtLink>
        </li>

        <!-- Настройки -->
        <li class="pt-4 mt-4 border-t border-sidebar-divider">
          <div 
            class="flex items-center justify-between p-3 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer"
            @click="toggleSubmenu('settings')"
          >
            <div class="flex items-center">
              <Icon name="mdi:cog" class="text-xl mr-3"/>
              <span>Настройки</span>
            </div>
            <Icon 
              name="mdi:chevron-down" 
              class="text-xl transition-transform"
              :class="{'transform rotate-180': openSubmenus.settings}"
            />
          </div>
          
          <ul 
            v-show="openSubmenus.settings" 
            class="ml-8 mt-1 space-y-1"
          >
            <li>
              <NuxtLink 
                to="/settings/users" 
                class="flex items-center p-2 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                active-class="bg-sidebar-active"
              >
                <Icon name="mdi:account-supervisor" class="text-lg mr-2"/>
                <span>Пользователи</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/settings/roles" 
                class="flex items-center p-2 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                active-class="bg-sidebar-active"
              >
                <Icon name="mdi:shield-account" class="text-lg mr-2"/>
                <span>Роли и доступы</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/settings/integrations" 
                class="flex items-center p-2 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                active-class="bg-sidebar-active"
              >
                <Icon name="mdi:connection" class="text-lg mr-2"/>
                <span>Интеграции</span>
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <!-- Профиль пользователя -->
    <div class="pt-4 mt-auto border-t border-sidebar-divider">
      <NuxtLink 
        to="/profile" 
        class="flex items-center p-3 rounded-lg hover:bg-sidebar-hover transition-colors"
      >
        <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
          <Icon name="mdi:account" class="text-lg"/>
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-medium truncate">Иван Иванов</p>
          <p class="text-xs text-gray-400 truncate">Администратор</p>
        </div>
      </NuxtLink>
    </div>
  </aside>
</template>

<style lang="css" scoped>
.bg-sidebar {
  background-color: #bc0000; /* slate-800 */
}

.bg-sidebar-hover {
  background-color: #fd5ec0; /* slate-700 */
}

.bg-sidebar-active {
  background-color: #ff90d4; /* slate-600 */
}

.bg-sidebar-divider {
  border-color: #ff90d4; /* slate-700 */
}
</style>