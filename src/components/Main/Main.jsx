import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";

const Main = () => {
	return (
		<main className="w-full flex flex-col justify-center elemento">
			<section className="flex flex-col container mx-auto bg-[#191825]">
				<h2 className="text-center text-2xl text-white my-4">Productos</h2>
				<ItemListContainer />

				<ItemDetailContainer />
			</section>
		</main>
	);
};

export default Main;
