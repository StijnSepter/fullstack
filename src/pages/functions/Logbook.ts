import { computed, ref } from 'vue'

export type LogEntry = {
    id: number
    description: string
    timestamp: string
}

export const entries = ref<LogEntry[]>([
    {
        id: 1,
        description: 'Wandeling gemaakt van 20 minuten in het park',
        timestamp: '2026-10-28T08:15:00',
    },
    {
        id: 2,
        description: 'Boodschappen gedaan en kort stukje gelopen',
        timestamp: '2026-10-27T17:40:00',
    },
    {
        id: 3,
        description: 'Korte huishoudelijke activiteit met een korte rustpauze',
        timestamp: '2026-10-26T12:20:00',
    },
])

export const draft = ref('')
export const errorMessage = ref('')
export const editingId = ref<number | null>(null)

export const formatDateTime = (value: string) => {
    return new Date(value).toLocaleString('nl-NL', {
        dateStyle: 'medium',
        timeStyle: 'short',
    })
}

export const sortedEntries = computed(() => {
    return [...entries.value].sort(
        (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )
})

export const resetForm = () => {
    draft.value = ''
    editingId.value = null
    errorMessage.value = ''
}

export const startEdit = (entry: LogEntry) => {
    draft.value = entry.description
    editingId.value = entry.id
    errorMessage.value = ''
}

export const cancelEdit = () => {
    resetForm()
}

export const saveEntry = () => {
    const description = draft.value.trim()

    if (!description) {
        errorMessage.value = 'Vul een beschrijving in voor de activiteit.'
        return
    }

    if (editingId.value !== null) {
        const item = entries.value.find((entry) => entry.id === editingId.value)

        if (item) {
            item.description = description
            item.timestamp = new Date().toISOString()
        }
    } else {
        entries.value.unshift({
            id: Date.now(),
            description,
            timestamp: new Date().toISOString(),
        })
    }

    resetForm()
}

export const removeEntry = (id: number) => {
    entries.value = entries.value.filter((entry) => entry.id !== id)
}