/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import plugin from "tailwindcss/plugin"
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    plugin(function ({ addUtilities, matchUtilities, theme }) {
      addUtilities({
        '.ripple': {
          backgroundPosition: "center",
          transition: "background 0.8s",
        },
      });
      matchUtilities(
        {
          // Class name
          'ripple-hover': (value) => {
            return {
              background: `${value} radial-gradient(circle, transparent 1%, ${value} 1%) center/15000%`,
            }
          },
          'ripple-active': (value) => {
            return {
              backgroundColor: `${value}`,
              backgroundSize: "100%",
              transition: "background 0s",
            }
          },
        },
        // Default values.
        // `flattenColorPalette` required to support native Tailwind color classes like `red-500`, `amber-300`, etc. 
        // In most cases you may just pass `theme('config-key')`, where `config-key` could be any (`spacing`, `fontFamily`, `foo`, `bar`)
        { values: flattenColorPalette(theme('colors')) }
      )
    }),
  ],
}

