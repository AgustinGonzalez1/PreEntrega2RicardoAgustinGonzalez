import crash from "./images/crash.gif";

const NotFound = () => {
	return (
		<div className="top-[90px] calc flex flex-col justify-center items-center bg-black">
			<h1 className="text-white text-3xl mb-2">Ups, pagina no encontrada</h1>
			<p className="text-white">Pero te encontraste con crash bailando :D</p>
			<img src={crash} alt="crash" className="w-[300px] h-[300px]" />
		</div>
	);
};

export default NotFound;
