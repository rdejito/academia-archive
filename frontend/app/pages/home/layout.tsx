import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";

const lexend = Lexend_Deca({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Academia Archive",
  description: "Organize, preserve, and access academic resources.",
};

function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`min-h-screen ${lexend.className} bg-fixed bg-center bg-cover bg-no-repeat`}
      style={{ backgroundImage: "url('/bg-image.png')" }}
    >
      <div className="relative z-20 min-h-screen">{children}</div>
    </div>
  );
}

export default HomeLayout;
