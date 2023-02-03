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
