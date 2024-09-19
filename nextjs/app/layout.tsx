import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Whild Oasis",
  description: "A collection of thoughts and ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
