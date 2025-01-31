import { Skeleton } from "@/components/ui/skeleton";

export default function RecipeSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
    {[0, 1, 2, 3, 4, 5].map((item) => (
     <section key={item} className="flex flex-col space-y-1 mt-8">
      <Skeleton className="h-[200px] w-[350px] rounded-xl" />
      <Skeleton className="h-[150px] w-[350px] rounded-xl" />
     </section>
    ))}
    </div>
  );
}
