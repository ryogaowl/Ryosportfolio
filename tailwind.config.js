/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        tw: "#fffff",
      },
      backgroundColor: {
        card: "#e7e7e7",
        base: "#FFFFFF",
      },
      backgroundImage: {
        mv: "url('/images/mv.jpg')",
        blog: "url('/images/blog.jpg')",
        about: "url('/images/about.jpg')",
        contact: "url('/images/mail.jpg')",
        works: "url('/images/works.jpg')",
        price: "url('/images/price.jpg')",
      },
      animation: {
        "text-focus-in":
          "text-focus-in 1.3s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
        "pulsate-fwd": "pulsate-fwd 0.8s ease  infinite both",
      },
      keyframes: {
        "text-focus-in": {
          "0%": {
            filter: "blur(12px)",
            opacity: "0",
          },
          to: {
            filter: "blur(0)",
            opacity: "1",
          },
        },
        "pulsate-fwd": {
          "0%,to": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
        },
      },
      width: {
        works: "45%",
      },
      colors: {
        dar: "#222831",
        main: "#232323",
      },
      rotate: {
        33: "-45deg",
      },
    },
  },
  plugins: [],
};
