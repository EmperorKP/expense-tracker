import { Inter,Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";


const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Kp Expense Tracker",
  description: "feel the vibe of saving",
  icons: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <Toaster />
          </body>
      </html>
    </ClerkProvider>
  );
}
