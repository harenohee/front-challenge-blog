import React from "react";
export default function Footer() {
  return (
    <footer className="px-4 pt-[190px] text-base md:text-xl">
      <div className="mb-4 h-[1px] w-auto bg-black"></div>
      <div className="mx-4 grid mobile:grid-rows-1 md:grid-cols-2">
        <p className="md:min-w-[420px]">
          모든 목소리에 귀 기울여 최선의 아웃풋을 만들어내는 프론트엔드 엔지니어
          홍희진입니다.<br></br>
          언제든 연락주세요!
        </p>
        <div className="flex-col items-end space-y-2 md:flex">
          <div className="collapse md:visible md:text-2xl xl:text-[32px]">
            Contact
          </div>
          <a href="tel:+82 10-4859-6212">+82 10-4859-6212</a>
          <div>https://velog.io/@harenohee</div>
        </div>
      </div>
    </footer>
  );
}
