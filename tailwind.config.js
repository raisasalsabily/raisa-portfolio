/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "serif"],
    },
    fontSize: {
      "h-2xl": ["4rem", "6rem"], // 64px
      "h-xl": ["3rem", "4.5rem"], // 48px
      "h-lg": ["2rem", "3rem"], // 32px
      "h-md": ["1.5rem", "2.25rem"], // 24px
      "h-sm": ["1.25rem", "1.875rem"], // 20px
      "b-xl": ["1.125rem", "2rem"], // 18px
      "b-lg": ["1rem", "1.75rem"], // 16px
      "b-md": ["0.875rem", "1.5rem"], // 14px
      "b-sm": ["0.75remf", "1.3rem"], // 12px
      "b-xsm": ["0.625rem", "1rem"], // 10px
      "b-xxsm": ["0.5rem", "0.8rem"], // 8px, 12px,
      "8xl": ["6rem", "1 rem"],
    },

    extend: {
      fontFamily: {
        prozaLibre: ["Proza Libre", "sans-serif"],
        sourceCodePro: ["Source Code Pro", "monospace"],
        pacifico: ["Pacifico", "sans-serif"],
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#FFF",
        black: "#000",
        neutral: {
          50: "#fafafa",
          100: "#E8EBEB",
          200: "#D2D6D7",
          300: "#BBC2C3",
          400: "#A5ADAF",
          500: "#8E999B",
          600: "#727A7C",
          700: "#555C5D",
          800: "#393D3E",
          900: "#1C1F1F",
        },
        blizblue: {
          50: "#effcfc",
          100: "#d5f4f8",
          200: "#b1e8f0",
          300: "#92ddea",
          400: "#3dbad3",
          500: "#229db8",
          600: "#1f7f9b",
          700: "#1f677f",
          800: "#225568",
          900: "#204759",
          950: "#102f3c",
        },
        illusion: {
          50: "#fef1f8",
          100: "#fee5f4",
          200: "#fecce9",
          300: "#ffa5d8",
          400: "#fe68ba",
          500: "#f83c9d",
          600: "#e81a7b",
          700: "#ca0c5f",
          800: "#a70d4f",
          900: "#8b1044",
          950: "#550225",
        },
        litwisteria: {
          50: "#faf7fd",
          100: "#f3edfa",
          200: "#eadff5",
          300: "#d9c5ed",
          400: "#be9ddf",
          500: "#a67bd1",
          600: "#8e5ebf",
          700: "#784aa6",
          800: "#644188",
          900: "#51356e",
          950: "#351d4e",
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
