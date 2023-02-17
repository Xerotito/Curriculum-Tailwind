//Aquí van las configuraciones de tailwind, al igual que las fuentes custom agregadas
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./*.{html,js}" ],
  theme: {
    extend: {
      fontFamily: {
        roomBold: [ "Room-Bold" ],
        roomMedium: [ "Room-Medium" ],
        roomLight: [ "Room-Light" ],
      }
    },
  },
  plugins: [],
}
