import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nova Studio | Personal Training & Hormooncoaching in Purmerend",
  description:
    "De leukste personal training in Purmerend. Kleinschalige high-end studio aan huis met persoonlijke begeleiding, zwangerschapsfitness en hormooncoaching door Shirley.",
  openGraph: {
    title: "Nova Studio | Personal Training & Hormooncoaching in Purmerend",
    description:
      "De leukste personal training in Purmerend. Kleinschalige high-end studio aan huis met persoonlijke begeleiding, zwangerschapsfitness en hormooncoaching door Shirley.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${playfair.variable} ${poppins.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
