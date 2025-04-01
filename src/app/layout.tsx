import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Open_Sans, Marcellus } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });
const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-marcellus"
});

export const metadata: Metadata = {
  title: "Prodough - Premium Frozen Food Solutions",
  description: "ProFoodz RTC Pvt Ltd offers high-quality Heat n Serve Indian Breads, including Naan, Tandoori Roti, Lachcha Paratha, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          openSans.variable,
          marcellus.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
