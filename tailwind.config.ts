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
        modal: "url('/img/modal.svg')",
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
        "slide-top": "slide-top 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715)",
        pop: "pop 0.4s cubic-bezier(0.470, 0.000, 0.745, 0.715)",
        "pop-bounce": "pop-bounce 1s linear",
      },
      keyframes: {
        "slide-top": {
          "0%": {
            transform: "translateY(75vh)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        "pop-bounce": {
          "0%": {
            transform: "scale(0.5)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
          "65%": {
            transform: "scale(1.08)",
          },
          "80%": {
            transform: "scale(1.1)",
          },
          "90%": {
            transform: "scale(1.04)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        pop: {
          "0%": {
            transform: "scale(0.5)",
            "transform-origin": "50% 100%",
          },
          "100%": {
            transform: "scale(1)",
            "transform-origin": "50% 100%",
          },
        },
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
