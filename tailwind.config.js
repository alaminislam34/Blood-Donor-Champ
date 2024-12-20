/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        donarBack: "url('./src/assets/donar.png')",
        donateBack: "url('./src/assets/donation.jpg')",
        BannerBack: "url('./src/assets/backBanner.jpg')",
      },
      perspective: {
        1000: "1000px",
      },
      rotate: {
        x3: "3deg",
        y3: "3deg",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        Bangali: ["Noto Sans Bengali", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
