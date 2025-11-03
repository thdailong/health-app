/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Hiragino Kaku Gothic Pro", "sans-serif"],
        ja: ["Hiragino Kaku Gothic Pro", "sans-serif"],
      },
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
        "gradient-button":
          "linear-gradient(12deg, #FFCC21 8.75%, #FF963C 86.64%)",
        "gradient-food":
          "linear-gradient(210deg, #ffcc2154 0%, #ff963c42 100%)",
      },
      boxShadow: {
        custom: "0px 3px 6px 0px rgba(0, 0, 0, 0.16)",
      },
      height: {
        header: "64px",
        footer: "128px",
      },
      spacing: {
        56: "56px",
        64: "64px",
      },
      gap: {
        4.5: "18px",
      },
      borderWidth: {
        24: "24px",
      },
      maxHeight: {
        192: "192px",
      },
      fontSize: {
        "11px": "11px",
        "15px": "15px",
        "2xl-2": "22px",
        "25px": "25px",
      },
      lineHeight: {
        15: "15px",
        16: "16px",
      },
    },
  },
  plugins: [],
};
