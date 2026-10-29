<script setup lang="ts">
import ClinicalButton from '../components/shared/ClinicalButton.vue'
import {
  cancelEdit,
  draft,
  editingId,
  entries,
  errorMessage,
  formatDateTime,
  removeEntry,
  saveEntry,
  sortedEntries,
  startEdit,
} from './functions/Logbook'

import './Style/Logbook.css'
</script>

<template>
  <section class="logbook-page">
    <div class="logbook-card form-card">
      <h2>{{ editingId !== null ? 'Logboekinvoer bewerken' : 'Nieuwe activiteit' }}</h2>

      <form class="logbook-form" @submit.prevent="saveEntry">
        <div v-if="errorMessage" class="form-alert">
          {{ errorMessage }}
        </div>

        <label class="field">
          <span class="field-label">Beschrijving van de activiteit</span>
          <textarea
              v-model="draft"
              rows="4"
              placeholder="Bijv. Wandeling gemaakt van 20 minuten"
          />
        </label>

        <div class="form-actions">
          <ClinicalButton type="submit" block>
            {{ editingId !== null ? 'Opslaan' : 'Logboekinvoer toevoegen' }}
          </ClinicalButton>

          <button
              v-if="editingId !== null"
              type="button"
              class="secondary-button"
              @click="cancelEdit"
          >
            Annuleren
          </button>
        </div>
      </form>
    </div>

    <div class="logbook-card history-card">
      <div class="section-header">
        <h3>Mijn activiteiten</h3>
        <span class="count-badge">{{ entries.length }}</span>
      </div>

      <div v-if="sortedEntries.length" class="entry-list">
        <article v-for="entry in sortedEntries" :key="entry.id" class="entry-item">
          <div class="entry-meta">
            <span class="dot" aria-hidden="true"></span>
            <time>{{ formatDateTime(entry.timestamp) }}</time>
          </div>

          <p class="entry-description">{{ entry.description }}</p>

          <div class="entry-actions">
            <button type="button" class="action-button" @click="startEdit(entry)">
              Bewerken
            </button>
            <button type="button" class="action-button danger" @click="removeEntry(entry.id)">
              Verwijderen
            </button>
          </div>
        </article>
      </div>

      <p v-else class="empty-state">
        Er zijn nog geen activiteiten gelogd.
      </p>
    </div>
  </section>
</template>