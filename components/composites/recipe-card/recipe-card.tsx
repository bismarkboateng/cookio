import Image from "next/image";
import RecipeTag from "../recipe-tag/recipe-tag";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import RecipeCardBanner from "../recipe-card-banner/recipe-card-banner";

import Text from "@/components/ui/text";
import Link from "next/link";

type Props = {
  imageUrl?: string;
  title?: string;
  category?: string;
  tags?: string;
  id?: string;
};

export default function RecipeCard({
  imageUrl,
  title,
  category,
  tags,
  id,
}: Props) {
  return (
    <Card className="p-0 rounded-lg shadow border-none bg-white">
      <CardHeader className="p-0">
        <div className="relative">
          <Image
            src={imageUrl || "/images/recipe-1.jpeg"}
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
          {title || "Raspberry cheesecake delight"}
        </Text>
        <Text className="text-grey font-medium">
          
          {tags?.split(",").map((item) => (
            <span
              key={item}
              className=" text-black italic text-xs rounded-full"
            >
              {item}
            </span>
          )) || "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        </Text>
        <Link href={`/recipes/${id}`}>
          <Text className="text-green underline text-base font-bold mt-2">
            View Recipe
          </Text>
        </Link>
      </CardContent>
    </Card>
  );
}
