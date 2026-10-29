import { computed, ref } from 'vue'

export type AppointmentItem = {
    id: number
    date: string
    time: string
    type: string
    doctor: string
    status: 'Komend' | 'Verleden'
}

export const appointments = ref<AppointmentItem[]>([
    {
        id: 1,
        date: '2026-11-12',
        time: '09:30',
        type: 'Controle',
        doctor: 'Dr. M. Versteeg',
        status: 'Komend',
    },
    {
        id: 2,
        date: '2026-11-18',
        time: '14:00',
        type: 'Intake',
        doctor: 'Mevr. L. Janssen',
        status: 'Komend',
    },
    {
        id: 3,
        date: '2026-10-22',
        time: '10:15',
        type: 'Follow-up',
        doctor: 'Dr. M. Versteeg',
        status: 'Verleden',
    },
    {
        id: 4,
        date: '2026-10-08',
        time: '11:00',
        type: 'Controle',
        doctor: 'Dr. M. Versteeg',
        status: 'Verleden',
    },
])

export const futureAppointments = computed(() =>
    [...appointments.value]
        .filter((item) => item.status === 'Komend')
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
)

export const pastAppointments = computed(() =>
    [...appointments.value]
        .filter((item) => item.status === 'Verleden')
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
)

export const formatDate = (value: string) => {
    return new Date(value).toLocaleDateString('nl-NL', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
}