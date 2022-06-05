module.exports = {
  content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "dark": {
          900: "#1e1e1e",
          800: "#1b1b1b",
          700: "#242424",
          600: "#2d2d2d",
        },
        "grey": {
          900: "#4f4f4f",
          800: "#545454",
          700: "#545454",
          600: "#5e5e5e",
          500: "#939393",
          400: "#b3b3b3",
          300: "#d9d9d9",
        }
      },
      primary: "#d90000"
    }
  },
  variants: {
    extend: {},
    fontFamily: {
      sans: ['Montserrat', 'ui-sans-serif', 'system-ui']
    }
  },
  plugins: []
};
