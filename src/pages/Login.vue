<script setup lang="ts">
import Dashboard from './Dashboard.vue'
import AuthBrand from '../components/login/AuthBrand.vue'
import LoginForm from '../components/login/LoginForm.vue'

import { showHome } from './functions/login.ts'
import './Style/Login.css'
</script>

<template>
  <div v-if="!showHome" class="auth-page">
    <div class="auth-panel">
      <AuthBrand />

      <div class="auth-header">
        <h1>Inloggen</h1>
        <p class="subtitle">
          Nog geen account maak hem dan <a href="/register">hier</a> aan
        </p>
      </div>

      <LoginForm />
    </div>
  </div>

  <Dashboard v-else />
</template>