import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";

const lexend = Lexend_Deca({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Academia Archive",
  description:
    "For a true reader, a book is not a leisure activity; it is a nutritional necessity. The mind starves when the pages stop turning.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`relative min-h-screen bg-fixed bg-cover bg-center bg-no-repeat ${lexend.className}`}
        style={{ backgroundImage: "url('/bg-image.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Page content */}
        <div className="relative z-10 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
