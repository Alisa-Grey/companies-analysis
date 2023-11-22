export const validateLogin = (value: string) => {
    if(value==='') {
        return 'Введите логин'
    } else if(value!==import.meta.env.VITE_APP_LOGIN) {
        return 'Неверный логин'
    } else {
        return ''
    }
}

export const validatePassword = (value: string) => {
    if(value==='') {
        return 'Введите пароль'
    } else if(value!==import.meta.env.VITE_APP_PASSWORD) {
        return 'Неверный пароль'
    } else {
        return ''
    }
}
