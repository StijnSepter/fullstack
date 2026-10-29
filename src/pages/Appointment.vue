<script setup lang="ts">
import {
  futureAppointments,
  pastAppointments,
  formatDate,
} from './functions/Appointment'

import './Style/Appointment.css'
</script>

<template>
  <section class="appointment-page">
    <div class="appointment-card">
      <div class="section-header">
        <h2>Komende afspraken</h2>
      </div>

      <div v-if="futureAppointments.length" class="appointment-list">
        <article
            v-for="item in futureAppointments"
            :key="item.id"
            class="appointment-item"
        >
          <div class="appointment-date">
            <span class="date-day">{{ new Date(item.date).getDate() }}</span>
            <span class="date-month">
              {{ new Date(item.date).toLocaleDateString('nl-NL', { month: 'short' }) }}
            </span>
          </div>

          <div class="appointment-content">
            <p class="appointment-type">{{ item.type }}</p>
            <h3>{{ formatDate(item.date) }}</h3>
            <p class="appointment-meta">{{ item.time }} · {{ item.doctor }}</p>
          </div>

          <span class="status-pill">{{ item.status }}</span>
        </article>
      </div>

      <p v-else class="empty-state">Er zijn geen komende afspraken.</p>
    </div>

    <div class="appointment-card">
      <div class="section-header">
        <h2>Afspraakgeschiedenis</h2>
      </div>

      <div v-if="pastAppointments.length" class="appointment-list">
        <article
            v-for="item in pastAppointments"
            :key="item.id"
            class="appointment-item past"
        >
          <div class="appointment-date">
            <span class="date-day">{{ new Date(item.date).getDate() }}</span>
            <span class="date-month">
              {{ new Date(item.date).toLocaleDateString('nl-NL', { month: 'short' }) }}
            </span>
          </div>

          <div class="appointment-content">
            <p class="appointment-type">{{ item.type }}</p>
            <h3>{{ formatDate(item.date) }}</h3>
            <p class="appointment-meta">{{ item.time }} · {{ item.doctor }}</p>
          </div>

          <span class="status-pill past-pill">{{ item.status }}</span>
        </article>
      </div>

      <p v-else class="empty-state">Er zijn geen eerdere afspraken.</p>
    </div>
  </section>
</template>