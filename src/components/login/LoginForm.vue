<script setup lang="ts">
import ClinicalButton from '../shared/ClinicalButton.vue'
import ClinicalInput from '../shared/ClinicalInput.vue'

import {
  email,
  password,
  rememberMe,
  emailError,
  passwordError,
  validationMessage,
  handleLogin,
} from '@/pages/functions/login.ts'
</script>

<template>
  <form class="auth-form" @submit.prevent="handleLogin" novalidate>
    <p v-if="validationMessage" class="form-alert">
      {{ validationMessage }}
    </p>

    <ClinicalInput
        v-model="email"
        label="E-mailadres"
        type="email"
        name="email"
        placeholder="naam@voorbeeld.nl"
        autocomplete="email"
        :error="emailError"
        :invalid="Boolean(emailError)"
    />

    <ClinicalInput
        v-model="password"
        label="Wachtwoord"
        type="password"
        name="password"
        placeholder="Voer je wachtwoord in"
        autocomplete="current-password"
        :error="passwordError"
        :invalid="Boolean(passwordError)"
    />

    <div class="form-row">
      <label class="checkbox">
        <input v-model="rememberMe" type="checkbox" />
        <span>Onthoud mij</span>
      </label>

      <a href="#" class="text-link">Wachtwoord vergeten?</a>
    </div>

    <ClinicalButton type="submit" block>
      Inloggen
    </ClinicalButton>
  </form>
</template>

<style scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-alert {
  display: flex;
  align-items: center;
  background: #fee2e2;
  color: #991b1b;
  border: 1px solid rgba(153, 27, 27, 0.15);
  border-radius: 8px;
  padding: 0.75rem 0.9rem;
  font-size: 0.85rem;
  font-weight: 600;
  margin: 0 0 0.25rem;
}

.form-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.25rem;
}

.checkbox {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #334155;
  font-size: 0.875rem;
}

.checkbox input {
  width: 16px;
  height: 16px;
  accent-color: #1d4ed8;
}

.text-link {
  color: #1d4ed8;
  font-weight: 600;
  font-size: 0.875rem;
}

@media (max-width: 520px) {
  .form-row {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>