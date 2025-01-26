import Text from "@/components/ui/text";
import Image from "next/image";


export default function RecipeTag() {
  return (
    <div className="absolute top-2 left-2 flex flex-row items-center
     gap-2 bg-white rounded-2xl px-4 py-1">
     <Image
       src="/images/dessert.png"
       width={27}
       height={27}
       alt="tag image"
     />
     <Text variant="div" className="text-[#26272B]">Dessert</Text>
    </div>
  )
}
