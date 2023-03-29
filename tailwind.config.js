/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	fontFamily: {
		Poppins: ["Poppins"],
		Robato: ["Roboto"],
	},
	theme: {
		extend: {
			colors: {
				alfa: "#003B73",
				beta: "#0074B7",
				gama: "#60A3D9",
				delta: "#BFD7ED",
			},
		},
	},
	plugins: [],
};
