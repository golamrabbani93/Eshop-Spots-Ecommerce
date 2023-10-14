/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#45b44d',

					secondary: 'rgb(29, 185, 144)',

					accent: '#A7ECEE',

					neutral: '#212a35',

					'base-100': '#f8f8fc',

					info: '#789ded',

					success: '#4de6a3',

					warning: '#b5930d',

					error: '#fa3d5d',
				},
			},
		],
	},
	plugins: [require('daisyui')],
};
