import React, { PropsWithChildren, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <div className="flex-1 px-20">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
