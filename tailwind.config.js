/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bg-cust-dark": "#121212",
        "bg-cust-dark2": "#1D1D1D",
        "bg-cust-accent-orange1": "#E76F51",
        "bg-cust-accent-orange2": "#FA613B",
        "bg-cust-accent-orange-lite": "#F4A261",
        "bg-cust-accent-pink": "#FF3864",
      },
    },
  },
  plugins: [],
};
