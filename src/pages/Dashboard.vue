<script setup lang="ts">
import { ref } from 'vue'
import DashboardSidebar from '../components/dashboard/DashboardSidebar.vue'
import PainOverview from '../components/dashboard/PainOverview.vue'
import ExerciseList from '../components/dashboard/ExerciseList.vue'
import NextAppointment from '../components/dashboard/NextAppointment.vue'
import AppHeader from '../components/shared/AppHeader.vue'
import PainRegistration from './PainRegistration.vue'
import Logbook from './Logbook.vue'
import Practice from './Practice.vue'
import Appointment from './Appointment.vue'

import { patient } from './functions/Dashboard'
import './Style/Dashboard.css'

const currentView = ref<'overview' | 'pain' | 'logbook' | 'practice' | 'appointment'>('overview')
</script>

<template>
  <main class="dashboard-page">
    <DashboardSidebar
        :current-view="currentView"
        @change-view="currentView = $event"
    />

    <section class="content">
      <AppHeader
          v-if="currentView === 'overview'"
          label="Dashboard"
          :title="`Goedemorgen, ${patient.name}`"
          :user-name="patient.name"
      />

      <AppHeader
          v-else-if="currentView === 'pain'"
          label="Pijnregistratie"
          title="Nieuwe pijnindicatie"
          :user-name="patient.name"
      />


      <AppHeader
          v-else-if="currentView === 'logbook'"
          label="Logboek"
          title="Mijn dagelijkse activiteiten"
          :user-name="patient.name"
      />

      <AppHeader
          v-else-if="currentView === 'practice'"
          label="Oefeningen"
          title="Mijn oefenprogramma"
          :user-name="patient.name"
      />

      <AppHeader
          v-else
          label="Afspraken"
          title="Mijn afspraken"
          :user-name="patient.name"
      />

      <template v-if="currentView === 'overview'">

        <PainOverview />

        <div class="main-grid">
          <ExerciseList />
          <NextAppointment />
        </div>
      </template>

      <PainRegistration v-else-if="currentView === 'pain'" />
      <Logbook v-else-if="currentView === 'logbook'" />
      <Practice v-else-if="currentView === 'practice'" />
      <Appointment v-else />
    </section>
  </main>
</template>