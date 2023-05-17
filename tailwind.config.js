/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "mint-green": "#CEFFF2",
        "mauve": "#FAA6FF",
        "space-cadet": "#1E2749",
        "sunglow": "#FFCF56",
        "rose": "#FF206E",
        "true-black": "#0E1221",
      },
    },
  },
  plugins: [],
};
