/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "Pretendard", "sans-serif"],
        // sans가 제일 기본 상속 폰트이므로 전체 폰트바꾸려면 sans재지정후 맨앞에 원하는 폰트 넣기
      },
      screens: {
        mobile: "390px",
      },
      colors: {
        bg: "#f5f5f3",
        blue0: "#B0DAFF",
        highlight: "#FEFF86",
        blue50: "#19A7CE",
        blue100: "#146C94",
        black100: "#212529",
      },
    },
  },
  plugins: [],
};
