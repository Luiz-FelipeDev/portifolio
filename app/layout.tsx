import type { Metadata } from "next";
import {
  Montserrat,
  Poppins,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["600", "700", "800"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Luiz Felipe | Desenvolvedor Full Stack",
  description:
    "Portfólio de Luiz Felipe, desenvolvedor Full Stack especializado em Java, Spring Boot, React e Next.js.",
    icons: {
    icon: "/docsify.svg", // ou "/icon.png"
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${poppins.variable} ${plexSans.variable} ${plexMono.variable} font-body bg-bg text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
