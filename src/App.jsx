import "./App.css";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/Main/components/ItemListContainer";
import ItemDetailContainer from "./components/Main/components/ItemDetailContainer";
import Nav from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/CartContext/CartContext";

function App() {
	return (
		<>
			<CartProvider>
				<BrowserRouter>
					<Nav />
					<Routes>
						<Route path="/" element={<ItemListContainer />} />
						<Route path="/featured" element={<ItemListContainer featured={true} />} />
						<Route path="/category/:id" element={<ItemListContainer />} />
						<Route path="/item/:id" element={<ItemDetailContainer />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</CartProvider>
		</>
	);
}

export default App;
