/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        blue: {
          '100': '#e6f1f6',
          '200': '#80b8d0',
          '300': '#66aac7',
          '400': '#4d9cbd',
          '500': '#338db4',
          '600': '#197faa',
          '700': '#006691',
          '800': '#005a81',
          '900': '#004f71',
          '950': '#004461',
          
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  content: ['./src/**/*.{vue,html,js}', './public/index.html'],
  plugins: [],
}

