import Item from "./Item";

const ItemList = ({ items }) => {
	return (
		<div className="flex justify-center flex-wrap gap-5">
			{items.length > 0 ? items.map((item) => <Item key={item.id} item={item} />) : <span className="loader"></span>}
		</div>
	);
};

export default ItemList;
