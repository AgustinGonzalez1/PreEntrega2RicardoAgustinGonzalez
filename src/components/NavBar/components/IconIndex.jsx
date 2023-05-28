import IconImg from "./images/iconImg.png";
import { NavLink } from "react-router-dom";

const Icon = () => {
	return (
		<NavLink to="/" className="flex justify-center items-center w-[140px]">
			<img src={IconImg} alt="Icono" className="w-full" />
		</NavLink>
	);
};

export default Icon;
