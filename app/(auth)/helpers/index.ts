export const setUserSession = (email: string) => {
    sessionStorage.setItem("email", email)
}

export const getUserSession = () => {
    return sessionStorage.getItem("email")
}

export const clearUserSession = () => {
    sessionStorage.clear()
}