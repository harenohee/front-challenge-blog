import Link from "next/link";
import React from "react";
import logo from "../../assets/blog/logo.jpg";
import Image from "next/image";
const Header = () => {
  return (
    <div className="sticky top-0 w-full bg-white flex justify-center items-center">
      <Link href="/" className="cursor-pointer">
        <a>
          <Image src={logo} alt="logo_img" width={40} height={88} />
        </a>
      </Link>
    </div>
  );
};

export default Header;
