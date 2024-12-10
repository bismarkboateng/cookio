import { database } from "@/lib/firebase-config";
import { COLLECTION_NAMES } from "@/lib/utils";
import { doc, setDoc, getDoc, deleteDoc, updateDoc, query, where } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid"

import { collection, getDocs } from "firebase/firestore";
import { Recipe } from "../types";
import { revalidatePath } from "next/cache";
import { getUserSession } from "@/app/(auth)/helpers";


type Props = {
    formValues: {
        title: string;
        description: string;
        tags: string;
    },
    category: string;
    instructions: string[],
    imageUrl: string,
    isPublic: boolean;
    token: string;
}

export const addRecipeToFireStore = async ({
    formValues, category, instructions,
    imageUrl, isPublic, token
}: Props) => {

    try {
        await setDoc(doc(database, COLLECTION_NAMES.recipes, `${uuidv4()}`), {
            ...formValues,
            category,
            instructions,
            imageUrl,
            isPublic,
            token,
        });
        revalidatePath("/recipes")
        window.location.reload()
    } catch (error) {
        console.error(error)
    }
}



// export const fetchAllRecipesFromFireStore = async () => {
//     const token = await getUserSession()

//     try {

//         const data: Recipe[] = []

//         const querySnapshot = await getDocs(collection(database, COLLECTION_NAMES.recipes));
//         querySnapshot.forEach((doc) => {
//             const recipe = doc.data() as Recipe;
//             const id = doc.id
//             data.push({ ...recipe, id });
//         });

//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }


export const fetchAllRecipesFromFireStore = async (token: string) => {

    try {
        const data: Recipe[] = [];

        const recipesQuery = query(
            collection(database, COLLECTION_NAMES.recipes),
            where("token", "==", token)
        );

        const querySnapshot = await getDocs(recipesQuery);

        querySnapshot.forEach((doc) => {
            const recipe = doc.data() as Recipe;
            const id = doc.id;
            data.push({ ...recipe, id });
        });

        return data;
    } catch (error) {
        console.error("Error fetching recipes: ", error);
        throw new Error("Failed to fetch recipes");
    }
};

export const fetchRecipe = async (docId: string) => {
    try {
        const docRef = doc(database, COLLECTION_NAMES.recipes, docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data()
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error(error)
    }
}


export const deleteRecipe = async (id: string) => {
    try {
        if (id) {
            await deleteDoc(doc(database, COLLECTION_NAMES.recipes, id));
            revalidatePath("/recipes")
        }
    } catch (error) {
        console.error(error)
    }
}

type UpdateRecipeProps = {
    id: string;
    formValues: {
        title: string;
        description: string;
        tags: string;
    },
    category: string;
    instructions: string[],
    imageUrl: string | File | null,
}

export const updateRecipe = async ({
    id,
    formValues, category, instructions, imageUrl,
}: UpdateRecipeProps) => {
    try {
        if (id) {
            const recipeRef = doc(database, COLLECTION_NAMES.recipes, id)

            await updateDoc(recipeRef, {
                ...formValues,
                category,
                instructions,
                imageUrl,
            });
        }
        revalidatePath("/recipes")
    } catch (error) {
        console.error(error)
    }
}

export const createCategoryInFireStore = async (category: string) => {

    try {
        await setDoc(doc(database, COLLECTION_NAMES.categories, `${uuidv4()}`), {
            category,
        });
        revalidatePath("/recipes/add")
    } catch (error) {
        console.error(error)
    }
}

export const fetchCategories = async () => {
    try {

        const categories: string[] = []
    
        const querySnapshot = await getDocs(collection(database, COLLECTION_NAMES.categories));
        querySnapshot.forEach((doc) => {
            const category = doc.data() as { category: string }
            categories.push(category.category)
        });

        return categories
    } catch (error) {
        console.error(error)
    }
}


export const toggleRecipeVisibility = async (id: string, isPublic: boolean) => {
    try {
        const recipeRef = doc(database, COLLECTION_NAMES.recipes, id)
        console.log("does it get here?")
        await updateDoc(recipeRef, {
            isPublic
        });

        window.location.reload()
    } catch (error) {
        console.error(error)
        return
    }
}