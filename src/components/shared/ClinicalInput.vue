<script setup lang="ts">
withDefaults(
    defineProps<{
      modelValue?: string
      label?: string
      type?: string
      name?: string
      placeholder?: string
      autocomplete?: string
      required?: boolean
      error?: string
      invalid?: boolean
    }>(),
    {
      modelValue: '',
      type: 'text',
      name: '',
      placeholder: '',
      autocomplete: 'off',
      required: false,
      error: '',
      invalid: false,
    }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <label class="field" :for="name">
    <span v-if="label" class="field-label">{{ label }}</span>

    <input
        :id="name"
        :type="type"
        :value="modelValue"
        :name="name"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :required="required"
        :aria-invalid="Boolean(error || invalid)"
        :class="{ invalid: Boolean(error || invalid) }"
        @input="onInput"
    />

    <small v-if="error" class="field-error">{{ error }}</small>
  </label>
</template>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
}

input {
  width: 100%;
  min-height: 46px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-surface);
  color: var(--color-text);
  padding: 0.75rem 0.9rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

input::placeholder {
  color: var(--color-text-muted);
}

input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

input.invalid {
  border-color: var(--color-danger);
  background: var(--color-danger-soft);
}

input.invalid:focus {
  box-shadow: 0 0 0 3px rgba(153, 27, 27, 0.12);
}

.field-error {
  color: var(--color-danger);
  font-size: 0.75rem;
  font-weight: 600;
}
</style>