import ItemCount from "./components/ItemCount";

const Main = () => {
	return (
		<main className="w-full md:max-w-[1200px] mx-auto flex flex-col bg-clarito">
			<section className="mb-5 mt-2 border-t-2 border-black">
				<ItemCount stock={4} initial={1} />
			</section>
		</main>
	);
};

export default Main;
