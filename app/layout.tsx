import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "./provider";

export const metadata: Metadata = {
  title: "Pouya Fattahi's Portfolio",
  description: "Pouya Fattahi Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/three.svg" sizes="any" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
