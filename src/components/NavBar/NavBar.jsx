import CartWidget from "./components/CartWidget";
import Icon from "./components/IconIndex";
import Hamburger from "./components/Hamburger";

import { useState } from "react";

const Lista = ({ text }) => {
	return (
		<li className="mx-[10px]">
			<button className=" text-white hover:text-[#000] duration-200 font-bold">{text}</button>
		</li>
	);
};

const Nav = () => {
	const [clases, setClases] = useState({
		clase: "",
		clase1: "",
		clase2: "",
		clase3: "",
	});

	const agregarClases = () => {
		setClases((prevClases) => ({
			clase: prevClases.clase.includes("h-96") ? "" : "h-96",
			clase1: prevClases.clase1.includes("linea11") ? "" : "linea11",
			clase2: prevClases.clase2.includes("linea22") ? "" : "linea22",
			clase3: prevClases.clase3.includes("linea33") ? "" : "linea33",
		}));
	};

	return (
		<nav className={`flex justify-between h-[80px] bg-[#7753E6] fixed w-full top-0 px-5 z-20`}>
			<Hamburger agregarClases={agregarClases} clase1={clases.clase1} clase2={clases.clase2} clase3={clases.clase3} />
			<Icon />
			<ul
				className={`h-0 ease-in-out bg-[#7753E6] duration-300 flex items-center absolute md:static w-full md:w-auto justify-center flex-col md:flex-row overflow-hidden top-[80px] left-[0px] gap-5 md:gap-0 md:h-auto ${clases.clase} rounded-b-lg`}>
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
