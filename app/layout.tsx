import { CroctProvider } from "@croct/plug-next/CroctProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aplicativo Croct",
  description: "Aplicativo Next.js com Croct para personalização",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<html lang="pt-BR">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <CroctProvider>
        {children}
      </CroctProvider>
    </body>
  </html>);
}
