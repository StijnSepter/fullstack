export type PainEntry = {
    label: string
    value: string
    subtitle: string
    trend: string
}

export type Exercise = {
    name: string
    day: string
    time: string
    duration: string
    status: 'Gepland' | 'Klaar' | 'Vandaag'
}

export type Appointment = {
    date: string
    time: string
    doctor: string
    type: string
}

export const patient = {
    name: 'Sanne de Vries',
}

export const navigationItems = [
    { name: 'Overzicht', icon: '◉', active: true, badge: 'Actief' },
    { name: 'Oefeningen', icon: '◎', active: false, badge: '3' },
    { name: 'Logboek', icon: '✎', active: false, badge: '5' },
    { name: 'Pijnregistratie', icon: '↗', active: false, badge: 'Nieuw' },
    { name: 'Afspraken', icon: '☰', active: false, badge: '2' },
]

export const painEntries: PainEntry[] = [
    { label: 'Schouder', value: '4/10', subtitle: 'Laatste meting', trend: '−1 van gisteren' },
    { label: 'Knie', value: '3/10', subtitle: 'Bij belasting', trend: 'stabiel' },
    { label: 'Rug', value: '5/10', subtitle: 's avonds', trend: '+1 in de afgelopen week' },
]

export const exercises: Exercise[] = [
    { name: 'Schoudermobilisatie', day: 'Vandaag', time: '08:30', duration: '15 min', status: 'Vandaag' },
    { name: 'Kniebuiging + stretch', day: 'Vandaag', time: '10:00', duration: '10 min', status: 'Gepland' },
    { name: 'Core stabilisatie', day: 'Dinsdag', time: '14:15', duration: '20 min', status: 'Gepland' },
    { name: 'Looptraining', day: 'Woensdag', time: '09:00', duration: '25 min', status: 'Gepland' },
]

export const nextAppointment: Appointment = {
    date: 'Dinsdag 12 november',
    time: '09:30',
    doctor: 'Dr. M. Versteeg',
    type: 'Controleafspraak revalidatie',
}
