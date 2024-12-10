import type { Metadata } from "next";
import { Roboto } from "next/font/google"
import "./globals.css";
import { Toaster } from "react-hot-toast"

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["greek"]
})


export const metadata: Metadata = {
  title: "Cookio",
  description: "A recipe management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        {children}
      <Toaster />
      </body>
    </html>
  );
}
