import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Header from "../../Header/Header";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, orderBy, query, where } from "firebase/firestore";
import Title from "./Title";

const ItemListContainer = ({ featured }) => {
	const [items, setItems] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		setItems([]);

		const db = getFirestore();
		const productsCollection = collection(db, "products");
		const sortedProducts = query(productsCollection, orderBy("type", "asc"), orderBy("section", "asc"));
		const q = id
			? query(productsCollection, where("section", "==", id), orderBy("type", "asc"), orderBy("section", "asc"))
			: sortedProducts;

		getDocs(q).then((results) => {
			if (results.size > 0) {
				const data = results.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				featured ? setItems(data.filter((item) => item.stock <= 10)) : setItems(data);
			} else {
				console.log("No hay productos");
			}
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
