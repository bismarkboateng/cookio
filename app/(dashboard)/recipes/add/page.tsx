import RecipeForm from "../../components/Add/Add";


export default function AddRecipe() {
  return (
    <section>
     <h1 className="text-4xl text-black-color text-center mt-10">
      Add a recipe
     </h1>
     <section>
      <RecipeForm />
     </section>
    </section>
  )
}
