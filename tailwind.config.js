/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./App.{js,jsx,ts,tsx}',
		'./screens/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
		'./Navigators/**/*.{js,jsx,ts,tsx}',
		'./utils/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#003049',
				inActive: '#E7E6F7',
				dark: '#141414',
			},
		},
	},
	plugins: [],
};
