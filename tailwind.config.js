/** @type {import('tailwindcss').Config} */
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

  //daisyUI configuration
  daisyui: {
    themes: [
      {
        secureexam: {
          primary: "#0D7C66",
          "primary-content": "#ffffff",
          secondary: "#41B3A2",
          accent: "#D7C3F1",
          neutral: "#f1f5f9",
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#e2e8f0",
          info: "#3b82f6",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
  },
};
