import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/shared/WhatsAppFloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JAV'S SPORTS ACADEMY | Sport Teaches Life | Chennai, Tamil Nadu",
  description:
    "Chennai's premier multi-sport & athlete development academy. Professional coaching across 12 disciplines: Cricket, Football, Badminton, Athletics, Swimming, Basketball, Tennis, and more. Directed by Coach Mohammed Javeed (M.P.Ed.), host of @JavsInbox.",
  keywords: [
    "JAV'S Sports Academy",
    "Sports Academy Chennai",
    "Cricket Coaching Thiruverkadu",
    "Prestige Bella Vista Sports Coaching",
    "Badminton Coaching Chennai",
    "Football Academy Chennai",
    "Mohammed Javeed",
    "Jav's Inbox",
    "Swimming Classes Iyyappanthangal",
    "Sports Coaching for Kids Chennai"
  ],
  authors: [{ name: "Mohammed Javeed", url: "https://javssportsacademy.com" }],
  openGraph: {
    title: "JAV'S SPORTS ACADEMY | One Platform. Every Stage of Growth.",
    description: "Sport Teaches Life. Professional coaching in Cricket, Football, Badminton, Swimming, Tennis, and 7 more sports in Chennai.",
    url: "https://javssportsacademy.com",
    siteName: "JAV'S Sports Academy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-brand-primary selection:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppFloatingButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
