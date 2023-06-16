const Button = ({ function1, text1 }) => {
	return (
		<button
			className="p-2 border-2 w-full relative bg-transparent z-[2] button group transition-all duration-300 ease-in-out border-oscuro1 hover:text-white"
			onClick={function1}>
			<span className="absolute bg-oscuro1 h-full w-0 top-0 left-0 z-[-1] button-span1 group-hover:w-1/2 duration-300 ease-in-out"></span>
			{text1}
			<span className="absolute bg-oscuro1 h-full w-0 top-0 right-0 z-[-1] button-span2 group-hover:w-1/2 duration-300 ease-in-out"></span>
		</button>
	);
};
export default Button;
