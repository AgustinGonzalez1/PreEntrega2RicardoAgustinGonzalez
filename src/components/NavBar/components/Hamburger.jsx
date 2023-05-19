const Hamburger = ({ agregarClases, clase1, clase2, clase3 }) => {
	return (
		<button className="md:hidden" onClick={agregarClases}>
			<div className={`linea1 ${clase1}`}></div>
			<div className={`linea2 ${clase2}`}></div>
			<div className={`linea3 ${clase3}`}></div>
		</button>
	);
};

export default Hamburger;
