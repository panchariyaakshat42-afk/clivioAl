import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: "Clivio - AI Video Generator",
  description: "Generate viral faceless videos instantly.",
};

const dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-dm-sans' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${dmSans.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* The <header> block was here. I have removed it. */}
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}