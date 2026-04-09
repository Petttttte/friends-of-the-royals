import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Friends of the Royals | Riverview High School Alumni Association",
    template: "%s | Friends of the Royals",
  },
  description:
    "Friends of the Royals is a distinguished alumni association in Riverview, NB committed to fostering connections, empowering students, and championing community projects.",
  keywords: [
    "Friends of the Royals",
    "Riverview High School",
    "alumni association",
    "Riverview NB",
    "community projects",
    "fundraising",
    "scholarships",
    "New Brunswick",
  ],
  authors: [{ name: "Friends of the Royals" }],
  creator: "Friends of the Royals Alumni Association",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://friendsoftheroyals.ca",
    siteName: "Friends of the Royals",
    title: "Friends of the Royals | Riverview High School Alumni Association",
    description:
      "A vibrant community of former students dedicated to fostering connections, empowering the next generation, and creating lasting impact.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Friends of the Royals",
    description:
      "A vibrant community of former students dedicated to fostering connections, empowering the next generation, and creating lasting impact.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
