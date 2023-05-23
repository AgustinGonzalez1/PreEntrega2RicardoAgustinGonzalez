import { useState } from "react";
import CartWidget from "./components/CartWidget";
import Icon from "./components/IconIndex";
import Hamburger from "./components/Hamburger";

const Lista = ({ text }) => {
	return (
		<li className="mx-[10px]">
			<button className=" text-white hover:text-[#000] duration-200 font-bold">{text}</button>
		</li>
	);
};

const Nav = () => {
	const [classes, setClasses] = useState(false);
	const addClasses = () => {
		setClasses(!classes);
	};
	const show = classes ? "h-96" : "";

	return (
		<nav className={`flex justify-between h-[80px] bg-[#7753E6] fixed w-full top-0 px-5 z-20`}>
			<Hamburger addClasses={addClasses} classes={classes} />
			<Icon />
			<ul
				className={`h-0 ease-in-out bg-[#7753E6] duration-300 flex items-center absolute md:static w-full md:w-auto justify-center flex-col md:flex-row overflow-hidden top-[80px] left-[0px] gap-5 md:gap-0 md:h-auto ${show} rounded-b-lg`}>
				<Lista text={"Section1"} />
				<Lista text={"Section2"} />
				<Lista text={"Section3"} />
				<Lista text={"Section4"} />
			</ul>
			<CartWidget />
		</nav>
	);
};

export default Nav;
