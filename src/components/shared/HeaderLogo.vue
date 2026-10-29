<template>
  <div class="brand">
    <div class="brand-mark">R</div>
    <div class="brand-text">
      <span class="brand-name">RevaliNow</span>
      <span class="brand-subtitle">Client portal</span>
    </div>
  </div>
</template>

<style scoped>
.brand {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5rem 0.65rem 0.2rem;
}

.brand-mark {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--color-primary), #60a5fa);
  color: var(--color-primary-foreground);
  display: grid;
  place-items: center;
  font-size: 1rem;
  font-weight: 700;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.brand-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text);
}

.brand-subtitle {
  font-size: 0.72rem;
  color: var(--color-text-secondary);
}

</style>