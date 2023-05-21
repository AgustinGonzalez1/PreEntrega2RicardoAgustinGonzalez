import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";

const Main = () => {
	return (
		<main className="w-full flex flex-col justify-center bg-[#191825]">
			<section className="flex flex-col container mx-auto">
				<h2 className="text-center text-2xl text-white my-4">Productos</h2>
				<ItemListContainer />

				<ItemCount stock={7} initial={1} />
			</section>
		</main>
	);
};

export default Main;
