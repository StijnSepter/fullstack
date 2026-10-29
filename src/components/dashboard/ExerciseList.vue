<script setup lang="ts">
type Exercise = {
  name: string
  day: string
  time: string
  duration: string
  status: 'Gepland' | 'Klaar' | 'Vandaag'
}

const exercises: Exercise[] = [
  { name: 'Schoudermobilisatie', day: 'Vandaag', time: '08:30', duration: '15 min', status: 'Vandaag' },
  { name: 'Kniebuiging + stretch', day: 'Vandaag', time: '10:00', duration: '10 min', status: 'Gepland' },
  { name: 'Core stabilisatie', day: 'Dinsdag', time: '14:15', duration: '20 min', status: 'Gepland' },
  { name: 'Looptraining', day: 'Woensdag', time: '09:00', duration: '25 min', status: 'Gepland' },
]
</script>

<template>
  <section class="section">
    <div class="section-header">
      <h3>Fysio-oefeningen</h3>
      <a href="#" class="section-link">Alle oefeningen</a>
    </div>

    <div class="exercise-list">
      <article v-for="exercise in exercises" :key="exercise.name" class="exercise-item">
        <div class="exercise-main">
          <div class="exercise-icon">✓</div>

          <div>
            <h4>{{ exercise.name }}</h4>
            <p>{{ exercise.day }} • {{ exercise.time }}</p>
          </div>
        </div>

        <div class="exercise-meta">
          <span class="pill" :class="exercise.status.toLowerCase()">{{ exercise.status }}</span>
          <span>{{ exercise.duration }}</span>
        </div>
      </article>
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

.section-link {
  color: var(--color-primary);
  font-size: 0.85rem;
  font-weight: 600;
}

.exercise-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.exercise-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 0.9rem 1rem;
}

.exercise-main {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.exercise-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--color-primary-soft);
  color: var(--color-primary);
  display: grid;
  place-items: center;
  font-weight: 700;
}

.exercise-item h4 {
  margin: 0 0 0.2rem;
  font-size: 1rem;
  color: var(--color-text);
}

.exercise-item p {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 0.8rem;
}

.exercise-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.45rem;
  font-size: 0.78rem;
  color: var(--color-text-secondary);
}

.pill {
  padding: 0.38rem 0.55rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.72rem;
  border: 1px solid transparent;
}

.pill.vandaag {
  background: var(--color-info-soft);
  color: var(--color-info);
  border-color: rgba(29, 78, 216, 0.12);
}

.pill.gepland {
  background: var(--color-secondary);
  color: var(--color-text-secondary);
  border-color: var(--color-border);
}

@media (max-width: 560px) {
  .exercise-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .exercise-meta {
    align-items: flex-start;
  }
}
</style>