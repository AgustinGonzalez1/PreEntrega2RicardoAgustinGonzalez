const CartList = ({ prod, deleteItem }) => {
	return (
		<div className="flex justify-between md:w-[728px] p-2 card duration-200 bg-gradient-to-b from-[#865dff] to-[#e384ff]">
			<div className="flex w-full justify-between md:flex-nowrap">
				<div className="bg-transparent mr-2 border-[1px] w-12 md:w-16">
					<img src={prod.image} alt={prod.title} className="w-12 md:w-16" />
				</div>
				<div className="flex-1 flex justify-between bg-white p-2">
					<div className="flex justify-center items-start flex-col w-[110px] md:w-48">
						<p className="md:text-lg text-xs">{prod.title}</p>
						<p className="md:text-sm text-xs">cantidad: {prod.quantity}</p>
					</div>
					<div className="flex flex-col justify-center items-center"></div>

					<div className="flex flex-col justify-center items-start">
						<p className="md:text-sm text-xs">Total:</p>
						<p className="text-end md:text-lg text-xs">${prod.price * prod.quantity}</p>
					</div>
				</div>
				<div className="flex justify-center items-center ">
					{deleteItem && (
						<button
							className="text-white bg-[black] h-12 w-12 md:h-16 md:w-16 duration-200 hover:bg-red-500"
							onClick={() => {
								deleteItem(prod.idx);
							}}>
							<i className="fa-solid fa-x"></i>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default CartList;
