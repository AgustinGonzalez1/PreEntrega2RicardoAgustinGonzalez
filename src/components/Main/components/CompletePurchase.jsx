import { Link } from "react-router-dom";

const CompletePurchase = ({ quantityAdded }) => {
	return (
		<>
			{quantityAdded === 1 ? (
				<p className="text-sm">1 unidad agregada al carrito</p>
			) : (
				<p className="text-sm">{quantityAdded} unidades agregadas al carrito</p>
			)}
			<Link
				to="/cart"
				className="p-2 border-2 w-[150px] mt-[68px] mb-2 relative bg-transparent z-[2] button group transition-all duration-300 ease-in-out border-oscuro1 hover:text-white text-center">
				<span className="absolute bg-oscuro1 h-full w-0 top-0 left-0 z-[-1] button-span1 group-hover:w-1/2 duration-300 ease-in-out"></span>
				Terminar compra
				<span className="absolute bg-oscuro1 h-full w-0 top-0 right-0 z-[-1] button-span2 group-hover:w-1/2 duration-300 ease-in-out"></span>
			</Link>
		</>
	);
};

export default CompletePurchase;
