import Head from "next/head";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "400", "500", "600", "700", "800"] });

export const metadata = {
  title: "TuneX",
  description: "Music WebSite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
