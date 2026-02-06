/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["\"Playfair Display\"", "serif"],
        script: ["\"Great Vibes\"", "cursive"]
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        petalFall: {
          "0%": { opacity: "0", transform: "translate3d(0, -15%, 0) rotate(0deg)" },
          "8%": { opacity: "0.75" },
          "60%": { opacity: "0.55" },
          "100%": { opacity: "0", transform: "translate3d(60px, 110vh, 0) rotate(360deg)" }
        }
      },
      animation: {
        "fade-up": "fadeUp 0.9s ease-out both",
        "petal-fall": "petalFall 8s linear infinite"
      },
      boxShadow: {
        soft: "0 20px 50px -30px rgba(190, 18, 60, 0.35)"
      }
    }
  },
  plugins: []
};
