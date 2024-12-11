import Categories from "@/components/Categories/Categories";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Newsletter from "@/components/Newsletter/Newsletter";
import ShareRecipe from "@/components/ShareRecipe/ShareRecipe";

export default function page() {
  return (
    <main>
     <Navbar />
     <Header />
     <ShareRecipe />
     <Categories />
     <Newsletter />
     <Footer />
    </main>
  );
}
