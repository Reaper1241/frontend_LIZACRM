<script lang="ts" setup>
import { ref } from 'vue';


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
  <aside class="bg-sidebar py-8 h-full relative w-full flex flex-col">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="logo.svg" width="100px" class="mx-auto"/>
    </NuxtLink>

    <nav class="flex-1 overflow-y-auto">
      <ul class="space-y-2">
        <li>
          <NuxtLink 
            to="/" 
            class="flex items-center sidebar-item  p-2 hover:bg-sidebar-hover transition-colors"
            active-class="bg-sidebar-active"
          >
            <Icon name="mdi:view-dashboard" class="text-xl mr-3"/>
            <span>Дашборд</span>
          </NuxtLink>
        </li>

        <li>
          <div 
            class="flex items-center sidebar-item  justify-between p-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer group"
            @click="toggleSubmenu('customers')"
          >
            <div class="flex items-center sidebar-item ">
              <Icon name="mdi:account-group" class="text-xl mr-3"/>
              <span>Клиенты</span>
            </div>
            <Icon 
              name="mdi:chevron-down" 
              class="text-xl transition-transform duration-200"
              :class="{'transform rotate-180': openSubmenus.customers}"
            />
          </div>
          
          <div 
            class="overflow-hidden transition-all duration-300 ease-in-out"
            :class="{'max-h-0': !openSubmenus.customers, 'max-h-96': openSubmenus.customers}"
          >
            <ul class="ml-8 mt-1 space-y-1">
              <li>
                <NuxtLink 
                  to="/clients" 
                  class="flex items-center sidebar-item  p-1 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                  active-class="bg-sidebar-active"
                >
                  <Icon name="mdi:format-list-bulleted" class="text-lg mr-2"/>
                  <span>Список клиентов</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/customers/groups" 
                  class="flex items-center sidebar-item  p-1 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                  active-class="bg-sidebar-active"
                >
                  <Icon name="mdi:account-multiple" class="text-lg mr-2"/>
                  <span>Группы клиентов</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/customers/import" 
                  class="flex items-center sidebar-item  p-1 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                  active-class="bg-sidebar-active"
                >
                  <Icon name="mdi:database-import" class="text-lg mr-2"/>
                  <span>Импорт клиентов</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div 
            class="flex items-center sidebar-item  justify-between p-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer group"
            @click="toggleSubmenu('sales')"
          >
            <div class="flex items-center sidebar-item ">
              <Icon name="mdi:sale" class="text-xl mr-3"/>
              <span>Продажи</span>
            </div>
            <Icon 
              name="mdi:chevron-down" 
              class="text-xl transition-transform duration-200"
              :class="{'transform rotate-180': openSubmenus.sales}"
            />
          </div>
          
          <div 
            class="overflow-hidden transition-all duration-300 ease-in-out"
            :class="{'max-h-0': !openSubmenus.sales, 'max-h-96': openSubmenus.sales}"
          >
            <ul class="ml-8 mt-1 space-y-1">
              <li>
                <NuxtLink 
                  to="/sales/leads" 
                  class="flex items-center sidebar-item  p-1 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                  active-class="bg-sidebar-active"
                >
                  <Icon name="mdi:lightbulb-on" class="text-lg mr-2"/>
                  <span>Лиды</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/sales/deals" 
                  class="flex items-center sidebar-item  p-1 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                  active-class="bg-sidebar-active"
                >
                  <Icon name="mdi:handshake" class="text-lg mr-2"/>
                  <span>Сделки</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/sales/invoices" 
                  class="flex items-center sidebar-item  p-1 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                  active-class="bg-sidebar-active"
                >
                  <Icon name="mdi:receipt" class="text-lg mr-2"/>
                  <span>Счета</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div 
            class="flex items-center sidebar-item  justify-between p-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer group"
            @click="toggleSubmenu('marketing')"
          >
            <div class="flex items-center sidebar-item ">
              <Icon name="mdi:email-newsletter" class="text-xl mr-3"/>
              <span>Маркетинг</span>
            </div>
            <Icon 
              name="mdi:chevron-down" 
              class="text-xl transition-transform duration-200"
              :class="{'transform rotate-180': openSubmenus.marketing}"
            />
          </div>
          
          <div 
            class="overflow-hidden transition-all duration-300 ease-in-out"
            :class="{'max-h-0': !openSubmenus.marketing, 'max-h-96': openSubmenus.marketing}"
          >
            <ul class="ml-8 mt-1 space-y-1">
              <li>
                <NuxtLink 
                  to="/marketing/email" 
                  class="flex items-center sidebar-item  p-1 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                  active-class="bg-sidebar-active"
                >
                  <Icon name="mdi:email-send" class="text-lg mr-2"/>
                  <span>Email рассылки</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/marketing/campaigns" 
                  class="flex items-center sidebar-item  p-1 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                  active-class="bg-sidebar-active"
                >
                  <Icon name="mdi:chart-line" class="text-lg mr-2"/>
                  <span>Компании</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NuxtLink 
            to="/tasks" 
            class="flex items-center sidebar-item  p-2 rounded-lg hover:bg-sidebar-hover transition-colors"
            active-class="bg-sidebar-active"
          >
            <Icon name="mdi:checkbox-marked-circle-plus-outline" class="text-xl mr-3"/>
            <span>Задачи</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/calendar" 
            class="flex items-center sidebar-item  p-2 rounded-lg hover:bg-sidebar-hover transition-colors"
            active-class="bg-sidebar-active"
          >
            <Icon name="mdi:calendar-month" class="text-xl mr-3"/>
            <span>Календарь</span>
          </NuxtLink>
        </li>


        <li>
          <NuxtLink 
            to="/reports" 
            class="flex items-center sidebar-item  p-2 rounded-lg hover:bg-sidebar-hover transition-colors"
            active-class="bg-sidebar-active"
          >
            <Icon name="mdi:chart-box" class="text-xl mr-3"/>
            <span>Отчеты</span>
          </NuxtLink>
        </li>
        <li class="pt-4 mt-4 border-t border-sidebar-divider">
          <div 
            class="flex items-center sidebar-item  justify-between p-2 rounded-lg hover:bg-sidebar-hover transition-colors cursor-pointer group"
            @click="toggleSubmenu('settings')"
          >
            <div class="flex items-center sidebar-item ">
              <Icon name="mdi:cog" class="text-xl mr-3"/>
              <span>Настройки</span>
            </div>
            <Icon 
              name="mdi:chevron-down" 
              class="text-xl transition-transform duration-200"
              :class="{'transform rotate-180': openSubmenus.settings}"
            />
          </div>
          
          <div 
            class="overflow-hidden transition-all duration-300 ease-in-out"
            :class="{'max-h-0': !openSubmenus.settings, 'max-h-96': openSubmenus.settings}"
          >
            <ul class="ml-8 mt-1 space-y-1">
              <li>
                <NuxtLink 
                  to="/settings/users" 
                  class="flex items-center sidebar-item  p-1 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                  active-class="bg-sidebar-active"
                >
                  <Icon name="mdi:account-supervisor" class="text-lg mr-2"/>
                  <span>Пользователи</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/settings/roles" 
                  class="flex items-center sidebar-item  p-1 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                  active-class="bg-sidebar-active"
                >
                  <Icon name="mdi:shield-account" class="text-lg mr-2"/>
                  <span>Роли и доступы</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  to="/settings/integrations" 
                  class="flex items-center sidebar-item  p-1 rounded-lg hover:bg-sidebar-hover transition-colors text-sm"
                  active-class="bg-sidebar-active"
                >
                  <Icon name="mdi:connection" class="text-lg mr-2"/>
                  <span>Интеграции</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
    <div class="pt-4 mt-auto border-t border-sidebar-divider">
      <NuxtLink 
        to="/profile" 
        class="flex items-center sidebar-item  p-2 rounded-lg hover:bg-sidebar-hover transition-colors"
      >
        <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center sidebar-item  justify-center text-white mr-3">
          <Icon name="mdi:account" class="text-lg"/>
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-medium truncate">Иван Льгов</p>
          <p class="text-xs text-gray-400 truncate">Администратор</p>
        </div>
      </NuxtLink>
    </div>
  </aside>
</template>

<style lang="css" scoped>
.bg-sidebar {
  background: linear-gradient(
    135deg,
    rgba(71, 51, 195, 0.6) 0%,    
    rgba(138, 43, 226, 0.7) 100%
  );
  
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  
  border: 1px solid rgba(255, 255, 255, 0.15);
  
  box-shadow:
    0 8px 32px rgba(106, 13, 173, 0.4),
    inset 0 4px 12px rgba(255, 255, 255, 0.1),
    inset 0 -4px 12px rgba(0, 0, 0, 0.3);

  transition: all 0.4s ease;
  overflow: hidden;
  position: relative;
}

@keyframes glass-shine {
  0% { transform: rotate(30deg) translate(0%, 0%); }
  50% { transform: rotate(30deg) translate(20%, 20%); }
  100% { transform: rotate(30deg) translate(-0%, -0%); }
}

.sidebar-item  {
  border-radius: 5px !important;
  margin-inline: 10px;
  color: black;
  font-weight: 500;
}

.bg-sidebar-hover {
  background: rgba(255, 255, 255, 0.2);
}

.bg-sidebar-active {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.bg-sidebar-divider {
  border-color: #ff90d4; 
}

.transition-all {
  transition-property: all;
}

.duration-300 {
  transition-duration: 300ms;
}

.ease-in-out {
  transition-timing-function: ease-in-out;
}

.max-h-0 {
  max-height: 0;
}

.max-h-96 {
  max-height: 24rem; 
}
</style>