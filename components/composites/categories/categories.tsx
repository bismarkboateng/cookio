import IndicatorText from "@/components/ui/indicator-text";
import Text from "@/components/ui/text";
import RecipeIconCard from "../recipe-icon-card/recipe-icon-card";
import { recipe_categories_data } from "./data";

export default function Categories() {
  return (
    <section className="flex flex-col items-center cursor-pointer lg:mt-36">
      <IndicatorText title="Browse recipes by category" />
      <Text className="text-[50px] font-bold">
        Recipes <span className="text-green">categories.</span>
      </Text>
      <div className="mt-10 flex flex-row items-center gap-20">
        {recipe_categories_data.map((item, index) => (
          <RecipeIconCard
            key={`${index}-${item.title}`}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}
