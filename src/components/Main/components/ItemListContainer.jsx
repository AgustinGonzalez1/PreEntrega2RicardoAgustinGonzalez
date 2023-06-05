import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Header from "../../Header/Header";
import { useParams } from "react-router-dom";
import { asyncMock } from "./asyncMock";

const Title = ({ id, featured }) => {
	if (id === "Hombre" || id === "Mujer") {
		return <h2 className="text-center text-2xl text-white mt-5">Indumentaria de {id}</h2>;
	} else if (id === "Mancuernas") {
		return <h2 className="text-center text-2xl text-white mt-5">Mancuernas</h2>;
	} else {
		return <h2 className="text-center text-2xl text-white mt-5">{featured ? "Destacado" : "Todos los productos"}</h2>;
	}
};

const ItemListContainer = ({ featured }) => {
	const [items, setItems] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		setItems([]);
		asyncMock(id).then((data) => {
			featured ? setItems(data.filter((item) => item.stock <= 10)) : setItems(data);
		});
	}, [id, featured]);

	return (
		<>
			<Header />
			<main className="w-full flex flex-col justify-center elemento">
				<section className="flex flex-col container mx-auto bg-[#191825] justify-center items-center">
					<Title id={id} featured={featured} />
					{items.length === 0 ? <span className="loader my-10"></span> : <ItemList items={items} />}
				</section>
			</main>
		</>
	);
};

export default ItemListContainer;
