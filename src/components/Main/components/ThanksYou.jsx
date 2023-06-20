import { useParams } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";
import { useContext, useEffect } from "react";

const ThanksYou = () => {
	const { orderId } = useParams();
	const { clear } = useContext(CartContext);

	useEffect(() => {
		clear();
	}, []);

	return (
		<main className="w-full flex flex-col justify-center elemento mt-[80px] ">
			<section className="flex flex-col container mx-auto bg-[#191825] calc3 justify-center">
				<h2 className="text-center text-2xl text-white my-4">Gracias por tu compra!</h2>
				<div className="w-full flex flex-col gap-5 px-5 my-5 justify-center items-center">
					<p className="text-center text-white text-2xl">Tu número de orden es: {orderId}</p>
				</div>
			</section>
		</main>
	);
};

export default ThanksYou;
