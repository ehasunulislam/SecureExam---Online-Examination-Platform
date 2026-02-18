module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0D7C66", // Dark Teal
          light: "#41B3A2", // Medium Teal
        },
        accent: {
          mint: "#BDE8CA", // Light Mint
          lavender: "#D7C3F1", // Soft Lavender
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
