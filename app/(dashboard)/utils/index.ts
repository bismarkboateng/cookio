import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid"

export const uploadRecipeImageToStorage = async (fileToUpload: File) => {

    try {
        const { data, error } = await supabase.storage.from("recipe-images").upload(
            `recipe-${Date.now() + uuidv4()}.png`, fileToUpload
        )
        if (error) {
            console.error(error)
        }

        console.log(data)
    } catch (error) {
        console.error(error)
        throw new Error(`Error uploading file to firebase: ${error}`)
    }
}
 