"use server"

import { cookies } from "next/headers"


//  email in cookies
export const setEmailInCookies = async (email: string) => {
    await cookies().set("email", email)
}

export const getEmailFromCookies = async () => {
    const cookie = await cookies().get("email")
    if (cookie) return cookie.value
}

export const clearUserEmailFromCookies = async () => {
    await cookies().delete("email")
}

//  auth token in cookies
export const setUserSession = async (id: string) => {
    await cookies().set("authToken", id)
}

export const getUserSession = async () => {
    const cookie = await cookies().get("authToken")
    if (cookie) return cookie.value
}

export const clearUserSession = async () => {
    await cookies().delete("authToken")
}