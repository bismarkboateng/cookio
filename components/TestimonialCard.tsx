import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  rating: number;
  comment: string;
  image: string;
}

export default function TestimonialCard({ name, rating, comment, image }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 max-w-xs">
      <div className="flex items-center gap-3">
        <Image src={image} alt={name} width={300} height={300} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <h4 className="font-medium text-gray-800">{name}</h4>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600">{comment}</p>
    </div>
  )
}