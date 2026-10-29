import { computed, ref } from 'vue'

export type ExerciseStatus = 'nog_te_doen' | 'afgerond'

export type AuditEntry = {
    id: number
    action: 'afgerond' | 'ongedaan' | 'toegewezen'
    timestamp: string
    description: string
}

export type ExerciseItem = {
    id: number
    name: string
    description: string
    sets: string
    reps: string
    videoUrl?: string
    status: ExerciseStatus
    assignedAt: string
    completedAt?: string
    auditTrail: AuditEntry[]
}

export const statusFilter = ref<'all' | 'todo' | 'done'>('all')

export const exercises = ref<ExerciseItem[]>([
    {
        id: 1,
        name: 'Schoudermobilisatie',
        description: 'Lichte cirkelbewegingen voor meer range of motion.',
        sets: '3 sets',
        reps: '12 herhalingen',
        videoUrl: 'https://www.youtube.com/watch?v=example1',
        status: 'nog_te_doen',
        assignedAt: '2026-10-20T09:00:00',
        auditTrail: [
            {
                id: 1,
                action: 'toegewezen',
                timestamp: '2026-10-20T09:00:00',
                description: 'Oefening toegewezen in behandelplan',
            },
        ],
    },
    {
        id: 2,
        name: 'Kniebuiging + stretch',
        description: 'Controleer de beweging met een rustige stretch.',
        sets: '2 sets',
        reps: '10 herhalingen',
        videoUrl: 'https://www.youtube.com/watch?v=example2',
        status: 'afgerond',
        assignedAt: '2026-10-21T10:30:00',
        completedAt: '2026-10-28T08:15:00',
        auditTrail: [
            {
                id: 1,
                action: 'toegewezen',
                timestamp: '2026-10-21T10:30:00',
                description: 'Oefening toegewezen in behandelplan',
            },
            {
                id: 2,
                action: 'afgerond',
                timestamp: '2026-10-28T08:15:00',
                description: 'Oefening afgerond door cliënt',
            },
        ],
    },
    {
        id: 3,
        name: 'Core stabilisatie',
        description: 'Kernactivatie in gecontroleerde positie.',
        sets: '3 sets',
        reps: '15 herhalingen',
        status: 'nog_te_doen',
        assignedAt: '2026-10-22T14:00:00',
        auditTrail: [
            {
                id: 1,
                action: 'toegewezen',
                timestamp: '2026-10-22T14:00:00',
                description: 'Oefening toegewezen in behandelplan',
            },
        ],
    },
])

export const filteredExercises = computed(() => {
    if (statusFilter.value === 'todo') {
        return exercises.value.filter((exercise) => exercise.status === 'nog_te_doen')
    }

    if (statusFilter.value === 'done') {
        return exercises.value.filter((exercise) => exercise.status === 'afgerond')
    }

    return exercises.value
})

export const formatDateTime = (value: string) => {
    return new Date(value).toLocaleString('nl-NL', {
        dateStyle: 'short',
        timeStyle: 'short',
    })
}

export const toggleExerciseStatus = (id: number) => {
    const exercise = exercises.value.find((item) => item.id === id)

    if (!exercise) return

    if (exercise.status === 'afgerond') {
        exercise.status = 'nog_te_doen'
        exercise.completedAt = undefined

        exercise.auditTrail.push({
            id: Date.now(),
            action: 'ongedaan',
            timestamp: new Date().toISOString(),
            description: 'Oefening teruggezet naar ongedaan',
        })
        return
    }

    exercise.status = 'afgerond'
    exercise.completedAt = new Date().toISOString()

    exercise.auditTrail.push({
        id: Date.now(),
        action: 'afgerond',
        timestamp: exercise.completedAt,
        description: 'Oefening afgerond door cliënt',
    })
}