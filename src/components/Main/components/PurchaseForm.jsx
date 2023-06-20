import { useContext, useState } from "react";
import { CartContext } from "../../../components/CartContext/CartContext";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";

const PurchaseForm = ({ clear }) => {
	const [info, setInfo] = useState({
		name: "",
		email: "",
		phone: "",
	});
	const [orderId, setOrderId] = useState("");

	const { cart } = useContext(CartContext);
	const navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();

		const buyer = {
			name: info.name,
			email: info.email,
			phone: info.phone,
		};

		const items = cart.map((item) => ({
			id: item.id,
			title: item.title,
			price: item.price,
			quantity: item.quantity,
		}));

		const date = new Date();
		const currentDate = `Compra realizada a la hora: ${date.getHours()}:${date.getMinutes()} del día ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

		if (
			info.name !== "" &&
			info.email !== "" &&
			info.phone !== "" &&
			(info.email.includes("@hotmail.com") || info.email.includes("@gmail.com"))
		) {
			const order = {
				buyer,
				items,
				date: currentDate,
				total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
			};

			const db = getFirestore();
			const orders = collection(db, "orders");
			addDoc(orders, order)
				.then((res) => {
					setOrderId(res.id);
				})
				.catch((err) => console.log(err));

			cart.forEach((item) => {
				const productRef = doc(db, "products", item.id);
				updateDoc(productRef, {
					stock: item.stock - item.quantity,
				});
			});

			clear();
		}
	};
	return (
		<div className="md:w-[728px]">
			<form action="">
				<input
					type="text"
					placeholder="Nombre"
					className={`w-full bg-[#191825] border-2 border-white text-white p-2 my-2`}
					onInput={(e) => setInfo({ ...info, name: e.target.value })}
				/>
				<input
					type="text"
					placeholder="Email"
					className={`w-full bg-[#191825] border-2 border-white text-white p-2 my-2`}
					onInput={(e) => setInfo({ ...info, email: e.target.value })}
				/>
				<input
					type="number"
					placeholder="Celular"
					className={`w-full bg-[#191825] border-2 border-white text-white p-2 my-2`}
					onInput={(e) => setInfo({ ...info, phone: e.target.value })}
				/>
				<button
					className="w-full bg-[#191825] border-2 border-white text-white p-2 my-2 cursor-pointer duration-200 hover:bg-white hover:text-black"
					onClick={handleClick}>
					Generar orden
				</button>
			</form>
			{orderId && (
				<div className="w-full bg-[#191825] border-2 border-white text-white p-2 my-2">
					<p className="text-center">Tu orden de compra es: {orderId}</p>
				</div>
			)}
		</div>
	);
};

export default PurchaseForm;
