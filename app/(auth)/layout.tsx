import type { Metadata } from "next";
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["greek"]
})


export const metadata: Metadata = {
  title: "Cookio-Accounts",
  description: "A recipe management app",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`${roboto.className}`}
    >
      {children}
    </main>
  );
}
