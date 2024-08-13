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
