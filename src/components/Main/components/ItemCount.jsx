import React, { useState, useEffect } from "react";

const AddAndSubtract = ({ operation, icon }) => {
	return (
		<button
			onClick={operation}
			className="flex justify-center items-center text-center w-6 h-6 border border-solid border-intermedio hover:text-white rounded-full transition duration-100 hover:bg-intermedio">
			{icon}
		</button>
	);
};

const ItemCount = ({ stock, initial }) => {
	const [number, setNumber] = useState(initial);
	const [newStock, setNewStock] = useState(stock);

	const add = () => {
		number < newStock && setNumber(number + 1);
	};

	const subtract = () => {
		number > 1 && setNumber(number - 1);
	};

	const onAdd = () => {
		if (newStock > 0 && number <= newStock) {
			setNewStock(newStock - number);
			setNumber(1);
		}
	};

	useEffect(() => {
		setNewStock(stock);
		setNumber(initial);
		stock === 0 && setNumber(0);
	}, [stock]);

	useEffect(() => {
		newStock === 0 && setNumber(0);
		newStock > 0 && setNumber(1);
	}, [newStock]);

	return (
		<div className="flex flex-col p-1 m-1 w-40 gap-3">
			<div className="flex justify-between mx-1">
				<AddAndSubtract operation={subtract} icon={"-"} />
				<h2 className="w-20 text-center">{number}</h2>
				<AddAndSubtract operation={add} icon={"+"} />
			</div>
			<div className="m-1 ">
				<p>stock: {newStock}</p>
			</div>
			<div className="flex justify-center">
				<button
					className="p-2 border-2 w-full relative bg-transparent z-[2] button group transition-all duration-300 ease-in-out border-oscuro1 hover:text-white"
					onClick={onAdd}>
					<span className="absolute bg-oscuro1 h-full w-0 top-0 left-0 z-[-1] button-span1 group-hover:w-1/2 duration-300 ease-in-out"></span>
					add to cart
					<span className="absolute bg-oscuro1 h-full w-0 top-0 right-0 z-[-1] button-span2 group-hover:w-1/2 duration-300 ease-in-out"></span>
				</button>
			</div>
		</div>
	);
};

export default ItemCount;
