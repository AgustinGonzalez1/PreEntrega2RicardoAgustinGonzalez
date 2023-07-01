import "./App.css";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/Main/components/ItemListContainer";
import ItemDetailContainer from "./components/Main/components/ItemDetailContainer";
import Nav from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CartContextProvider } from "./components/CartContext/CartContext";
import Cart from "./components/Main/components/Cart";
import Index from "./components/Main/Index";
import Checkout from "./components/Main/components/Checkout";
import ThanksYou from "./components/Main/components/ThanksYou";

function App() {
	return (
		<>
			<CartContextProvider>
				<BrowserRouter>
					<Nav />
					<Routes>
						<Route path="/productos" element={<ItemListContainer />} />
						<Route path="/category/:id" element={<ItemListContainer />} />
						<Route path="/item/:id" element={<ItemDetailContainer />} />
						<Route path="/" element={<Index />} />
						<Route path="*" element={<NotFound />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/thankyou/:orderId" element={<ThanksYou />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</CartContextProvider>
		</>
	);
}

export default App;
