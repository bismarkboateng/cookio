import { create } from "zustand"
import { AuthType } from "./types"

export const useAuthStore = create<AuthType>((set) => ({
  isAuth: false,
  email: "",
  setAuth: () => set(() => ({ isAuth: true })),
  setEmail: (userEmail: string) => set(() => ({ email: userEmail }))
}))