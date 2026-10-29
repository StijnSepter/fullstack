<script setup lang="ts">
defineProps<{
  currentView: 'overview' | 'pain' | 'logbook' | 'appointment' | 'practice'
}>()

const emit = defineEmits<{
  'change-view': [view: 'overview' | 'pain' | 'logbook' | 'appointment' | 'practice']
}>()

import HeaderLogo from '../shared/HeaderLogo.vue';
</script>

<template>
  <aside class="sidebar">
    <HeaderLogo />


    <div class="nav-section">
      <p class="nav-label">Navigatie</p>

      <nav class="nav" aria-label="Hoofdnavigatie">
        <button
            type="button"
            class="nav-item"
            :class="{ active: currentView === 'overview' }"
            @click="emit('change-view', 'overview')"
        >
          <span class="nav-icon">◉</span>
          <span class="nav-text">Overzicht</span>
          <span v-if="5 > 0" class="nav-badge">5</span>
        </button>

        <button
            type="button"
            class="nav-item"
            :class="{ active: currentView === 'pain' }"
            @click="emit('change-view', 'pain')"
        >
          <span class="nav-icon">↗</span>
          <span class="nav-text">Pijnregistratie</span>
<!--          <span v-if="badge > 0" class="nav-badge">{{ badge }}</span>-->
        </button>

        <button
            type="button"
            class="nav-item"
            :class="{ active: currentView === 'practice' }"
            @click="emit('change-view', 'practice')"
        >
          <span class="nav-icon">◎</span>
          <span class="nav-text">Oefeningen</span>
          <span v-if="0 > 0" class="nav-badge">0</span>
        </button>

        <button
            type="button"
            class="nav-item"
            :class="{ active: currentView === 'logbook' }"
            @click="emit('change-view', 'logbook')"
        >
          <span class="nav-icon">✎</span>
          <span class="nav-text">Logboek</span>
          <span v-if="0 > 0" class="nav-badge">6</span>
        </button>

        <button
            type="button"
            class="nav-item"
            :class="{ active: currentView === 'appointment' }"
            @click="emit('change-view', 'appointment')"
        >
          <span class="nav-icon">☰</span>
          <span class="nav-text">Afspraken</span>
          <span v-if="0 > 0" class="nav-badge">5</span>
        </button>
      </nav>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  background: rgba(255, 255, 255, 0.8);
  border-right: 1px solid var(--color-border);
  padding: 1.25rem 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  backdrop-filter: blur(8px);
}

.nav-section {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.nav-label {
  margin: 0;
  padding: 0 0.65rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  border: 1px solid transparent;
  background: transparent;
  border-radius: 12px;
  padding: 0.8rem 0.75rem;
  text-align: left;
  color: var(--color-text-secondary);
  font-weight: 600;
  min-height: 44px;
  transition: all 0.2s ease;
}

.nav-item:hover {
  background: var(--color-surface-hover);
  border-color: var(--color-border);
  color: var(--color-text);
}

.nav-item.active {
  background: var(--color-primary-soft);
  border-color: rgba(37, 99, 235, 0.12);
  color: var(--color-primary);
  box-shadow: inset 0 0 0 1px rgba(37, 99, 235, 0.04);
}

.nav-icon {
  width: 28px;
  height: 28px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  background: rgba(37, 99, 235, 0.06);
  flex-shrink: 0;
}

.nav-text {
  flex: 1;
}

.nav-badge {
  min-width: 28px;
  padding: 0.25rem 0.45rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.04);
  color: var(--color-text-secondary);
  font-size: 0.7rem;
  font-weight: 700;
  text-align: center;
}

.nav-item.active .nav-badge {
  background: rgba(37, 99, 235, 0.12);
  color: var(--color-primary);
}

.focus-list li {
  position: relative;
  padding-left: 0.9rem;
}

.focus-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.45rem;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-brand-green);
}

.sidebar-status strong {
  font-size: 0.95rem;
  color: var(--color-text);
}
</style>