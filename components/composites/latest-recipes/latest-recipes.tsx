import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import RecipeCard from "../recipe-card/recipe-card";

export default function LatestRecipes() {
  return (
    <section className="bg-[#eefff6] mt-24 lg:px-20 py-24">
      <div className="flex flex-row items-center justify-between">
        <Text variant="div" className="text-black font-bold text-[50px]">
          Latest <span className="text-green">recipes.</span>
        </Text>
        <Button
          className="border-2 border-green bg-transparent text-green
          hover:bg-transparent font-bold w-[12%] py-5"
        >
          All Recipes
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {[0, 1, 3, 4, 5, 6].map((item) => (
          <RecipeCard key={item} />
        ))}
      </div>
    </section>
  );
}
