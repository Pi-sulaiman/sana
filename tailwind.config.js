/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        degular: ["Degular", "sans-serif"],
        grandslang: ["Grand Slang", "sans-serif"],
        grandslangitalic: ["Grand Slang Italic", "sans-serif"],
        migraitalic: ["Migra Italic", "sans-serif"],
        migrabold: ["Migra Italic Extrabold", "sans-serif"],
        migra: ["Migra Extralight", "sans-serif"],
      },
    },
    screens: {
      sm: "0px",
      md: "768px",
    },
  },
  plugins: [],
};
