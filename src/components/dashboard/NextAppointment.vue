<script setup lang="ts">
type Appointment = {
  date: string
  time: string
  doctor: string
  type: string
}

const nextAppointment: Appointment = {
  date: 'Dinsdag 12 november',
  time: '09:30',
  doctor: 'Dr. M. Versteeg',
  type: 'Controleafspraak revalidatie',
}
</script>

<template>
  <aside class="section appointment-card">
    <div class="section-header">
      <h3>Eerstvolgende afspraak</h3>
    </div>

    <div class="appointment-box">
      <p class="appointment-date">{{ nextAppointment.date }}</p>
      <p class="appointment-time">{{ nextAppointment.time }}</p>

      <div class="appointment-info">
        <span class="appointment-type">{{ nextAppointment.type }}</span>
        <span class="doctor-name">{{ nextAppointment.doctor }}</span>
      </div>

      <button class="secondary-button" type="button">Bekijk details</button>
    </div>
  </aside>
</template>

<style scoped>
.section {
  margin-bottom: 1.5rem;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.section-header h3 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--color-text);
}

.appointment-card {
  align-self: start;
}

.appointment-box {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.2rem;
}

.appointment-date {
  margin: 0 0 0.2rem;
  color: var(--color-primary);
  font-weight: 700;
}

.appointment-time {
  margin: 0;
  font-size: 1.9rem;
  font-weight: 700;
  letter-spacing: -0.04em;
  color: var(--color-text);
}

.appointment-info {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-top: 1rem;
  margin-bottom: 1.2rem;
}

.appointment-type {
  font-weight: 600;
  color: var(--color-text);
}

.doctor-name {
  color: var(--color-text-secondary);
  font-size: 0.88rem;
}

.secondary-button {
  width: 100%;
  border: 1px solid var(--color-border);
  background: var(--color-secondary);
  color: var(--color-text);
  border-radius: var(--radius-sm);
  min-height: 44px;
  font-weight: 600;
}
</style>