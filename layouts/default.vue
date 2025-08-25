<script lang="ts" setup>
const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const handleResize = () => {
  if (window.innerWidth >= 768) {
    isSidebarOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="layout-container">
    <header class="mobile-header">
      <button class="burger-btn" @click="toggleSidebar">
        <Icon name="mdi:menu" class="text-2xl" />
      </button>
      <NuxtLink to="/" class="mobile-logo">
        <NuxtImg src="logo.svg" width="120px" />
      </NuxtLink>
      <NuxtLink to="/profile" class="mobile-avatar">
        <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
          <Icon name="mdi:account" class="text-lg" />
        </div>
      </NuxtLink>
    </header>
    <div class="sidebar-overlay" :class="{ 'overlay-visible': isSidebarOpen }" @click="toggleSidebar"></div>
    <aside class="sidebar" :class="{ 'sidebar-open': isSidebarOpen }">
      <LayoutSidebar @close="isSidebarOpen = false" />
    </aside>
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}


.mobile-header {
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(113, 94, 232, 0.8) 0%, rgba(147, 79, 210, 0.9) 100%);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.burger-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-logo {
  display: flex;
  align-items: center;
}

.mobile-avatar {
  display: flex;
  align-items: center;
}

.sidebar-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay-visible {
  opacity: 1;
}


.sidebar {
  position: fixed;
  left: -300px;
  top: 0;
  height: 100vh;
  width: 300px;
  z-index: 999;
  transition: left 0.3s ease;
  overflow-y: auto;
}

.sidebar-open {
  left: 0;
}

.main-content {
  flex: 1;
  padding: 20px;
  margin-left: 0;
  transition: margin-left 0.3s ease;
}

@media (min-width: 768px) {
  .layout-container {
    flex-direction: row;
  }

  .mobile-header {
    display: none;
  }

  .sidebar-overlay {
    display: none !important;
  }

  .sidebar {
    position: static;
    left: 0;
    height: 100vh;
    width: 300px;
    transform: none;
  }

  .main-content {
    margin-left: 0;
    flex: 1;
  }

  .sidebar {
    position: fixed;
    left: -280px;
    transition: left 0.3s ease;
    z-index: 1000;
  }

  .sidebar:hover {
    left: 0;
  }

  .main-content {
    margin-left: 20px;
  }

  .sidebar:hover + .main-content {
    margin-left: 300px;
  }
}

@media (max-width: 767px) {
  .mobile-header {
    display: flex;
  }

  .sidebar-overlay {
    display: block;
  }
}
</style>