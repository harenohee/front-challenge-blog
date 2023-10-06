import React, { PropsWithChildren, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="h-auto min-h-full pb-32 w-full">
        <div className="flex items-center justify-center w-full">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
