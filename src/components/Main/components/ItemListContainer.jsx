import React, { useState, useEffect } from "react";
import asyncMock from "./asyncMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		asyncMock(setItems);
	}, []);

	return <ItemList items={items} />;
};

export default ItemListContainer;
