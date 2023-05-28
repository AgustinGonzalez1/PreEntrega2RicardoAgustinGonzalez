import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import dataBase from "./products.json";

const ItemDetailContainer = () => {
	const [item, setItem] = useState();
	const { id } = useParams();

	useEffect(() => {
		setItem();
		new Promise((resolve) => {
			setTimeout(() => {
				resolve(dataBase);
			}, 2000);
		}).then((data) => {
			setItem(data.find((items) => items.idx === parseInt(id)));
		});
	}, [id]);

	return (
		<main className="w-full flex justify-center elemento mt-[80px] h-screen">
			<section className="flex justify-center items-center container mx-auto bg-[#191825]">
				{item ? <ItemDetail item={item} /> : <span className="custom-loader"></span>}
			</section>
		</main>
	);
};

export default ItemDetailContainer;
