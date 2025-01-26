import Text from "@/components/ui/text";
import Logo from "../logo/logo";
import NewsLetter from "../newsletter/newsletter";
import { Facebook, Instagram, Linkedin  } from "lucide-react";


export default function Footer() {

  const liClasses = "text-black text-base font-medium cursor-pointer";

  return (
    <footer className="w-full grid grid-cols-5 gap-10 lg:px-20 mt-36 mb-5">
      <div className="col-span-2">
        <Logo className="w-[110px] h-[35.42px]" />
        <Text className="text-grey text-sm mt-2 font-medium">
          Join me on a gastronomic adventure filled with nutritious and
          delicious recipes.
        </Text>
        <NewsLetter />
        <Text className="text-sm text-grey mt-3">
          © 2025. All rights reserved
        </Text>
      </div>

      <div className="flex flex-col gap-3">
        <Text className="text-green font-medium cursor-pointer">Navigation</Text>
        <Text className={liClasses}>Home</Text>
        <Text className={liClasses}>About Recipa</Text>
        <Text className={liClasses}>Recipes</Text>
        <Text className={liClasses}>Categories</Text>
      </div>

      <div className="flex flex-col gap-3">
        <Text className="text-green font-medium">Categories</Text>
        <Text className={liClasses}>Dessert</Text>
        <Text className={liClasses}>Drink</Text>
        <Text className={liClasses}>Lunch</Text>
        <Text className={liClasses}>Breakfast</Text>
      </div>

      <div className="flex flex-col gap-3">
        <Text className="text-green font-medium">Follow me</Text>
        <div className="flex flex-row gap-3">
         <Facebook />
         <Instagram />
         <Linkedin />
        </div>
      </div>
    </footer>
  );
}
