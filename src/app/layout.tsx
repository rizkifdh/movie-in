import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

import { Providers } from "./redux/providers";

const titillium = Titillium_Web({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "Movie In",
  description: "All About Movie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={titillium.className}>
        <Providers>
          <div className="flex flex-col min-h-screen p-5">
            <Header />
            <main className="flex-grow pt-5 pb-5">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
