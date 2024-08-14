import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "chat-box": "url('/img/chat-box.svg')",
        profile: "url('/img/profile.svg')",
      },
      backgroundColor: {
        "health-bar": "#ac3232",
      },
      dropShadow: {
        text: "0 1.2px 1.2px rgba(0,0,0,0.9)",
        button: "0 1.2px 1.2px rgba(0,0,0,0.8)",
        hovers: "0 2px 2px rgba(0,0,0,0.9)",
        "green-glow": "0px 0px 26px #99e550",
        "blue-glow": "0px 0px 26px #639bff",
        "grey-glow": "0px 0px 26px #9badb7",
        "yellow-glow": "0px 0px 26px #ffe144",
        "dark-blue-glow": "0px 0px 26px #3f3f74",
      },
      animation: {
        breathing: "breathing 3s ease-in-out infinite normal",
        "breathing-transition": "breathing-transition 1s ease-out normal",
      },
      keyframes: {
        "breathing-transition": {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        breathing: {
          "0%": {
            transform: "scale(1)",
          },
          "25%": {
            transform: "scale(1.05)",
          },
          "60%": {
            transform: "scale(1)",
          },
          "80%": {
            transform: "scale(1.05)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
