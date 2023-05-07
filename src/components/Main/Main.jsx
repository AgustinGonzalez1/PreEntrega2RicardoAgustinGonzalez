import ItemListContainer from "./ItemListContainer";

const Main = () => {
	return (
		<main className="w-full md:max-w-[1200px] mx-auto flex flex-col bg-[var(--light)]">
			<section className="mb-5 mt-2 border-t-2 border-black">
				<ItemListContainer greeting="¡Bienvenidos!" greeting2="¡Productos disponibles próximamente!" />
			</section>
		</main>
	);
};

export default Main;
