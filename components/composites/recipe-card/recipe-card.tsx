import Image from "next/image";
import RecipeTag from "../recipe-tag/recipe-tag";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import RecipeCardBanner from "../recipe-card-banner/recipe-card-banner";

import Text from "@/components/ui/text";
import Link from "next/link";

export default function RecipeCard() {
  return (
    <Card className="p-0 rounded-lg shadow border-none bg-white">
      <CardHeader className="p-0">
        <div className="relative">
          <Image
            src="/images/recipe-1.jpeg"
            width={381.33}
            height={300}
            alt="recipe image"
            className="rounded-lg"
          />
          <RecipeTag />
          <RecipeCardBanner />
        </div>
      </CardHeader>
      <CardContent className="pt-3">
        <Text className="text-black text-lg font-bold">
          Raspberry cheesecake delight
        </Text>
        <Text className="text-grey font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Link href="#">
          <Text className="text-green underline text-base font-bold mt-2">
            View Recipe
          </Text>
        </Link>
      </CardContent>
    </Card>
  );
}
