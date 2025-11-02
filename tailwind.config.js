/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "rgba(255, 204, 33, 1)",
          400: "rgba(255, 150, 60, 1)",
          500: "rgba(234, 108, 0, 1)",
        },
        secondary: {
          300: "rgba(143, 233, 208, 1)",
        },
        dark: {
          500: "rgba(65, 65, 65, 1)",
          600: "rgba(46, 46, 46, 1)",
        },
        orange: "rgba(255, 150, 60, 1)",
        gray: {
          400: "rgba(119, 119, 119, 1)",
        },
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(155.89deg, #FFCC21 8.26%, #FF963C 91.18%)",
      },
      boxShadow: {
        custom: "0px 3px 6px 0px rgba(0, 0, 0, 0.16)",
      },
      height: {
        header: "64px",
        footer: "128px",
      },
    },
  },
  plugins: [],
};
