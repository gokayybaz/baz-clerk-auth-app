import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignIn, UserButton, UserProfile } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Baz Clerk Auth App",
  description: "Gökay Baz Clerk Auth App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="tr">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="flex m-4 justify-between">
            <h1>Baz Clerk Auth App</h1>
            <UserButton showName />
          </header>
          <main className="flex items-center justify-center">
            <SignedOut>
              <SignIn routing="hash" />
            </SignedOut>
            <SignedIn>
              {children}
            </SignedIn>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
