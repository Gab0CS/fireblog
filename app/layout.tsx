import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import { UserContext } from "@/lib/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fire blog",
  description: "Fire blog...just insane post",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <UserContext.Provider value={{ user:'', username: 'Gabo' }}>
            <Navbar />
            {children}
            <Toaster />
          </UserContext.Provider>
          
        </body>
      
    </html>
  );
}
