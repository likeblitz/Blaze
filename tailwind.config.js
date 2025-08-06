/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          400: '#3B82F6',
          500: '#0070F3',
          600: '#0057CC',
          700: '#004BB2',
          900: '#002359',
        },
        orange: {
          300: '#FB923C',
          400: '#F97316',
          500: '#EA580C',
        },
        black: '#111111',
      },
      animation: {
        'in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

function flattenColorPalette(colors) {
  const result = {};
  
  for (const [key, value] of Object.entries(colors)) {
    if (typeof value === 'object') {
      const flatColors = flattenColorPalette(value);
      for (const [subKey, subValue] of Object.entries(flatColors)) {
        result[`${key}-${subKey}`] = subValue;
      }
    } else {
      result[key] = value;
    }
  }
  
  return result;
}