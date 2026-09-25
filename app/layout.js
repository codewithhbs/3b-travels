import "@fontsource/outfit/300.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";

export const metadata = {
  title: { default: "3B Travels | Curiously Curated Tours", template: "%s | 3B Travels" },
  description: "Hotels, air tickets, holiday tours, visa, insurance, car rental and MICE. Curated domestic and international tours by 3B Travels.",
  icons: { icon: "/brand/logo-color-notagline.svg" },
};

export const viewport = { themeColor: "#34167f" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
