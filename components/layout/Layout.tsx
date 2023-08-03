import React, { PropsWithChildren, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="h-auto min-h-full pb-32">
        <div className="px-20">{children}</div>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
