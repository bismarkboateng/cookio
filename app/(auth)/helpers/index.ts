"use server"

import { cookies } from "next/headers"

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