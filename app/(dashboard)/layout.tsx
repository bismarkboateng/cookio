import type { Metadata } from "next";
import { Roboto } from "next/font/google"
import Header from "./components/header/header";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["greek"]
})


export const metadata: Metadata = {
  title: "Cookio-Dashboard",
  description: "A recipe management app",
};

export default function DashboarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`${roboto.className} w-[85%] mx-auto`}
    >
      <Header />
      {children}
    </main>
  );
}
