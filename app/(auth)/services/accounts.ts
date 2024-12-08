import { UserAuthProps } from "../types"
import { auth } from "@/lib/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";



export const createFirebaseUserAccount = async ({
    values, setLoading
}: UserAuthProps) => {
    try {
        setLoading("loading")
        const userCredentials = await createUserWithEmailAndPassword(auth, values.email, values.password)
        console.log(userCredentials)
        console.log(userCredentials.user)
        setLoading("done")
    } catch (error) {
        console.error(error)
        setLoading("error")
    }
}

export const signInUser = async ({
    values, setLoading
}: UserAuthProps) => {
    try {
        setLoading("loading")
        // sign into user
        setLoading("done")
    } catch (error) {
        console.error(error)
        setLoading("error")
    }

}

export const addUserInfoToFirestore = () => {

}