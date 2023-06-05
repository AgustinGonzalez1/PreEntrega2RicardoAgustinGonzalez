import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { asyncMockItem } from "./asyncMock";

const ItemDetailContainer = () => {
	const [item, setItem] = useState();
	const { id } = useParams();

	useEffect(() => {
		setItem();
		asyncMockItem(id).then((data) => {
			setItem(data);
		});
	}, [id]);

	return (
		<main className="w-full flex justify-center elemento mt-[80px] calc overflow-hidden">
			<section className="flex justify-center items-center container mx-auto bg-[#191825]">
				{item ? <ItemDetail item={item} /> : <span className="custom-loader"></span>}
			</section>
		</main>
	);
};

export default ItemDetailContainer;
