import { UserAuthProps } from "../types"
import { auth } from "@/lib/firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setUserSession } from "../helpers";



export const createFirebaseUserAccount = async ({
    values, setLoading
}: UserAuthProps) => {
    try {
        setLoading("loading")
        const userCredentials = await createUserWithEmailAndPassword(auth, values.email, values.password)
        console.log(userCredentials)
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
        console.log(values)
        setLoading("loading")
        const user = await signInWithEmailAndPassword(auth, values.email, values.password)
        setUserSession(user.user.email!)
        setLoading("done")
    } catch (error) {
        console.error(error)
        setLoading("error")
    }

}

export const addUserInfoToFirestore = () => {

}