/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainblack: '#222831',
        secondaryBlack: '#2C3639',
        mainWhite: '#F9F7F7',
        secondaryWhite: '#FFF6F6'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Nunito: ['Nunito'],
        Roboto: ['Roboto,sans-serif']
      },
      container: {
        canter: true,
        padding: '1rem'
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
