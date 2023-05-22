import React, { useState, useEffect } from "react";
import dataBase from "./productos.json";

const fetchData = async (setData) => {
	try {
		// Simular una espera de 3 segundos antes de obtener los datos
		await new Promise((resolve) => setTimeout(resolve, 3000));
		setData(dataBase);
	} catch (error) {
		console.error("Error al obtener los datos:", error);
	}
};

const Item = ({ item }) => {
	return (
		<div className="flex w-[250px] flex-col rounded-xl overflow-hidden ">
			<div className="overflow-hidden bg-gradient-to-b from-[#865dff] to-[#e384ff]">
				<img src={item.image} alt={item.title} className="w-full" />
			</div>
			<div className="bg-[#f8f8f8] p-8 flex flex-col gap-8 relative">
				<div className="absolute top-[-16px] right-3 flex justify-center items-center rounded-full overflow-hidden bg-gradient-to-b from-[#865dff] to-[#e384ff] text-white h-8 w-8">
					<span className="flex justify-center items-center">
						<i className="fa-solid fa-info"></i>
					</span>
				</div>
				<h3 className="text-lg font-bold">{item.title}</h3>
				<div className="flex justify-between">
					<p className="text-sm font-semibold">{item.section}</p>
					<p className="text-sm font-semibold">${item.price}</p>
				</div>
			</div>
		</div>
	);
};

const ItemListContainer = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData(setData);
	}, []);

	return (
		<div className="flex justify-center flex-wrap gap-5">
			{data.length > 0 ? data.map((item) => <Item key={item.id} item={item} />) : <span className="loader"></span>}
		</div>
	);
};

export default ItemListContainer;
