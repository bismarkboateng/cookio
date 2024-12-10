export type AuthType = {
    isAuth: boolean;
    email: string;
    toggleAuth: () => void;
    setEmail: (email: string) => void;
}
