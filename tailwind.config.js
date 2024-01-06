/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts,css}"],
  theme: {
    extend: {
      width: {
        mobile: "380px",
        tablet: "601px",
        desktop: "1080px",
        myMobile: "85%",
        largeDesktop: "1400px",
      },
      margin: {
        standard: "4%",
      },
      backgroundImage: {
        "bg-image": "url('/src/assets/images/jpg/bg.jpg')",
      },
      dropShadow: {
        Text: ["0 3px 3px rgba(0, 0, 0, 0.8)", "0 4px 4px rgba(0, 0, 0, 0.6)"],
      },
    },
  },
  plugins: [],
};
