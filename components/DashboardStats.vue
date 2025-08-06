<template>
  <div class="dashboard">
    <h2 class="dashboard-title">Статистика звонков</h2>
    
    <div class="stats-grid">
      <!-- Карточка "Сегодня" -->
      <div class="stat-card today">
        <div class="stat-value">{{ stats.today }}</div>
        <div class="stat-label">Сегодня</div>
        <div class="stat-change" :class="stats.todayChange >= 0 ? 'positive' : 'negative'">
          {{ stats.todayChange >= 0 ? '↑' : '↓' }} {{ Math.abs(stats.todayChange) }}%
        </div>
      </div>

      <!-- Карточка "Неделя" -->
      <div class="stat-card week">
        <div class="stat-value">{{ stats.week }}</div>
        <div class="stat-label">За неделю</div>
        <div class="stat-change" :class="stats.weekChange >= 0 ? 'positive' : 'negative'">
          {{ stats.weekChange >= 0 ? '↑' : '↓' }} {{ Math.abs(stats.weekChange) }}%
        </div>
      </div>

      <!-- Карточка "Месяц" -->
      <div class="stat-card month">
        <div class="stat-value">{{ stats.month }}</div>
        <div class="stat-label">За месяц</div>
        <div class="stat-change" :class="stats.monthChange >= 0 ? 'positive' : 'negative'">
          {{ stats.monthChange >= 0 ? '↑' : '↓' }} {{ Math.abs(stats.monthChange) }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Моковые данные (в реальном проекте замените на API-запрос)
const stats = {
  today: 24,         // Звонков сегодня
  todayChange: 5,    // Изменение в % (может быть отрицательным)
  week: 158,         // Звонков за неделю
  weekChange: 12,    // Изменение в %
  month: 642,        // Звонков за месяц
  monthChange: -3,   // Изменение в %
};
</script>

<style scoped>
.dashboard {
  font-family: Arial, sans-serif;
  /* max-width: 1000px; */
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.dashboard-title {
  color: #333;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.stat-card {
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  background: #f9f9f9;
  transition: transform 0.2s;
}

.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Цвета карточек */
.today { border-top: 4px solid #3498db; }
.week { border-top: 4px solid #2ecc71; }
.month { border-top: 4px solid #9b59b6; }

.stat-value {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 10px 0;
  color: #2c3e50;
}

.stat-label {
  font-size: 1rem;
  color: #7f8c8d;
}

.stat-change {
  margin-top: 10px;
  font-size: 0.9rem;
  font-weight: 500;
}

.positive { color: #27ae60; }  /* Зеленый для роста */
.negative { color: #e74c3c; }  /* Красный для снижения */
</style>