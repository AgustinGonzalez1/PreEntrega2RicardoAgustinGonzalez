import CartWidget from "./CartWidget";
import Icon from "./IconIndex";

const Lista = ({ text }) => {
	return (
		<li className="mx-[10px]">
			<button className=" text-white hover:text-[#000] duration-200">{text}</button>
		</li>
	);
};
const Nav = () => {
	return (
		<nav className="flex justify-between h-[80px] bg-[var(--main)] fixed w-full top-0">
			<Icon />
			<ul className="flex items-center">
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
