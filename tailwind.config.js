/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        moveDot: 'moveDot 6s linear infinite',
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        moveDot: {
          '0%, 100%': { top: '10%', right: '10%' },
          '25%': { top: '10%', right: 'calc(100% - 35px)' },
          '50%': { top: 'calc(100% - 30px)', right: 'calc(100% - 35px)' },
          '75%': { top: 'calc(100% - 30px)', right: '10%' },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}