const ItemListContainer = ({ greeting, greeting2 }) => {
	return (
		<>
			<h1 className="text-black text-center">{greeting}</h1>
			<h2 className="text-black text-center">{greeting2}</h2>
		</>
	);
};

export default ItemListContainer;
