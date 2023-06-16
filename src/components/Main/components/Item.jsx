import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";

const Item = ({ item }) => {
	const [updatedStock, setUpdatedStock] = useState(item.stock);
	const { cart } = useContext(CartContext);

	useEffect(() => {
		const cartItem = cart.find((prod) => prod.id === item.id);
		const cartItemQuantity = cartItem ? cartItem.quantity : 0;
		const updatedStock = item.stock - cartItemQuantity;
		setUpdatedStock(updatedStock);
	}, [cart, item]);

	return (
		<Link to={`/item/${item.id}`}>
			<div className="flex w-[250px] flex-col overflow-hidden duration-200 card ">
				<div className=" bg-gradient-to-b from-[#865dff] to-[#e384ff]">
					<img src={item.image} alt={item.title} className="w-full" />
				</div>
				<div className="bg-[#f8f8f8] p-8 flex flex-col gap-8">
					<div>
						<p className="text-[10px] text-end">{item.type}</p>
						<h3 className="text-lg font-bold">{item.title}</h3>
						<p className="text-sm">{item.brand}</p>
					</div>
					<div>
						{updatedStock > 0 ? (
							<p className="text-sm">Stock: {updatedStock}</p>
						) : (
							<p className="text-sm text-red-500">Sin stock</p>
						)}
					</div>
					<div className="flex justify-between">
						<p className="text-sm font-semibold">{item.section}</p>
						<p className="text-sm font-semibold">${item.price}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Item;
