/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  plugins: [ require("daisyui") ],
  theme: {
    extend: {
      backgroundImage: {
        'checkout-img': "url('/src/assets/images/checkout/checkout.png')",
      },
      colors: {
        'logo-red': '#FF3811',
        'heading': '#151515', /* dark 01 */
        'sub-heading': '#444444', /* dark 02 */
        'body': '#737373',/* dark 03 */
        'form': '#A2A2A2',/* dark 04 */
        'form-bg': '#F3F3F3',/* dark 07 */
      }
    },
  },
}

