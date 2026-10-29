<script setup lang="ts">
withDefaults(
    defineProps<{
      type?: 'button' | 'submit' | 'reset'
      variant?: 'primary' | 'secondary' | 'ghost'
      block?: boolean
      disabled?: boolean
    }>(),
    {
      type: 'button',
      variant: 'primary',
      block: false,
      disabled: false,
    }
)

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<template>
  <button
      :type="type"
      :disabled="disabled"
      :class="['clinical-button', `variant-${variant}`, { block }]"
      @click="(event) => emit('click', event)"
  >
    <slot />
  </button>
</template>

<style scoped>
.clinical-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  min-height: 44px;
  padding: 0.75rem 1rem;
  font-weight: 600;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.15s ease;
}

.clinical-button:hover:not(:disabled) {
  transform: translateY(-1px);
}

.clinical-button:active:not(:disabled) {
  transform: translateY(0);
}

.clinical-button:focus-visible {
  outline: 3px solid rgba(29, 78, 216, 0.28);
  outline-offset: 2px;
}

.clinical-button.block {
  width: 100%;
}

.variant-primary {
  background: var(--color-primary);
  color: var(--color-primary-foreground);
  border-color: var(--color-primary);
}

.variant-primary:hover:not(:disabled) {
  background: var(--color-primary-hover);
  border-color: var(--color-primary-hover);
}

.variant-primary:active:not(:disabled) {
  background: var(--color-primary-active);
  border-color: var(--color-primary-active);
}

.variant-secondary {
  background: var(--color-secondary);
  color: var(--color-secondary-foreground);
  border-color: var(--color-border);
}

.variant-secondary:hover:not(:disabled) {
  background: var(--color-secondary-hover);
}

.variant-ghost {
  background: transparent;
  color: var(--color-text);
  border-color: transparent;
}

.variant-ghost:hover:not(:disabled) {
  background: var(--color-surface-hover);
}
</style>