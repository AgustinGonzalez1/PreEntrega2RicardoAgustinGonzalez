import { Link } from "react-router-dom";
import Header from "../Header/Header";
import imagen1 from "./components/images/image1.jpg";
import imagen2 from "./components/images/image2.jpg";
import imagen3 from "./components/images/image3.png";
import imagen4 from "./components/images/image4.jpeg";
import Button from "./components/Button";

const Sections = ({ text, url, image }) => {
	return (
		<section className="flex flex-col bg-[#191825] bg-gradient-to-b from-[#865dff] to-[#e384ff] p-2 w-[500px] duration-200 card mx-6 md:mx-0">
			<div>
				<img className="w-full aspect-video object-cover" src={image} alt={text} />
			</div>
			<div className="bg-white flex justify-between md:p-6 items-center flex-col p-4 lg:flex-row">
				<h4 className="text-center text-black md:text-lg text-xs mb-4">{text}</h4>
				<Link to={url} className="w-full lg:w-24">
					<Button text1="Visitar" />
				</Link>
			</div>
		</section>
	);
};

const Index = () => {
	return (
		<>
			<Header />
			<main className="w-full flex flex-col justify-center elemento">
				<section className="flex flex-col container mx-auto bg-[#191825]">
					<h2 className="text-center text-2xl text-white my-4">Inicio</h2>
					<section className="flex gap-6 flex-wrap justify-center mb-6">
						<Sections text={"Todos los productos"} url={"/productos"} image={imagen1} />
						<Sections text={"Indumentaria de Hombre"} url={"/category/Hombre"} image={imagen2} />
						<Sections text={"Indumentaria de Mujer"} url={"/category/Mujer"} image={imagen3} />
						<Sections text={"Mancuernas"} url={"/category/Mancuernas"} image={imagen4} />
					</section>
				</section>
			</main>
		</>
	);
};

export default Index;
