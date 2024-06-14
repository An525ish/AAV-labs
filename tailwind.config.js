/* eslint-disable global-require */
import plugin from 'tailwindcss/plugin';

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      body: {
        DEFAULT: withOpacity('--color-text'),
        subtext: 'var(--color-subtext)',
      },
      primary: {
        DEFAULT: withOpacity('--color-primary'),
      },
      secondary: {
        DEFAULT: withOpacity('--color-secondary'),
      },
      background: {
        DEFAULT: withOpacity('--color-background'),
        alt: withOpacity('--color-background-alt'),
      },
      white: {
        DEFAULT: '#EBECEC',
        pure: '#FFFFFF',
      },
      black: {
        DEFAULT: '#211A2A',
        light: '#2A2136',
        dark: '#1A1520',
        pure: 'rgba(0, 0, 0)',
        transparent: 'rgba(0, 0, 0, 0.5)',
      },
      grey: {
        DEFAULT: '#EBECEC4D',
        dark: '#646464',
        light: '#C5DEDD',
      },
      green: {
        DEFAULT: '#2ECC71',
        light: '#E4FFF0',
        dark: '#1B3C37',
      },
      red: {
        DEFAULT: '#FF5863',
        light: '#E9243129',
        dark: '#4D2635',
      },
      pink: {
        DEFAULT: '#FAD2E1',
      },
      yellow: {
        DEFAULT: '#ECC347',
        light: '#ECC34733',
      },
      purple: {
        DEFAULT: '#9747FF',
      },
      blue: {
        light: '#E0F6FF',
        lighter: '#F2FFFC',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-purple': 'linear-gradient(180deg, #A43AB7 0%, #D368E7 100%)',
        'gradient-blue': 'linear-gradient(180deg, #3179BE 0%, #61ABF1 100%)',
        'gradient-orange': 'linear-gradient(180deg, #E48B22 0%, #F0AF63 100%)',
        'gradient-green': 'linear-gradient(180deg, #099D58 0%, #52DA9A 100%)',
        'gradient-red': 'linear-gradient(180deg, #E92431 0%, #E07266 100%)',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(
        {
          '.scrollbar-hide': {
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
          '.scrollbar-default': {
            '-ms-overflow-style': 'auto',
            'scrollbar-width': 'auto',
            '&::-webkit-scrollbar': {
              display: 'block',
            },
          },
        },
        ['responsive']
      );
    }),
  ],
};
