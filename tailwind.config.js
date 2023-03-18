/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue-light': '#7185A8',
      'blue': '#1fb6ff',
      'blue-deep': '#1D3D76',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'yellow-deep': '#F4D17D',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      width: {
        '1/10': '10%',
        'regi-box': '435px',
      },
      height: {
        '1/10': '10%',
        '1/30': '3.3334%',
        'regi-box': '480px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '2.5x1': '1.25rem',
        '10': '10px',
      },
      borderWidth: {
        '5': '5px',
      },
      lineHeight: {
        '13': '3.25rem',
      },
    }
  },
  plugins: [],
}