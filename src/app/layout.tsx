"use client"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Provider} from "react-redux";
import store from "@/store";

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

const metadata: Metadata = {
  title: "Omnishore Test App",
  description: "This is the Omnishore Test App for the FrontEnd position",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Provider store={store}>
          {children}
      </Provider>
      </body>
    </html>
  );
}
