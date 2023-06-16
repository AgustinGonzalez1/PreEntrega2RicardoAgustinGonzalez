const Title = ({ id, featured }) => {
	if (id === "Hombre" || id === "Mujer") {
		return <h2 className="text-center text-2xl text-white mt-5">Indumentaria de {id}</h2>;
	} else if (id === "Mancuernas") {
		return <h2 className="text-center text-2xl text-white mt-5">Mancuernas</h2>;
	} else {
		return <h2 className="text-center text-2xl text-white mt-5">{featured ? "Destacado" : "Todos los productos"}</h2>;
	}
};

export default Title;
