import Categories from "@/components/composites/categories/categories";
import Features from "@/components/composites/features/features";
import Footer from "@/components/composites/footer/footer";
import Header from "@/components/composites/header/header";

import Navbar from "@/components/composites/navbar/navbar";
import Newsletter from "@/components/composites/newsletter/newsletter";
import ShareRecipe from "@/components/composites/share-recipe/share-recipe";


export default function Home() {
  return (
    <main>
     <Navbar />
     <Header />
     <Features />
     <Categories />
     <ShareRecipe />
     <Newsletter />
     <Footer />
    </main>
  );
}
