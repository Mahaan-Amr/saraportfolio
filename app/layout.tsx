import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { I18nProvider } from "@/components/I18nProvider";
import { ABTestProvider } from "@/contexts/ABTestContext";

// English fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Farsi fonts - using CDN fonts since local files may not exist
// The CSS @import in globals.css handles the font loading
// We'll create a simple variable for CSS usage
const vazir = {
  variable: "--font-vazir",
};

const yekan = {
  variable: "--font-yekan",
};

export const metadata: Metadata = {
  title: "SARA (Vanellope) - Creative Animator & Graphic Designer",
  description: "Hey! I'm Sara (aka Vanellope) - a passionate animator and graphic designer. Bringing stories to life through animation, design, and visual storytelling. Fueled by epic soundtracks and cinematic magic!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  if (theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${vazir.variable} ${yekan.variable} antialiased`}
      >
        <ThemeProvider>
          <I18nProvider>
            <ABTestProvider>
            {children}
            </ABTestProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
