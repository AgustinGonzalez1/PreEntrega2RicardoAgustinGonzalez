import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Header from "../../Header/Header";
import { useParams } from "react-router-dom";
import { asyncMock } from "./asyncMock";

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		setItems([]);
		asyncMock(id).then((data) => {
			setItems(data);
		});
	}, [id]);

	return (
		<>
			<Header />
			<main className="w-full flex flex-col justify-center elemento">
				<section className="flex flex-col container mx-auto bg-[#191825] justify-center items-center">
					<h2 className="text-center text-2xl text-white mt-5">{id ? `${id}` : "Todos los productos"}</h2>
					{items.length === 0 ? <span className="loader my-10"></span> : <ItemList items={items} />}
				</section>
			</main>
		</>
	);
};

export default ItemListContainer;
