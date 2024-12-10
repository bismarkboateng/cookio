import { create } from "zustand"
import { AuthType } from "./types"

export const useAuthStore = create<AuthType>((set) => ({
  isAuth: false,
  email: "",
  toggleAuth: () => set((state) => ({ isAuth: !state.isAuth })),
  setEmail: (userEmail: string) => set(() => ({ email: userEmail }))
}))