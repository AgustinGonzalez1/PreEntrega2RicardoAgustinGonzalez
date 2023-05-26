import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
	return (
		<div className="flex container mx-auto bg-[#191825] w-5/6">
			<div className="overflow-hidden bg-gradient-to-b from-[#865dff] to-[#e384ff] w-1/2">
				<img src={item.image} alt={item.title} className="w-full" />
			</div>
			<div className="bg-[#f8f8f8] p-8 flex flex-col gap-8 justify-between w-1/2">
				<div>
					<p className="text-[10px] text-end">{item.type}</p>
					<h3 className="text-lg font-bold">{item.title}</h3>
					<p className="text-sm">{item.brand}</p>
				</div>
				<div>{item.description && <p className="text-sm">{item.description}</p>}</div>
				<div className="flex justify-center flex-col items-center">
					<div className="flex justify-between w-full">
						<p className="text-sm font-semibold">{item.section}</p>
						<p className="text-sm font-semibold">${item.price}</p>
					</div>
					<ItemCount initial={1} stock={item.stock} />
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
