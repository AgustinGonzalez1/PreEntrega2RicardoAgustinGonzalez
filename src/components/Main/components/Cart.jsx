import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import CartContainerList from "./CartContainerList";

const Cart = () => {
	const { cart } = useContext(CartContext);

	return (
		<main className="w-full flex flex-col justify-center elemento mt-[80px] calc3">
			<section className="flex flex-col container mx-auto bg-[#191825] justify-center items-center calc3">
				{cart.length === 0 ? <p className="text-white text-2xl">No hay productos en el carrito</p> : <CartContainerList />}
			</section>
		</main>
	);
};

export default Cart;
