<script setup lang="ts">
type PainPoint = {
  day: string
  value: number
}

const painHistory: PainPoint[] = [
  { day: '1', value: 2 },
  { day: '2', value: 3 },
  { day: '3', value: 4 },
  { day: '4', value: 5 },
  { day: '5', value: 3 },
  { day: '6', value: 2 },
  { day: '7', value: 4 },
  { day: '8', value: 6 },
  { day: '9', value: 5 },
  { day: '10', value: 4 },
  { day: '11', value: 7 },
  { day: '12', value: 6 },
  { day: '13', value: 5 },
  { day: '14', value: 4 },
  { day: '15', value: 3 },
  { day: '16', value: 2 },
  { day: '17', value: 5 },
  { day: '18', value: 6 },
  { day: '19', value: 8 },
  { day: '20', value: 7 },
  { day: '21', value: 6 },
  { day: '22', value: 5 },
  { day: '23', value: 4 },
  { day: '24', value: 3 },
  { day: '25', value: 2 },
  { day: '26', value: 4 },
  { day: '27', value: 5 },
  { day: '28', value: 6 },
  { day: '29', value: 4 },
  { day: '30', value: 3 },
]
</script>

<template>
  <section class="section">
    <div class="section-header">
      <h3>Pijnverloop (laatste 30 dagen)</h3>
    </div>

    <div class="chart-card">
      <div class="chart-scale">
        <span>10</span>
        <span>8</span>
        <span>6</span>
        <span>4</span>
        <span>2</span>
        <span>0</span>
      </div>

      <div class="chart-wrapper">
        <div v-for="point in painHistory" :key="point.day" class="bar-group">
          <span class="bar-value">{{ point.value }}</span>
          <div class="bar-column">
            <div class="bar" :style="{ height: `${(point.value / 10) * 100}%` }" />
          </div>
          <span class="bar-label">{{ point.day }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  margin-bottom: 1.5rem;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.section-header h3 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--color-text);
}

.chart-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.02);
}

.chart-scale {
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  justify-items: end;
  width: 42px;
  min-height: 220px;
  margin-right: 0.75rem;
  color: var(--color-text-secondary);
  font-size: 0.72rem;
}

.chart-wrapper {
  display: flex;
  align-items: flex-end;
  gap: 0.4rem;
  min-width: 700px;
  height: 240px;
  overflow-x: auto;
  padding-bottom: 0.25rem;
  border-left: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.bar-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 18px;
  height: 100%;
  flex: 1 0 auto;
}

.bar-value {
  font-size: 0.62rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.3rem;
}

.bar-column {
  display: flex;
  align-items: flex-end;
  height: 180px;
  width: 100%;
  justify-content: center;
}

.bar {
  width: 100%;
  max-width: 16px;
  min-height: 6px;
  border-radius: 8px 8px 0 0;
  background: linear-gradient(180deg, #77c5ff 0%, #3b82f6 100%);
  box-shadow: 0 6px 12px rgba(59, 130, 246, 0.2);
}

.bar-label {
  margin-top: 0.4rem;
  font-size: 0.62rem;
  color: var(--color-text-secondary);
}

@media (max-width: 900px) {
  .chart-card {
    overflow-x: auto;
  }
}
</style>