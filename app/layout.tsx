import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import {
  ClerkProvider
} from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased bg-[#ecedef]`}>
          <Navbar />
          {children}
          <script
  defer
  data-website-id="67add248028d90b99a518483"
  data-domain="saas-psi-livid.vercel.app"
  src="https://datafa.st/js/script.js">
</script>
        </body>
        
      </html>
    </ClerkProvider>
  );
}
