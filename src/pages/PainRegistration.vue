<script setup lang="ts">
import ClinicalButton from '../components/shared/ClinicalButton.vue'
import ClinicalSlider from '../components/shared/ClinicalSlider.vue'
import {
  chartBars,
  entries,
  errorMessage,
  formatDateTime,
  handleSubmit,
  note,
  painScore,
} from './functions/PainRegistration'

import './Style/painRegistration.css'
</script>

<template>
  <section class="pain-page">
    <div class="form-card">
      <h2>Pijnindicatie registreren</h2>

      <form class="pain-form" @submit.prevent="handleSubmit">
        <div v-if="errorMessage" class="form-alert">
          {{ errorMessage }}
        </div>

        <ClinicalSlider
            v-model="painScore"
            label="Pijnscore (0–10)"
            :min="0"
            :max="10"
            :step="1"
        />

        <label class="field">
          <span class="field-label">Toelichting (optioneel)</span>
          <textarea
              v-model="note"
              rows="4"
              placeholder="Bijv. Pijn in de knie na het traplopen"
          />
        </label>

        <ClinicalButton type="submit" block>
          Opslaan
        </ClinicalButton>
      </form>
    </div>

    <div class="chart-card">
      <div class="chart-header">
        <h3>Laatste 30 dagen</h3>
        <span class="chart-caption">Pijnscore 0–10</span>
      </div>

      <div class="chart-scroll">
        <div class="pain-chart">
          <div v-for="bar in chartBars" :key="bar.key" class="chart-bar-group">
            <div class="chart-column">
              <span class="chart-value">{{ bar.value }}</span>
              <div
                  class="chart-bar"
                  :style="{ height: `${(bar.value / 10) * 100}%` }"
              />
            </div>
            <span class="chart-day">{{ bar.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="log-card">
      <h3>Recente registraties</h3>

      <div class="history-list">
        <article v-for="entry in entries" :key="entry.id" class="history-item">
          <div class="history-score">{{ entry.score }}/10</div>

          <div class="history-content">
            <p class="history-note">{{ entry.note || 'Geen toelichting' }}</p>
            <small>{{ formatDateTime(entry.timestamp) }}</small>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>