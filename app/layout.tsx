import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  title: "JDREportfolio",
  description: "Portafolio personal de Jowin Daniel Rojas Espinosa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-950 text-gray-100">
        <LanguageProvider>
          <Navbar />
          <main className="pt-20">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
