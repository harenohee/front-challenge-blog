import React from "react";
const Footer = () => {
  return (
    <footer className="relative -translate-y-full px-4 h-32 text-xs md:text-sm">
      <div className="mb-4 h-[1px] w-auto bg-black"></div>
      <div className="mx-4 grid md:grid-cols-2 ">
        <p>
          모든 목소리에 귀 기울여 최선의 아웃풋을 만들어내는 프론트엔드 엔지니어
          홍희진입니다.<br></br>
          언제든 연락주세요
        </p>
        <div className="flex-col items-end space-y-2 md:flex mobile:grid grid-rows-3">
          <div className="mobile:text-base font-semibold md:text-lg xl:text-2xl">
            Contact
          </div>
          <a href="mailto:panda4859@gmail.com" className="hover:text-blue50">
            panda4859@gmail.com
          </a>
          <a href="tel:+82 10-4859-6212" className="hover:text-blue50">
            +82 10-4859-6212
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
