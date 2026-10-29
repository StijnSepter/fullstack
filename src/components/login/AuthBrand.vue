<template>
  <div class="brand">
    <div class="brand-mark">R</div>
    <div class="brand-text">
      <span class="brand-name">RevaliNow</span>
      <span class="brand-subtitle">Revalidatieportal</span>
    </div>
  </div>
</template>

<style scoped>
.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.75rem;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, #1d4ed8, #60a5fa);
  color: #ffffff;
  display: grid;
  place-items: center;
  font-size: 1.05rem;
  font-weight: 700;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.brand-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: #172033;
}

.brand-subtitle {
  font-size: 0.75rem;
  color: #334155;
}
</style>