<script setup lang="ts">
import {
  filteredExercises,
  formatDateTime,
  statusFilter,
  toggleExerciseStatus,
} from './functions/Practice'

import './Style/Practice.css'
</script>

<template>
  <section class="practice-page">
    <div class="practice-header">
      <div>
        <p class="eyebrow">Fysio-oefeningen</p>
        <h2>Mijn oefeningen</h2>
      </div>

      <div class="filter-group" aria-label="Filter oefeningen">
        <button
            type="button"
            :class="{ active: statusFilter === 'all' }"
            @click="statusFilter = 'all'"
        >
          Alles
        </button>

        <button
            type="button"
            :class="{ active: statusFilter === 'todo' }"
            @click="statusFilter = 'todo'"
        >
          Nog te doen
        </button>

        <button
            type="button"
            :class="{ active: statusFilter === 'done' }"
            @click="statusFilter = 'done'"
        >
          Afgerond
        </button>
      </div>
    </div>

    <div class="exercise-list">
      <article
          v-for="exercise in filteredExercises"
          :key="exercise.id"
          class="exercise-card"
          :class="{ completed: exercise.status === 'afgerond' }"
      >
        <div class="exercise-main">
          <div class="exercise-topline">
            <h3>{{ exercise.name }}</h3>

            <span
                class="status-badge"
                :class="exercise.status === 'afgerond' ? 'done' : 'todo'"
            >
              {{ exercise.status === 'afgerond' ? 'Afgerond' : 'Nog te doen' }}
            </span>
          </div>

          <p class="exercise-description">{{ exercise.description }}</p>

          <div class="meta-row">
            <span>{{ exercise.sets }}</span>
            <span>{{ exercise.reps }}</span>
            <span>Toegewezen: {{ formatDateTime(exercise.assignedAt) }}</span>
          </div>

          <div v-if="exercise.videoUrl" class="video-box">
            <a :href="exercise.videoUrl" target="_blank" rel="noreferrer">
              Bekijk instructievideo
            </a>
          </div>

          <button
              type="button"
              class="toggle-button"
              :class="{ completed: exercise.status === 'afgerond' }"
              @click="toggleExerciseStatus(exercise.id)"
          >
            <span class="toggle-icon">
              {{ exercise.status === 'afgerond' ? '✓' : '□' }}
            </span>
            {{ exercise.status === 'afgerond' ? 'Ongedaan maken' : 'Afvinken' }}
          </button>
        </div>
      </article>
    </div>
  </section>
</template>