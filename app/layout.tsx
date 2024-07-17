import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvinder";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iTodo",
  description: "Ai powered todo list fro personal and small oranisation project management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><ConvexClientProvider>{children}</ConvexClientProvider></body>
    </html>
  );
}
