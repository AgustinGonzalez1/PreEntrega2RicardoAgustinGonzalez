import { useState } from "react";
import CartWidget from "./components/CartWidget";
import Icon from "./components/IconIndex";
import Hamburger from "./components/Hamburger";
import { NavLink } from "react-router-dom";

const Lista = ({ text, url }) => {
	return (
		<li className="mx-[10px]">
			<NavLink
				to={url}
				className={({ isActive }) =>
					isActive ? "text-[#191825] font-bold" : "text-white hover:text-[#191825] duration-200 font-bold"
				}>
				{text}
			</NavLink>
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
				<Lista text={"Productos"} url={"/"} />
				<Lista text={"Hombre"} url={"/category/Hombre"} />
				<Lista text={"Mujer"} url={"/category/Mujer"} />
				<Lista text={"Mancuernas"} url={"/category/Mancuernas"} />
			</ul>
			<CartWidget />
		</nav>
	);
};

export default Nav;
