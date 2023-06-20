import React, { useState, useEffect, useContext } from "react";
import Button from "./Button";
import { CartContext } from "../../CartContext/CartContext";

const AddAndSubtract = ({ operation, icon }) => {
	return (
		<button
			onClick={operation}
			className="flex justify-center items-center text-center w-6 h-6 border border-solid border-[#1b263b] hover:text-white rounded-md transition duration-100 hover:bg-[#1b263b]">
			{icon}
		</button>
	);
};

const ItemCount = ({ stock, initial, setQuantityAdded, onAddToCart }) => {
	const [selectedQuantity, setSelectedQuantity] = useState(initial);
	const [newStock, setNewStock] = useState(stock.stock);
	const { cart } = useContext(CartContext);

	useEffect(() => {
		const cartItem = cart.find((item) => item.idx === stock.idx);
		const cartItemQuantity = cartItem ? cartItem.quantity : 0;
		const updatedStock = stock.stock - cartItemQuantity;
		setNewStock(updatedStock);
	}, [cart, stock]);

	useEffect(() => {
		if (newStock === 0) {
			setSelectedQuantity(0);
		} else if (newStock > 0 && selectedQuantity === 0) {
			setSelectedQuantity(1);
		}
	}, [newStock]);

	const onAdd = () => {
		if (newStock > 0 && selectedQuantity <= newStock) {
			setNewStock(newStock - selectedQuantity);
			setSelectedQuantity(1);
		}
		setQuantityAdded(selectedQuantity);
		onAddToCart(selectedQuantity);
	};

	const add = () => {
		selectedQuantity < newStock && setSelectedQuantity(selectedQuantity + 1);
	};

	const subtract = () => {
		selectedQuantity > 1 && setSelectedQuantity(selectedQuantity - 1);
	};

	return (
		<div className="flex flex-col p-1 m-1 w-40 gap-3">
			{newStock === 0 ? (
				<p className="text-center my-[54px] text-red-500">Sin stock</p>
			) : (
				<>
					<div className="flex justify-between mx-1">
						<AddAndSubtract operation={subtract} icon={<i className="fa-solid fa-minus text-sm"></i>} />
						<h2 className="w-20 text-center">{selectedQuantity}</h2>
						<AddAndSubtract operation={add} icon={<i className="fa-solid fa-plus text-sm"></i>} />
					</div>
					<div className="m-1 ">
						<p>stock: {newStock}</p>
					</div>
					<div className="flex justify-center">
						<Button text="agregar" function1={onAdd} text1={"Agregar al carrito"} />
					</div>
				</>
			)}
		</div>
	);
};

export default ItemCount;
