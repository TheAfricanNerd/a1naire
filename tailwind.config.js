/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts,css}"],
  theme: {
    extend: {
      width: {
        mobile: "400px",
        tablet: "601px",
        desktop: "1080px",
        myMobile: "95%",
        largeDesktop: "1400px",
      },
      margin: {
        standard: "4%",
      },
      backgroundImage: {
        "bg-image": "url('/src/assets/images/jpg/bg.jpg')",
      },
    },
  },
  plugins: [],
};
