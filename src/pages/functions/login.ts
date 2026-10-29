import { ref } from 'vue'

export const email = ref('')
export const password = ref('')
export const rememberMe = ref(true)
export const showHome = ref(false)

export const emailError = ref('')
export const passwordError = ref('')
export const validationMessage = ref('')

export const validateEmail = (value: string) => {
    const trimmed = value.trim()
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)

    if (!trimmed) {
        return 'Vul je e-mailadres in.'
    }

    if (!isValid) {
        return 'Gebruik een geldig e-mailadres.'
    }

    return ''
}

export const validatePassword = (value: string) => {
    const trimmed = value.trim()

    if (!trimmed) {
        return 'Vul je wachtwoord in.'
    }

    if (trimmed.length < 6) {
        return 'Het wachtwoord moet minimaal 6 tekens zijn.'
    }

    return ''
}

export const validateForm = () => {
    emailError.value = validateEmail(email.value)
    passwordError.value = validatePassword(password.value)

    if (emailError.value || passwordError.value) {
        validationMessage.value = 'Controleer je invoer voordat je inlogt.'
        return false
    }

    validationMessage.value = ''
    return true
}

export const handleLogin = () => {
    if (!validateForm()) {
        return
    }

    showHome.value = true
}