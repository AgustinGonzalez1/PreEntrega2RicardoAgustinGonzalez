import "./App.css";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/Main/components/ItemListContainer";
import ItemDetailContainer from "./components/Main/components/ItemDetailContainer";
import Nav from "./components/NavBar/NavBar";
import NotFound from "./NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/category/:id" element={<ItemListContainer />} />
					<Route path="/item/:id" element={<ItemDetailContainer />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
// Path: /* element=error404
