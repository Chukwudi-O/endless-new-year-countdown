import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Navigation } from "@/components/navigation";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Endless New Year Countdown",
  description: "Countdown to the next new year",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} antialiased`}
      >
        <SidebarProvider>
          <Navigation/>
          <SidebarTrigger
            className=' top-5 right-10 fixed scale-200'/>
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
