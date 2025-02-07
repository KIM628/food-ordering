import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { Toaster } from "react-hot-toast";
import { AppProvider } from "@/components/AppContext";

const roboto = Roboto({ subsets: ["latin"], weight: ['100', '300', '400', '500', '700', '900'] });

export const metadata = {
  title: "CoZzy Pizza",
  description: "Generated by Next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto p-4 ">
          <AppProvider>
            <Toaster />
            <Header />
            {children}
            <Footer className="border-t p-8 text-center text-gray-500 mt-16" />
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
