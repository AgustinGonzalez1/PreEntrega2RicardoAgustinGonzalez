/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				mover: {
					"0%": {
						right: "-900px",
					},
					"100%": {
						right: "900px",
					},
				},
				mover1: {
					"0%": {
						right: "-500px",
					},
					"100%": {
						right: "500px",
					},
				},
			},
			animation: {
				mover: "mover 7s linear infinite",
				mover1: "mover1 7s linear infinite",
			},
			colors: {
				oscuro: "#0d1b2a",
				oscuro1: "#1b263b",
				intermedio: "#415a77",
				claro: "#778da9",
				clarito: "#e0e1dd",
			},
		},
	},
	plugins: [],
};
