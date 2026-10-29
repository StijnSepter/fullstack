<script setup lang="ts">
type PainEntry = {
  label: string
  value: string
  subtitle: string
  trend: string
}

const painEntries: PainEntry[] = [
  { label: 'Schouder', value: '4/10', subtitle: 'Laatste meting', trend: '−1 van gisteren' },
  { label: 'Knie', value: '3/10', subtitle: 'Bij belasting', trend: 'stabiel' },
  { label: 'Rug', value: '5/10', subtitle: 's avonds', trend: '+1 in de afgelopen week' },
]
</script>

<template>
  <section class="section">
    <div class="section-header">
      <h3>Recente pijnindicaties</h3>
      <a href="#" class="section-link">Bekijk overzicht</a>
    </div>

    <div class="pain-grid">
      <article v-for="item in painEntries" :key="item.label" class="info-card pain-card">
        <div class="card-header">
          <span class="card-label">{{ item.label }}</span>
          <span class="trend">{{ item.trend }}</span>
        </div>

        <div class="pain-value">{{ item.value }}</div>
        <p class="muted">{{ item.subtitle }}</p>
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

.pain-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.info-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1rem 1.1rem;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.02);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.85rem;
}

.card-label {
  font-size: 0.82rem;
  color: var(--color-text-secondary);
  font-weight: 700;
}

.trend {
  font-size: 0.74rem;
  color: var(--color-text-muted);
}

.pain-value {
  font-size: 2rem;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.04em;
  margin-bottom: 0.5rem;
}

.muted {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 0.82rem;
}

@media (max-width: 900px) {
  .pain-grid {
    grid-template-columns: 1fr;
  }
}
</style>