import "~/styles/globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { TopNav } from "./_components/topnav";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "PetSafe",
  description: "Top pet food safety at your fingertips",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        {/* flex-col + gap is temporary solution change to grid later 21:00 */}
        <body className="flex flex-col gap-4">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
