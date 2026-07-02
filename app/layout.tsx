import type { Metadata } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import { LocaleProvider } from "@/providers/LocaleProvider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Daniel Sousa | Software Engineer",
  description:
    "Portfolio of Daniel Sousa — Software Engineer based in Goiás, Brazil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
