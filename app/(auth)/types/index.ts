import { Dispatch, SetStateAction } from "react";


export type UserAuthProps = {
    values: {
        email: string;
        password: string;
    }, 
    setLoading: Dispatch<SetStateAction<string>>
}