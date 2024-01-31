import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
        className={`${rubik.className} md:flex min-h-screen bg-gray-200 text-gray-700`}
      >
        <nav className="p-6 sm:p-8 md:p-16 md:top-0 md:h-screen md:sticky md:flex md:items-start md:justify-normal md:w-1/2 md:flex-col">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Selvin Mayes
          </h1>
          <h2 className=" text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-600 mb-2 md:mb-4">
            Front-End Engineer
          </h2>
          <span className="block mb-6 sm:text-lg">
            I build compelling and user-friendly web applications.
          </span>
          <div className="mb-6 sm:text-lg text-indigo-600 hidden md:block">
            <Link href="#about-me" className="hover:underline block">
              About me
            </Link>
            <Link href="#projects" className="hover:underline block">
              Projects
            </Link>
          </div>

          <div className="flex space-x-4 items-center text-indigo-600 text-2xl md:text-3xl">
            <a
              href="#"
              className="opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
              <FaLinkedin />
            </a>
          </div>
        </nav>
        <main className="flex-grow p-6 sm:p-8 md:p-16">{children}</main>
      </body>
    </html>
  );
}
