/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "minecraft-dirt": "url('./src/assets/pattern blocks/dirt.png')",
        "minecraft-hill": "url('./src/assets/pattern blocks/grass_dirt.png')",
        "minecraft-stone": "url('./src/assets/pattern blocks/stone.png')",
        "minecraft-wool": "url('./src/assets/pattern blocks/white_wool.png')",
        "cubeButton-idle": "url('./src/assets/img/button_idle.png')",
        "cubeButton-hover": "url('./src/assets/img/button_hover.png')",
        "cubeButton-active": "url('./src/assets/img/button_active.png')",
      },
      fontFamily: {
        chava: ["Chava", "system-ui"],
        minecraft: ["Minecraft Seven", "Chava", "system-ui"],
      },
      animation: {
        splash: "splash 0.75s ease-in-out infinite",
      },
      keyframes: {
        splash: {
          "0%, 100%": {
            transform: "scale(1.05) rotate(345deg)",
          },
          "50%": { transform: "scale(0.95) rotate(345deg)" },
        },
      },
    },
  },
  plugins: [],
};
