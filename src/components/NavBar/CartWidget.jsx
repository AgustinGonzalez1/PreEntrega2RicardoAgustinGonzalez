const CartWidget = () => {
	return (
		<div className="flex justify-end items-center text-white relative mr-[20px] w-[150px]">
			<a href="#">
				<i className="fa-solid fa-cart-shopping text-[25px]"></i>
			</a>
			<span className="flex justify-center items-center absolute top-[18px] right-[-8px] bg-red-600 rounded-[100%] h-4 w-4 text-[13px]">
				0
			</span>
		</div>
	);
};
export default CartWidget;
