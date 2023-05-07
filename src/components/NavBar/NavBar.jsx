import CartWidget from "./CartWidget";
import Icon from "./IconIndex";

const Lista = ({ link, text }) => {
	return (
		<li className="mx-[10px]">
			<a href={link} className=" text-white hover:text-[#000] duration-200">
				{text}
			</a>
		</li>
	);
};
const Nav = () => {
	return (
		<nav className="flex justify-between h-[80px] bg-[var(--main)]">
			<Icon />
			<ul className="flex items-center">
				<Lista link={"#"} text={"Section1"} />
				<Lista link={"#"} text={"Section2"} />
				<Lista link={"#"} text={"Section3"} />
				<Lista link={"#"} text={"Section4"} />
			</ul>
			<CartWidget />
		</nav>
	);
};

export default Nav;
