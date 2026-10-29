<script setup lang="ts">
withDefaults(
    defineProps<{
      modelValue?: number
      label?: string
      min?: number
      max?: number
      step?: number
    }>(),
    {
      modelValue: 0,
      label: 'Waarde',
      min: 0,
      max: 10,
      step: 1,
    }
)

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', Number(target.value))
}
</script>

<template>
  <div class="slider-field">
    <div class="slider-header">
      <label class="slider-label">{{ label }}</label>
      <span class="slider-value">{{ modelValue }}</span>
    </div>

    <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :value="modelValue"
        @input="onInput"
        aria-label="Pijnscore"
    />

    <div class="slider-scale">
      <span>0</span>
      <span>5</span>
      <span>10</span>
    </div>
  </div>
</template>

<style scoped>
.slider-field {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.slider-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.slider-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
}

.slider-value {
  min-width: 2.25rem;
  display: inline-flex;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  background: var(--color-primary-soft);
  color: var(--color-primary);
  font-weight: 700;
  font-size: 0.8rem;
}

input[type='range'] {
  width: 100%;
  accent-color: var(--color-primary);
  cursor: pointer;
}

.slider-scale {
  display: flex;
  justify-content: space-between;
  color: var(--color-text-secondary);
  font-size: 0.75rem;
}
</style>