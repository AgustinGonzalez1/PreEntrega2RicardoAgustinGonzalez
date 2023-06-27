import { useState, useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
import Button from "./Button";
import CartList from "./CartList";
import PurchaseForm from "./PurchaseForm";

const Checkout = () => {
	const { cart } = useContext(CartContext);
	const [total, setTotal] = useState(0);
	useState(() => {
		setTotal(cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0));
	}, [cart]);

	return (
		<main className="w-full flex flex-col justify-center elemento mt-[80px]">
			<section className="flex flex-col container mx-auto bg-[#191825]">
				{cart.length > 0 ? (
					<h2 className="text-center text-2xl text-white my-4">Finalizar compra</h2>
				) : (
					<h2 className="text-center text-2xl text-white my-4">No hay productos en el carrito</h2>
				)}
				<div className="w-full flex flex-col gap-5 px-5 my-5 justify-center calc4 items-center">
					<div className="flex flex-col gap-5 md:items-center w-full">
						{cart.length > 0 && cart.map((prod) => <CartList key={prod.idx} prod={prod} />)}
						<div className="flex justify-between bg-white p-5 md:w-[728px]">
							<Link to={"/cart"}>
								<Button text1="Volver al carrito" />
							</Link>
							<div className="flex gap-4">
								<p className="text-black flex justify-center items-center md:text-lg text-xs">Total: ${total}</p>
							</div>
						</div>
					</div>
					{cart.length > 0 && <PurchaseForm total={total} />}
				</div>
			</section>
		</main>
	);
};

export default Checkout;
