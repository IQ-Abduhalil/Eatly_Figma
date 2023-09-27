/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xxs: { max: "375px" },
        xs: { min: "375px", max: "576px" },
        sm: { min: "576px", max: "768px" },
        md: { min: "768px", max: "992px" },
        lg: { min: "992px", max: "1200px" },
        xl: { min: "1200px", max: "1400px" },
        xxl: { min: "1400px" },
      },
    },
  },
  plugins: [],
};
