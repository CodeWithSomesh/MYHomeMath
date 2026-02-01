import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
// import { createServerClient } from '@supabase/ssr'
// import { cookies } from 'next/headers'
// import { CookieOptions } from '@supabase/ssr'
import { Toaster } from "@/components/ui/toaster"

// Configure the font with required subsets and custom variable (if needed)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"], // Use the appropriate subset for your content
  variable: "--font-space-grotesk", // Optional custom CSS variable for easier usage
  weight: ["400", "500", "600", "700"], // Optional: specify weights as needed
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MYHomeMath",
  description: "Calculate your mortgage, check loan eligibility, and find the best home loan options in Malaysia with just a few clicks",
  keywords: [
    "Mortgage Calculator",
    "Mortgage Calculator Malaysia",
    "Home Loan Calculator Malaysia",
    "Loan Eligibility Checker Malaysia",
    "Housing Loan Interest Rates Malaysia",
    "Best Mortgage Plans Malaysia",
    "Bank Loan Calculator Malaysia",
    "Amortization Schedule Malaysia",
    "Malaysian Property Financing",
    "Malaysian Home Loans",
    "Best Malaysian Home Loans with low intetrest",
    "Compare Home Loans Malaysia",
    "Best Home Loans In Malaysia"
  ],
  openGraph: {
    title: "MYHomeMath",
    description: "Calculate your mortgage, check loan eligibility, and find the best home loan options in Malaysia with just a few clicks",
    url: "https://home-finance-malaysia.vercel.app",
    siteName: "HomeFinanceMalaysia",
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Wait for cookies to be available
  // const cookieStore = await cookies()
  
  // const supabase = createServerClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  //   {
  //     cookies: {
  //       get(name: string) {
  //         return cookieStore.get(name)?.value
  //       },
  //       set(name: string, value: string, options: CookieOptions) {
  //         // Set function needed for auth to work properly
  //         cookieStore.set(name, value, options)
  //       },
  //       remove(name: string, options: CookieOptions) {
  //         // Remove function needed for auth to work properly
  //         cookieStore.set(name, '', { ...options, maxAge: 0 })
  //       },
  //     },
  //   }
  // )


  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
