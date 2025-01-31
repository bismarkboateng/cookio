import RecipeForm from "../../components/add/add";


export default function Page() {
  return (
    <section>
     <h1 className="text-xl md:text-4xl text-black-color text-center mt-10">
      Add a recipe
     </h1>
     <section>
      <RecipeForm type="Add" />
     </section>
    </section>
  )
}
