import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid"


export const uploadRecipeImageToStorage = async (fileToUpload: File) => {
    try {
        const { data, error } = await supabase.storage.from("recipe-images").upload(
            `recipe-${Date.now()}-${uuidv4()}.png`,
            fileToUpload
        );

        if (error) {
            console.error(error);
            throw new Error(`Error uploading file: ${error.message}`);
        }

        const { data: { publicUrl }} = await supabase.storage.from("recipe-images").getPublicUrl(data.path);

        console.log("Uploaded file data:", data);
        console.log("Public URL:", publicUrl);

        return publicUrl;
    } catch (error) {
        console.error(error);
        throw new Error(`Error uploading file: ${error}`);
    }
};