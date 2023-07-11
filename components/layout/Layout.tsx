import React, { PropsWithChildren, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-auto min-h-full">
      <Header />
      <div className="pb-[122px]">
        <div className="px-20">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
