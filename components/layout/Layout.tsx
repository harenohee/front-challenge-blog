import React, { PropsWithChildren, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="h-auto min-h-full pb-[122px]">
        <Header />
        <div className="px-20">{children}</div>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
