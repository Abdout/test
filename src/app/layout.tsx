import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Side from "@/component/layout/side";
import Header from "@/component/layout/header";
import ContextProvider from "@/provider/ContextProvider";
import { ProjectProvider } from "@/provider/project";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "T&C",
  description: "Testing and commissioning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} flex`}>
        <ContextProvider>
          <div className="w-1/5">
            <Side />
          </div>
          <div className="w-4/5 flex flex-col">
            <Header />
            <ProjectProvider>
            {children}
            </ProjectProvider>
          </div>
        </ContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
