<script setup lang="ts">
defineProps<{
  label?: string
  title: string
  userName?: string
}>()
</script>

<template>
  <header class="topbar">
    <div>
      <p class="eyebrow">{{ label ?? 'Dashboard' }}</p>
      <h1>{{ title }}</h1>
    </div>

    <button
        v-if="userName"
        class="profile-button"
        type="button"
        :aria-label="`Profiel van ${userName}`"
    >
      {{ userName.charAt(0).toUpperCase() }}
    </button>
  </header>
</template>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.eyebrow {
  margin: 0 0 0.35rem;
  color: var(--color-primary);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.topbar h1 {
  margin: 0;
  font-size: clamp(1.9rem, 2vw, 2.5rem);
  letter-spacing: -0.04em;
}

.profile-button {
  width: 42px;
  height: 42px;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  background: var(--color-surface);
  font-weight: 700;
  color: var(--color-text);
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.04);
}

@media (max-width: 560px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>