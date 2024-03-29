import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import NavLinks from "@/components/NavLinks";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Selvin Mayes",
  description: "Personal website to showcase projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${rubik.className} min-h-screen bg-gray-200 text-gray-600`}
      >
        <div className="lg:flex max-w-6xl m-auto">
          <div className="p-6 sm:p-10 md:p-14 lg:py-24 lg:top-0 lg:h-screen lg:justify-between lg:sticky lg:flex lg:items-start lg:w-1/2 lg:flex-col">
            <div>
              <div className="mb-10 lg:mb-16">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Selvin Mayes
                </h1>
                <h2 className=" text-lg sm:text-xl md:text-2xl  font-bold text-emerald-700 mb-2 md:mb-4">
                  Full-Stack Developer
                </h2>
                <span className="block">
                  I build compelling and user-friendly web applications.
                </span>
              </div>
              <NavLinks />
            </div>
            <div className="flex space-x-4 items-center text-emerald-700 text-2xl md:text-3xl">
              <a
                href="https://github.com/SelvinM"
                className="opacity-70 hover:opacity-100 transition-opacity duration-200 ease-in-out"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/selvin-mayes/"
                className="opacity-70 hover:opacity-100 transition-opacity duration-200 ease-in-out"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <main className="p-6 pb-24 sm:p-10  md:p-14 md:pb-24 lg:pt-0 lg:w-1/2 ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
