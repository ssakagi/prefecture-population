import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "都道府県別人口推移",
  description: "都道府県別人口推移のグラフを表示するWebアプリケーション",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-white text-[rgb(35,39,47)]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
