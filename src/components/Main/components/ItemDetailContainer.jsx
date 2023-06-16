import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
	const [item, setItem] = useState();
	const { id } = useParams();

	useEffect(() => {
		setItem();
		const db = getFirestore();
		const data = doc(db, "products", id);
		getDoc(data).then((result) => {
			setItem({ id: result.id, ...result.data() });
		});
	}, [id]);

	return (
		<main className="w-full flex justify-center elemento mt-[80px] calc2 overflow-hidden">
			<section className="flex justify-center items-center container mx-auto bg-[#191825]">
				{item ? <ItemDetail item={item} /> : <span className="custom-loader"></span>}
			</section>
		</main>
	);
};

export default ItemDetailContainer;
