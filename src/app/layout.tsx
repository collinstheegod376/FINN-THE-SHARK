import type { Metadata } from "next";
import { Bangers, Varela_Round } from "next/font/google";
import "./globals.css";

const bangers = Bangers({
  weight: "400",
  variable: "--font-bangers",
  subsets: ["latin"],
});

const varelaRound = Varela_Round({
  weight: "400",
  variable: "--font-varela-round",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FINN THE HAMMER | The Ocean's Gentleman",
  description: "Meet FINN THE HAMMER. Sharp-toothed, sharp-dressed, and ready to dominate the digital deep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block" />
      </head>
      <body className={`${bangers.variable} ${varelaRound.variable} font-body bg-background text-black antialiased overflow-x-hidden h-full`}>
        {children}
      </body>
    </html>
  );
}
