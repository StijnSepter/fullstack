import { computed, ref } from 'vue'

export type PainEntry = {
    id: number
    score: number
    note: string
    timestamp: string
}

export const painScore = ref(0)
export const note = ref('')
export const errorMessage = ref('')

export const entries = ref<PainEntry[]>([
    {
        id: 1,
        score: 4,
        note: 'Pijn in de knie na het wandelen',
        timestamp: '2026-10-27T08:15:00',
    },
    {
        id: 2,
        score: 6,
        note: 'Meer pijn in de avond',
        timestamp: '2026-10-26T18:45:00',
    },
    {
        id: 3,
        score: 3,
        note: 'Beter dan gisteren',
        timestamp: '2026-10-25T09:10:00',
    },
    {
        id: 4,
        score: 7,
        note: 'Pijn na het traplopen',
        timestamp: '2026-10-22T17:20:00',
    },
    {
        id: 5,
        score: 5,
        note: 'Rustige dag',
        timestamp: '2026-10-20T09:00:00',
    },
])

export const recordedAt = () => new Date().toISOString()

export const formatDateTime = (value: string) => {
    return new Date(value).toLocaleString('nl-NL', {
        dateStyle: 'medium',
        timeStyle: 'short',
    })
}

export const validateScore = () => {
    const value = Number(painScore.value)

    if (!painScore.value && painScore.value !== 0) {
        return 'Vul een pijnscore in.'
    }

    if (Number.isNaN(value) || value < 0 || value > 10) {
        return 'De pijnscore moet een getal zijn tussen 0 en 10.'
    }

    return ''
}

export const handleSubmit = () => {
    const message = validateScore()

    if (message) {
        errorMessage.value = message
        return
    }

    entries.value.unshift({
        id: Date.now(),
        score: Number(painScore.value),
        note: note.value.trim(),
        timestamp: recordedAt(),
    })

    painScore.value = 0
    note.value = ''
    errorMessage.value = ''
}

export const chartBars = computed(() => {
    const result: Array<{ key: string; label: string; value: number }> = []

    const today = new Date()

    for (let index = 29; index >= 0; index--) {
        const date = new Date(today)
        date.setDate(today.getDate() - index)

        const matchingEntry = entries.value.find((entry) => {
            const entryDate = new Date(entry.timestamp)
            return (
                entryDate.getFullYear() === date.getFullYear() &&
                entryDate.getMonth() === date.getMonth() &&
                entryDate.getDate() === date.getDate()
            )
        })

        result.push({
            key: date.toISOString(),
            label: new Date(date).toLocaleDateString('nl-NL', {
                day: 'numeric',
                month: 'short',
            }),
            value: matchingEntry ? matchingEntry.score : 0,
        })
    }

    return result
})