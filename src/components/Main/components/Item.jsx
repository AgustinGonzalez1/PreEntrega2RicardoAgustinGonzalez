const Item = ({ item }) => {
	return (
		<div className="flex w-[250px] flex-col rounded-xl overflow-hidden ">
			<div className="overflow-hidden bg-gradient-to-b from-[#865dff] to-[#e384ff]">
				<img src={item.image} alt={item.title} className="w-full" />
			</div>
			<div className="bg-[#f8f8f8] p-8 flex flex-col gap-8 relative">
				<div className="absolute top-[-16px] right-3 flex justify-center items-center rounded-full overflow-hidden bg-gradient-to-b from-[#865dff] to-[#e384ff] text-white h-8 w-8">
					<span className="flex justify-center items-center">
						<i className="fa-solid fa-info"></i>
					</span>
				</div>
				<div>
					<p className="text-[10px] text-end">{item.type}</p>
					<h3 className="text-lg font-bold">{item.title}</h3>
					<p className="text-sm">{item.brand}</p>
				</div>
				<div className="flex justify-between">
					<p className="text-sm font-semibold">{item.section}</p>
					<p className="text-sm font-semibold">${item.price}</p>
				</div>
			</div>
		</div>
	);
};

export default Item;