import RecipeForm from "@/app/(dashboard)/components/Add/Add";

interface RecipeDetailProps {
    params: {
      id: string;
    };
  }

export default function UpdateRecipe({ params }: RecipeDetailProps) {
  
  return (
    <section>
     <h1 className="text-2xl mb-2 md:text-4xl text-black-color text-center mt-10">
      Update Recipe
     </h1>
     <section>
      <RecipeForm
      type="Update"
      id={params.id}
    />
     </section>
    </section>
  )
}
