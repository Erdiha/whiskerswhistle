/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBlack: '#222831',
        secondaryBlack: '#2C3639',
        mainWhite: '#F9F7F7',
        secondaryWhite: '#FFF6F6',
        'primary-50': 'rgb(var(--primary-50))',
        'primary-100': 'rgb(var(--primary-100))',
        'primary-200': 'rgb(var(--primary-200))',
        'primary-300': 'rgb(var(--primary-300))',
        'primary-400': 'rgb(var(--primary-400))',
        'primary-500': 'rgb(var(--primary-500))',
        'primary-600': 'rgb(var(--primary-600))',
        'primary-700': 'rgb(var(--primary-700))',
        'primary-800': 'rgb(var(--primary-800))',
        'primary-900': 'rgb(var(--primary-900))',
        'primary-950': 'rgb(var(--primary-950))',
        'surface-0': 'rgb(var(--surface-0))',
        'surface-50': 'rgb(var(--surface-50))',
        'surface-100': 'rgb(var(--surface-100))',
        'surface-200': 'rgb(var(--surface-200))',
        'surface-300': 'rgb(var(--surface-300))',
        'surface-400': 'rgb(var(--surface-400))',
        'surface-500': 'rgb(var(--surface-500))',
        'surface-600': 'rgb(var(--surface-600))',
        'surface-700': 'rgb(var(--surface-700))',
        'surface-800': 'rgb(var(--surface-800))',
        'surface-900': 'rgb(var(--surface-900))',
        'surface-950': 'rgb(var(--surface-950))'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Nunito: ['Nunito'],
        Roboto: ['Roboto', 'sans-serif']
      },
      container: {
        center: true,
        padding: '1rem',
        maxWidth: '50%',
        zIndex: '1'
      },
      screens: {
        sm: '640px', // Small devices (landscape phones, 640px and up)
        md: '768px', // Medium devices (tablets, 768px and up)
        lg: '1024px', // Large devices (desktops, 1024px and up)
        xl: '1280px', // Extra large devices (large desktops, 1280px and up)
        '2xl': '1536px', // Extra extra large devices (high resolution desktops, 1536px and up)
        '3xl': '1920px', // 3x large devices (full HD desktops, 1920px and up)
        '4xl': '2560px', // 4x large devices (4K displays, 2560px and up)
        '5xl': '3840px', // 5x large devices (ultra-high-definition screens, 3840px and up)
        '6xl': '4096px', // 6x large devices (4K cinema, 4096px and up)
        '7xl': '5120px' // 7x large devices (5K displays, 5120px and up)
      }
    }
  },
  plugins: []
}
