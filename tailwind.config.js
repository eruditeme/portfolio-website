/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,jsx, js}"],
	theme: {
		screens: {
			'xs': '350px',
			'sm': '640px',
			'md': '760px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px', // min-width
		  },
		  extend: {
			colors: {
				'pale-red': "#df8875"
			},
		  }
  	},
  plugins: [],
}

