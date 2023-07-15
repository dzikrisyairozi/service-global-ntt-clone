const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      animation: {
        'custom-ping': 'custom-ping 2s infinite',
      },
      keyframes: {
        'custom-ping': {
          '75%, 100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
      colors: {
        primary: '#0072BC',
        accent: '#0FC8F2',
        dark_blue: '#001973',
        light_gray: '#BAD2ED',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.animate-custom-ping': {
          animation: 'custom-ping 2s infinite',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
