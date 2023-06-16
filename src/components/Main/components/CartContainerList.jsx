import { CartContext } from "../../CartContext/CartContext";
import { useContext } from "react";
import Button from "./button";
import ListOfCart from "./ListOfCart";

const CartContainerList = () => {
	const { cart, deleteItem, clear } = useContext(CartContext);

	return (
		<div className="w-full flex flex-col gap-5 px-5 my-5 justify-between calc4">
			<div className="flex flex-col gap-5 md:items-center">
				{cart.length > 0 && cart.map((prod) => <ListOfCart key={prod.idx} prod={prod} deleteItem={deleteItem} />)}
			</div>
			<div className="flex justify-between bg-white p-5">
				<div>
					<Button text1="Vaciar carrito" function1={clear} />
				</div>
				<p className="text-black text-2xl flex justify-center items-center">
					Total: ${cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)}
				</p>
			</div>
		</div>
	);
};

export default CartContainerList;
