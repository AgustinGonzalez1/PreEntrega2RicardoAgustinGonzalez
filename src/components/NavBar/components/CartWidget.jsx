const CartWidget = () => {
	return (
		<div className="flex justify-end items-center text-white relative md:w-[150px]">
			<button>
				<i className="fa-solid fa-cart-shopping text-[25px]"></i>
			</button>
			<span className="flex justify-center items-center absolute top-[18px] right-[-8px] bg-red-600 rounded-[100%] h-4 w-4 text-[13px]">
				0
			</span>
		</div>
	);
};
export default CartWidget;
