import { CartContext } from "../../CartContext/CartContext";
import { useContext } from "react";
import Button from "./Button";
import CartList from "./CartList";
import { Link } from "react-router-dom";

const CartContainerList = () => {
	const { cart, deleteItem, clear } = useContext(CartContext);

	return (
		<div className="w-full flex flex-col gap-5 px-5 my-5 justify-between calc4 items-center">
			<div className="flex flex-col gap-5 md:items-center w-full">
				{cart.length > 0 && cart.map((prod) => <CartList key={prod.idx} prod={prod} deleteItem={deleteItem} />)}
			</div>
			<div className="flex justify-between bg-white p-5 md:w-[728px] flex-col-reverse w-full md:flex-row">
				<div>
					<Button text1="Vaciar carrito" function1={clear} />
				</div>
				<div className="flex gap-4 flex-col md:flex-row mb-4 md:mb-0">
					<p className="text-black flex justify-center items-center md:text-lg text-xs">
						Total: ${cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)}
					</p>
					<div>
						<Link to={"/checkout"}>
							<Button text1="Completar compra" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartContainerList;
