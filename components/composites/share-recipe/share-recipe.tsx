import Image from "next/image"

export default function ShareRecipe() {
  return (
    <div className="bg-white py-5 md:pt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 items-center">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543"
              alt="Food photography setup"
              width={300}
              height={300}
              className="rounded-2xl shadow-lg w-full object-cover aspect-square"
            />
          </div>

          <div className="flex flex-col items-start">
            <h2 className="text-4xl font-bold">
              Share Your <span className="text-rose-500">Recipes</span>
            </h2>
            <p className="mt-6 text-gray-600 text-lg">
              Share your culinary masterpieces with our community. From
              traditional family recipes to innovative fusion dishes, every
              recipe tells a unique story. Join us in creating a diverse
              collection of flavors from around the world.
            </p>
            <button className="mt-8 px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition">
              Create New Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
