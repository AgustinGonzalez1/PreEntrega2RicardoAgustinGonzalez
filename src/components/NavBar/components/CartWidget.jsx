import { NavLink } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";
import { useContext } from "react";

const CartWidget = () => {
	const { cart } = useContext(CartContext);

	return (
		<NavLink to="/cart" className="flex justify-end items-center text-white relative md:w-[150px]">
			<button>
				<i className="fa-solid fa-cart-shopping text-[25px]"></i>
			</button>
			<span className="flex justify-center items-center absolute top-[18px] right-[-8px] bg-red-600 rounded-[100%] h-4 w-4 text-xs font-bold">
				{cart.reduce((acc, prod) => acc + prod.quantity, 0)}
			</span>
		</NavLink>
	);
};
export default CartWidget;
