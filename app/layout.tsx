import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main
          className={`bg-[#19181C] min-h-screen w-screen ${roboto.className} overflow-hidden`}
        >
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
