import Image from "next/image";
import Link from "next/link";

type Props = {
    imageUrl: string;
    title: string;
    category: string;
    tags: string;
    id: string;
}

export default function RecipeCard({
    imageUrl, title, category, tags, id
}: Props) {
  return (
    <section className="max-w-sm mx-auto my-5 rounded-lg overflow-hidden shadow-lg bg-white">
      <Link href={`/recipes/${id}`}>
      <div className="relative group cursor-pointer">
        <Image
          src={imageUrl}
          alt="Recipe image"
          width={500}
          height={300}
          className="w-full h-auto object-cover rounded-2xl
          transition-transform duration-300 group-hover:scale-105
          "
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-5 rounded-lg">
          <h2 className="text-white text-xl font-bold">{title}</h2>
          <p className="text-white text-sm italic mt-2">{category}</p>
          <div className="flex gap-2 mt-3">
            {tags?.split(",").map((item) => (
                <span key={item} className="bg-white text-gray-700 py-1 px-3 text-xs rounded-full">
                 {item.trim()}
                </span>
            ))}
          </div>
        </div>
      </div>
      </Link>
    </section>
  )
}
