import Text from "@/components/ui/text";
import { itemOnRecipeBanner } from "@/data";

export default function RecipeCardBanner() {
  return (
    <section
      className="absolute bottom-0 w-full px-5 flex flex-row items-center gap-3
        bg-[#ffffffcc] py-2 justify-around"
    >
      {itemOnRecipeBanner.map((item) => (
        <div className="flex flex-row items-center gap-1">
          {item.icon}
          <Text className="text-green font-bold">{item.title}</Text>
        </div>
      ))}
    </section>
  );
}
