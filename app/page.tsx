import AboutRecipa from "@/components/composites/about-recipa/about-recipa";
import Categories from "@/components/composites/categories/categories";
import Features from "@/components/composites/features/features";
import Footer from "@/components/composites/footer/footer";

import Header from "@/components/composites/header/header";
import LatestRecipes from "@/components/composites/latest-recipes/latest-recipes";
import Navbar from "@/components/composites/navbar/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Features />
      <Categories />
      <LatestRecipes />
      <AboutRecipa />
      <Footer />
    </main>
  );
}