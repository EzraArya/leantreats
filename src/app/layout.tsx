import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: '--font-poppins'  // Add this line
});

export const metadata: Metadata = {
  title: "Lean Treats - Guilt-Free Cookies",
  description: "Discover our delicious, low-calorie cookies made with natural ingredients. Perfect for a healthy lifestyle.",
  robots: {
    index: true,
    follow: true,
  },
  keywords: ["lean treats", "guilt-free cookies", "healthy snacks"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="font-poppins antialiased">
        {children}
      </body>
    </html>
  );
}