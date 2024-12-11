import Image from "next/image"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface CategoryCardProps {
  title: string;
  image: string;
}

const CategoryCard= ({ title, image }: CategoryCardProps) => (
  <div className="group cursor-pointer">
    <div className="relative overflow-hidden rounded-full w-32 h-32 mx-auto mb-3">
      <Image 
        src={image} 
        alt={title} 
        width={300}
        height={300}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <h3 className="text-center font-medium">{title}</h3>
  </div>
);

export default function Categories() {
  const categories = [
    {
      title: "Breakfast recipes",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666"
    },
    {
      title: "Lunch recipes",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19"
    },
    {
      title: "Dinner recipes",
      image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327"
    },
    {
      title: "Appetizer recipes",
      image: "https://images.unsplash.com/photo-1541529086526-db283c563270"
    },
    {
      title: "Salad recipes",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
    },
    {
      title: "Pizza recipes",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },
  ];

  return (
    <div className="bg-white py-5 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Popular Categories</h2>
          <Link href="/account/sign-up" className="hidden md:flex">
           <button className="text-rose-500 hover:text-rose-600 flex items-center gap-1">
            View more
           <ChevronRight className="w-4 h-4" />
          </button>

          </Link>
        </div>
        
        <div className="grid grid-cols-2 items-start md:grid-cols-4 gap-y-12">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              title={category.title}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}