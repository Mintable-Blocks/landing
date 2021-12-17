module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#737373",
        bg: "#F2F2F2",
      },
      fontFamily: {
        pixel: ["Press Start 2P", "cursive"],
      },
      backgroundImage: {
        heroimg: "url('/assets/herobg.png')",
        heroimgm: "url('/assets/heroimgm.png')",
      },
    },
  },
  plugins: [],
  optimizeFonts: false,
};
