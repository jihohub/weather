// import GlobalLoadingBar from "@/features/common/components/GlobalLoadingBar";
import { Noto_Sans_KR as NotoSansKr } from "next/font/google";
import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const notoSansKr = NotoSansKr({
  subsets: ["latin"],
  display: "swap",
});

const Layout = ({ children }: LayoutProps) => (
  <div
    className={`${notoSansKr.className} flex flex-col min-h-screen bg-gradient-radial from-blue-300 to-blue-200`}
  >
    {/* <GlobalLoadingBar /> */}
    <Header />
    <main className="flex-grow container mx-auto mb-16 mt-16 sm:mt-0">
      {children}
    </main>
  </div>
);

export default Layout;
