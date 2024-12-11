import { signInUserProps, UserAuthProps } from "../types"
import { auth, database } from "@/lib/firebase-config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut
} from "firebase/auth";
import { clearUserSession, setUserSession } from "../helpers";

import { v4 as uuidv4 } from "uuid"
import { doc, setDoc } from "firebase/firestore";
import { COLLECTION_NAMES } from "@/lib/utils";


export const createFirebaseUserAccount = async ({
    values, setLoading
}: UserAuthProps) => {
    try {
        setLoading("loading")
        const userCredentials = await createUserWithEmailAndPassword(auth, values.email, values.password)
        await addUserInfoToFirestore(values.FullName, values.email)
        console.log(userCredentials)
        setLoading("done")
    } catch (error) {
        console.error(error)
        setLoading("error")
        return
    }
}


export const signInUser = async ({
    values, setLoading
}: signInUserProps) => {
    try {
        console.log(values)
        setLoading("loading")
        const user = await signInWithEmailAndPassword(auth, values.email, values.password)
        const token = await user.user.getIdToken()
        setUserSession(token)
        setLoading("done")
        return user
    } catch (error) {
        console.error(error)
        setLoading("error")
        return
    }

}

export const addUserInfoToFirestore = async (fullName: string, email: string) => {
    try {
        await setDoc(doc(database, COLLECTION_NAMES.users, `${uuidv4()}`), {
            fullName,
            email,
        });
    } catch (error) {
        console.error(error)
        return
    }
}

export const LogoutUser = async () => {
    signOut(auth).then( async () => {
       console.log("signed out")
       // clear user session
       await clearUserSession()
    }).catch((error) => {
        console.error(error)
    })
}