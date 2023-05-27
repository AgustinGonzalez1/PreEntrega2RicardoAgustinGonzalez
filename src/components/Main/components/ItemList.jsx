import Item from "./Item";

const ItemList = ({ items }) => {
	return (
		<div className="flex justify-center flex-wrap gap-5 my-5">
			{items.map((item) => (
				<Item key={item.idx} item={item} />
			))}
		</div>
	);
};

export default ItemList;
