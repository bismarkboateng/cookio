import Text from "@/components/ui/text";
import Image from "next/image";

export default function RecipeIconCard({
    icon,
    title
}: { icon: string, title: string }) {
  return (
    <section className="w-[200px] h-[200px] bg-light_green flex
    flex-col items-center justify-center rounded-full gap-3">
      <Image
        src={icon}
        width={60}
        height={60}
        alt="break fast"
      />
      <Text variant="div" className="text-green font-medium">
        {title}
      </Text>
    </section>
  );
}
