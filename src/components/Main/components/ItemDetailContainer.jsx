import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { asyncMockId } from "./asyncMock";

const ItemDetailContainer = () => {
	const [item, setItem] = useState({});

	useEffect(() => {
		asyncMockId(setItem);
	}, []);

	return (
		<section className="w-full flex justify-center items-center elemento h-screen">
			<ItemDetail item={item} />
		</section>
	);
};

export default ItemDetailContainer;
