/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            ai: "rgb(var(--ai) / <alpha-value>)",
            black: colors.black,
            blue: colors.blue,
            cyan: colors.cyan,
            gray: colors.gray,
            ichigo: "rgb(var(--ichigo) / <alpha-value>)",
            indigo: colors.indigo,
            kamenozoki: "rgb(var(--kamenozoki) / <alpha-value>)",
            momo: "rgb(var(--momo) / <alpha-value>)",
            orange: colors.orange,
            purple: colors.purple,
            red: colors.red,
            sakura: "rgb(var(--sakura) / <alpha-value>)",
            sky: colors.sky,
            slate: colors.slate,
            sora: "rgb(var(--sora) / <alpha-value>)",
            wasurenagusa: "rgb(var(--wasurenagusa) / <alpha-value>)",
            white: colors.white,
            yellow: colors.yellow,
        },
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
            keyframes: {
                "blink-caret": {
                    "0, 100%": {
                        "border-color": "transparent",
                    },
                    "50%": {
                        "border-color": "transparent",
                    },
                },
                "to-full-width": {
                    from: {
                        width: "0",
                    },
                    to: {
                        width: "100%",
                    },
                },
            },
            animation: {
                "typing-style":
                    "to-full-width 1.5s steps(8, end), blink-caret .75s step-end infinite",
            },
            fontSize: {
                "2xs": ".5rem",
            },
            letterSpacing: {
                cardCategory: ".3rem",
            },
            spacing: {
                25: "5rem",
            },
        },
    },
    plugins: [],
};
