import type { Metadata } from "next";
import { Poppins, Pacifico } from "next/font/google";
import "./globals.css";
import { Navbar } from '@/app/components/Navbar/Navbar'
import { Footer } from '@/app/components/Footer/Footer'

const poppins = Poppins({
    style: ["normal"],
    weight: ["100", "400"],
    variable: "--font-poppins",
    subsets: ["latin"]
});

const pacifico = Pacifico({
    weight: ["400"],
    variable: "--font-pacifico",
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kavárna Aroma",
  description: "IMT práce Lucie Salamonové o Kavárně Aroma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${pacifico.variable}`}>
      <Navbar />
        {children}
      <Footer/>
      </body>
    </html>
  );
}
