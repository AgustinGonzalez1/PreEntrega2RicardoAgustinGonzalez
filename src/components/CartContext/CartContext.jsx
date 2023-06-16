import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (item, quantity) => {
		if (isInCart(item.id) || isInCart(item.idx)) {
			setCart((prevCart) => {
				const updatedCart = prevCart.map((prod) => {
					if (prod.idx === item.idx) {
						return { ...prod, quantity: prod.quantity + quantity };
					}
					return prod;
				});
				return updatedCart;
			});
		} else {
			setCart((prevCart) => [...prevCart, { ...item, quantity: quantity }]);
		}
	};

	const deleteItem = (id) => {
		const items = cart.filter((prod) => prod.idx !== id);
		setCart([...items]);
	};

	const clear = () => {
		setCart([]);
	};

	const isInCart = (id) => {
		return cart.some((prod) => prod.idx === id);
	};

	return (
		<>
			<CartContext.Provider value={{ cart, addToCart, clear, deleteItem }}>{children}</CartContext.Provider>
		</>
	);
};
