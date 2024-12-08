import type { Metadata } from "next";
import { Roboto } from "next/font/google"
import Header from "./components/Header/Header";

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
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
