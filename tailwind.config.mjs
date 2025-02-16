/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease",
        "fade-in-up": "fade-in-up 1s ease-out",
      },
      colors: {
        ai: {
          DEFAULT: "#0D5661",
        },
        ichigo: {
          DEFAULT: "#B5495B",
        },
        kamenozoki: {
          DEFAULT: "#A5DEE4",
        },
        momo: {
          DEFAULT: "#F596AA",
        },
        sakura: {
          DEFAULT: "#FEDFE1",
        },
        sora: {
          DEFAULT: "#58B2DC",
        },
        wasurenagusa: {
          DEFAULT: "#7DB9DE",
        },
      },
    },
  },
  plugins: [],
};
