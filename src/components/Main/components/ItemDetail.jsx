import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import CompletePurchase from "./CompletePurchase";
import { CartContext } from "../../CartContext/CartContext";

const ItemDetail = ({ item }) => {
	const [quantityAdded, setQuantityAdded] = useState(0);
	const { addToCart } = useContext(CartContext);

	const onAddToCart = (quantity) => {
		addToCart(item, quantity);
	};

	return (
		<div className="flex bg-[#191825] overflow-hidden lg:flex-row flex-col animate-fade-up card duration-200">
			<div className="overflow-hidden bg-gradient-to-b from-[#865dff] to-[#e384ff] lg:w-[400px] w-72">
				<img src={item.image} alt={item.title} className="w-full" />
			</div>
			<div className="bg-[#f8f8f8] p-8 flex flex-col gap-1 lg:gap-8 justify-between lg:w-[400px] w-72">
				<div>
					<p className="text-[10px] text-end">{item.type}</p>
					<h3 className="text-lg font-bold">{item.title}</h3>
					<p className="text-sm">{item.brand}</p>
				</div>
				<p className="text-xs lg:w-[355px]">{item.description}</p>
				<div className="flex justify-center flex-col items-center">
					<div className="flex justify-between w-full">
						<p className="text-sm font-semibold">{item.section}</p>
						<p className="text-sm font-semibold">${item.price}</p>
					</div>

					{quantityAdded === 0 ? (
						<ItemCount stock={item} initial={1} setQuantityAdded={setQuantityAdded} onAddToCart={onAddToCart} />
					) : (
						<CompletePurchase quantityAdded={quantityAdded} />
					)}
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
